import {
  IForgotPassword,
  ILogin,
  INewPassword,
  IRegister,
} from "src/core/types";
import instanceAxios from "../instance-axios";

export const apiLogin = ({ email, password }: ILogin) => {
  return instanceAxios
    .post("/auth/login", {
      email,
      password,
    })
    .then((res) => res.data);
};
