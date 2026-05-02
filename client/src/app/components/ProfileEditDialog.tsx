import { useEffect, useId, useMemo, useRef, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Camera, Loader2, Upload, UserRound } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { apiClient } from '../services/api';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Input } from './ui/input';

const MAX_AVATAR_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_AVATAR_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

const readFileAsDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('Could not read the selected image.'));
    reader.readAsDataURL(file);
  });

const getInitials = (firstName: string, lastName: string, fallbackName: string) => {
  const initials = [firstName, lastName]
    .map(part => part.trim().charAt(0))
    .filter(Boolean)
    .join('');

  if (initials) {
    return initials.toUpperCase();
  }

  return fallbackName.trim().charAt(0).toUpperCase() || 'A';
};

interface ProfileEditDialogProps {
  variant?: 'avatar' | 'text';
}

export function ProfileEditDialog({ variant = 'avatar' }: ProfileEditDialogProps) {
  const { user, refreshProfile } = useApp();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fieldId = useId();
  const firstNameId = `${fieldId}-first-name`;
  const lastNameId = `${fieldId}-last-name`;

  useEffect(() => {
    if (!open || !user) {
      return;
    }

    setFirstName(user.firstName);
    setLastName(user.lastName);
    setSelectedFile(null);
    setError(null);
  }, [open, user]);

  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl(user?.avatarUrl ?? null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, user?.avatarUrl]);

  const initials = useMemo(
    () => getInitials(user?.firstName || '', user?.lastName || '', `${user?.firstName || ''} ${user?.lastName || ''}`.trim() || 'A'),
    [user]
  );
  const hasAvatar = variant === 'avatar' && Boolean(user?.avatarUrl);
  const triggerLabel = 'Edit profile';

  const handleAvatarPick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;

    if (!file) {
      setSelectedFile(null);
      return;
    }

    if (!ALLOWED_AVATAR_TYPES.includes(file.type)) {
      setError('Please choose a JPEG, PNG or WEBP.');
      event.target.value = '';
      return;
    }

    if (file.size > MAX_AVATAR_SIZE_BYTES) {
      setError('The avatar file is too large. Maximum size is 5 MB.');
      event.target.value = '';
      return;
    }

    setError(null);
    setSelectedFile(file);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!user) {
      setError('No active user session was found.');
      return;
    }

    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();

    if (!trimmedFirstName || !trimmedLastName) {
      setError('First name and last name are required.');
      return;
    }

    setIsSaving(true);
    setError(null);

    try {
      await apiClient.updateProfile(trimmedFirstName, trimmedLastName);
      await refreshProfile();

      if (selectedFile) {
        const dataUrl = await readFileAsDataUrl(selectedFile);
        const base64Data = dataUrl.includes(',') ? dataUrl.split(',').pop() || '' : dataUrl;

        if (!base64Data) {
          setError('Could not prepare the selected image for upload.');
          return;
        }

        await apiClient.uploadAvatar(base64Data, selectedFile.type);
        await refreshProfile();
      }

      setOpen(false);
      setSelectedFile(null);
    } catch (uploadError: any) {
      const serverMessage = uploadError?.response?.data?.message;
      setError(serverMessage || uploadError?.message || 'Could not save your profile.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      {variant === 'text' ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-white/70 transition-all hover:bg-white/10 hover:text-white"
          aria-label={triggerLabel}
          title={triggerLabel}
        >
          <UserRound size={18} />
          <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{triggerLabel}</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border p-1 shadow-sm outline-none transition hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#F4C430]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#003366] ${
            hasAvatar ? 'border-white/15 bg-transparent shadow-none' : 'border-white/10 bg-[#F4C430]'
          }`}
          aria-label={triggerLabel}
          title={triggerLabel}
        >
          <Avatar className="size-12">
            <AvatarImage src={user?.avatarUrl ?? undefined} alt={`${user?.firstName || ''} ${user?.lastName || ''}`.trim() || 'Profile avatar'} />
            <AvatarFallback className="bg-[#F4C430] text-[0.72rem] font-semibold text-[#003366]">
              {initials}
            </AvatarFallback>
          </Avatar>
        </button>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Update your first and last name, then upload a new profile photo.
            </DialogDescription>
          </DialogHeader>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <Avatar className="size-16 rounded-2xl">
                <AvatarImage src={previewUrl ?? undefined} alt={`${user?.firstName || ''} ${user?.lastName || ''}`.trim() || 'Profile avatar'} />
                <AvatarFallback className="rounded-2xl bg-[#F4C430] text-lg font-semibold text-[#003366]">
                  {initials}
                </AvatarFallback>
              </Avatar>

              <div className="min-w-0 flex-1 space-y-2">
                <p className="text-sm font-semibold text-slate-900">Profile photo</p>
                <p className="text-sm text-slate-500">JPEG, PNG, or WEBP</p>
                {selectedFile && (
                  <p className="mt-1 truncate text-xs text-slate-600">Selected: {selectedFile.name}</p>
                )}
                <div className="flex flex-wrap gap-2 pt-1">
                  <Button type="button" variant="outline" onClick={handleAvatarPick} disabled={isSaving}>
                    <Camera size={16} />
                    Choose photo
                  </Button>
                  {selectedFile && (
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => {
                        setSelectedFile(null);
                        setError(null);
                        if (fileInputRef.current) {
                          fileInputRef.current.value = '';
                        }
                      }}
                      disabled={isSaving}
                    >
                      <UserRound size={16} />
                      Keep current photo
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={handleFileChange}
            />

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700" htmlFor={firstNameId}>
                  First name
                </label>
                <Input
                  id={firstNameId}
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="First name"
                  autoComplete="given-name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700" htmlFor={lastNameId}>
                  Last name
                </label>
                <Input
                  id={lastNameId}
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder="Last name"
                  autoComplete="family-name"
                />
              </div>
            </div>

            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </div>
            )}

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={isSaving}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSaving}>
                {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
