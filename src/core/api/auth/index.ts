import {
  IForgotPassword,
  ILogin,
  INewPassword,
  IRegister,
  IVeryfyReq,
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

export const apiRegister = ({ username, password, email, phone }: IRegister) =>
  instanceAxios
    .post("/authen/signup", {
      userName: username,
      password,
      email,
      phone,
    })
    .then((res) => res.data);

export const apiVerify = ({ token }: IVeryfyReq) =>
  instanceAxios.post(`/authen/verify/${token}`).then((res) => res.data);
