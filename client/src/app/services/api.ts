import axios, { type AxiosError, type AxiosInstance } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

interface LoginResponse {
  message: string;
  user: {
    id: string;
    email: string;
  };
  session: {
    access_token: string;
    refresh_token: string;
  } | null;
}

interface RegisterResponse {
  message: string;
  user: {
    id: string;
    email: string;
  };
  session: {
    access_token: string;
    refresh_token: string;
  } | null;
}

interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

interface ProfileResponse {
  message: string;
  profile: UserProfile;
}

interface ApiError {
  message: string;
  errors?: Record<string, string>;
}

class ApiClient {
  private client: AxiosInstance;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Pobranie tokenów z localStorage przy inicjalizacji
    this.loadTokens();

    // Interceptor do dodawania access tokena do zapytań
    this.client.interceptors.request.use((config) => {
      if (this.accessToken) {
        config.headers.Authorization = `Bearer ${this.accessToken}`;
      }
      return config;
    });

    // Interceptor do obsługi błędów i odświeżania tokena
    this.client.interceptors.response.use(
      (response) => response,
      async (error: AxiosError<ApiError>) => {
        const originalRequest = error.config;
        const requestUrl = originalRequest?.url || '';

        if (requestUrl.includes('/auth/refresh')) {
          return Promise.reject(error);
        }

        // Jeśli błąd 401 i mamy refresh token, spróbuj odświeżyć sesję
        if (error.response?.status === 401 && this.refreshToken && originalRequest) {
          try {
            const response = await this.client.post<LoginResponse>('/auth/refresh', {
              refreshToken: this.refreshToken,
            });

            const { session } = response.data;
            if (session) {
              this.setTokens(session.access_token, session.refresh_token);
              // Powtórz oryginalne zapytanie z nowym tokenem
              return this.client(originalRequest);
            }
          } catch (refreshError) {
            // Jeśli odświeżenie nie powiodło się, wyczyść tokeny
            this.clearTokens();
            // Emituj event wylogowania dla AppContext
            window.dispatchEvent(new CustomEvent('authExpired'));
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );
  }

  private loadTokens(): void {
    const stored = localStorage.getItem('auth_tokens');
    if (stored) {
      try {
        const { accessToken, refreshToken } = JSON.parse(stored);
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
      } catch {
        this.clearTokens();
      }
    }
  }

  private setTokens(accessToken: string, refreshToken: string): void {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    localStorage.setItem('auth_tokens', JSON.stringify({ accessToken, refreshToken }));
  }

  private clearTokens(): void {
    this.accessToken = null;
    this.refreshToken = null;
    localStorage.removeItem('auth_tokens');
  }

  // Auth endpoints
  async register(firstName: string, lastName: string, email: string, password: string): Promise<RegisterResponse> {
    const response = await this.client.post<RegisterResponse>('/auth/register', {
      firstName,
      lastName,
      email,
      password,
    });

    if (response.data.session) {
      this.setTokens(
        response.data.session.access_token,
        response.data.session.refresh_token
      );
    }

    return response.data;
  }

  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await this.client.post<LoginResponse>('/auth/login', {
      email,
      password,
    });

    if (response.data.session) {
      this.setTokens(
        response.data.session.access_token,
        response.data.session.refresh_token
      );
    }

    return response.data;
  }

  async logout(): Promise<void> {
    try {
      await this.client.post('/auth/logout', {
        accessToken: this.accessToken,
      });
    } finally {
      this.clearTokens();
    }
  }

  // Profile endpoints
  async getProfile(): Promise<ProfileResponse> {
    const response = await this.client.get<ProfileResponse>('/profile/me');
    return response.data;
  }

  async updateProfile(firstName: string, lastName: string): Promise<ProfileResponse> {
    const response = await this.client.patch<ProfileResponse>('/profile/me', {
      firstName,
      lastName,
    });
    return response.data;
  }

  async uploadAvatar(base64Data: string, mimeType: string): Promise<ProfileResponse> {
    const response = await this.client.post<ProfileResponse>('/profile/avatar', {
      base64Data,
      mimeType,
      accessToken: this.accessToken, // Fallback: wysyłamy token w body, jeśli interceptor go nie dodał
    });
    return response.data;
  }

  // Utility: sprawdzenie czy użytkownik jest zalogowany
  isAuthenticated(): boolean {
    return !!this.accessToken;
  }

  // Utility: pobranie access tokena (do debugowania)
  getAccessToken(): string | null {
    return this.accessToken;
  }
}

export const apiClient = new ApiClient();

export type { LoginResponse, RegisterResponse, UserProfile, ProfileResponse, ApiError };


