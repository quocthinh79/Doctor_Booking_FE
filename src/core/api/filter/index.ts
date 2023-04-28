import instanceAxios from "../instance-axios";

export const apiGetSpecializeFilterItem = () => {
  return instanceAxios.get("/specialize/all").then((res) => res.data);
};

export const apiGetDegreeFilterItem = () => {
  return instanceAxios.get("/degree/all").then((res) => res.data);
};
