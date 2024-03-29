export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  fullname: string;
  phoneNumber: string;
}

export interface SignModalStatus {
  show: boolean;
  login: boolean;
}
