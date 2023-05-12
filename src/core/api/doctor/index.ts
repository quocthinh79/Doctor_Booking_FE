import { IDoctorDetailReq, IDoctorListReq } from "@core";
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

export const apiDoctorDetail = ({ id }: IDoctorDetailReq) => {
  return instanceAxios.get(`/doctor/${id}`).then((res) => res.data);
};
