import { IDoctorListReq } from "@core";
import instanceAxios from "../instance-axios";

export const apiDoctorList = ({
  degree,
  gender,
  specialize,
}: IDoctorListReq) => {
  return instanceAxios
    .get("/doctor/filter", {
      params: {
        degree,
        gender,
        specialize,
      },
    })
    .then((res) => res.data);
};
