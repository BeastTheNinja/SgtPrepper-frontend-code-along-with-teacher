/**
 * File: js/models/loginModel.js
 * Project: SgtPrepper-frontend-code-along-with-teacher
 * Description: Login model — calls authentication API to obtain tokens.
 */
import { request } from "../services/fetch.js";

export const Authenticate = async (username, password) => {
  try {
    const url = `http://localhost:4000/api/auth/login`;

    const data = await request(url, "POST", { username, password });

    return data;
  } catch (error) {
    console.error(error);
  }
};
