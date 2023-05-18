export const routerPath = {
  auth: {
    root: "auth",
    login: "login",
    forgotPass: "forgot-password",
    register: "register",
    newPassword: "new-password",
    changePassword: "change-password",
    loginSuccess: "login-success",
    success: "success",
    requestNewPassword: "request-new-password",
  },
  home: {
    root: "",
  },
  aboutUs: {
    root: "about-us",
  },
  cart: {
    root: "cart",
  },
  account: {
    root: "account",
  },
  search: {
    root: "search",
  },
  admin: {
    root: "admin",
  },
  detail: {
    root: "detail/:idDoctor",
  },
  checkout: {
    root: "checkout",
  },
  booking: {
    root: "booking",
  },
  appointment: {
    root: "appointment",
    detail: ":idAppointment",
  },
};

export type TRouterPath = typeof routerPath;

export default routerPath;
