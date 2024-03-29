import { LoginRequest, LoginResponse, RegisterRequest } from "types";
import { Cookies } from "types/enums";
import { getCookies } from "utils/cookies";
import { createService, createServiceNoToken } from "./axios";
import { baseUrl } from "utils/constants";

const instance = createServiceNoToken(baseUrl);
const instanceWithToken = createService(baseUrl);

const login = async (formData: LoginRequest): Promise<LoginResponse> => {
  const response = await instance.post(`v1/auth/login`, formData);
  return response.data;
};

const register = async (formData: RegisterRequest): Promise<LoginRequest> => {
  const response = await instance.post("v1/auth/register", formData);
  return response.data;
};

const logout = async (): Promise<LoginResponse> => {
  const response = await instanceWithToken.post(
    `v1/auth/logout/${getCookies(Cookies.REFRESHTOKEN)}`
  );
  return response.data;
};

const authService = { login, logout, register };

export default authService;
