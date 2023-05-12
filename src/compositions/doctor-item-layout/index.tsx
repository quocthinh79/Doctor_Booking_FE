import { doctorItemList } from "@dummy-data";
import { Pagination } from "../../components";
import { Row } from "../../components/grid";
import Col from "../../components/grid/column";
import { SPACE_BETWEEN_ITEMS } from "../../const";
import DoctorCardItem from "../doctor-card-item";
import { useQuery } from "@tanstack/react-query";
import { IDoctorListRes } from "@core";
import { apiDoctorList } from "@api";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export function DoctorItemLayout() {
  const [searchParams, setSearchParams] = useSearchParams();

  const allSearchParams = Object.fromEntries(
    Array.from(searchParams.entries()).map(([key, value]) => [key, value])
  );

  const { degree, specialize, gender } = allSearchParams;

  // console.log(
  // Object.fromEntries(
  //   Array.from(searchParams.entries()).map(([key, value]) => [key, value])
  // )
  // );

  const { data, refetch, dataUpdatedAt } = useQuery<IDoctorListRes[]>({
    refetchOnWindowFocus: false,
    queryKey: ["doctorList"],
    queryFn: () =>
      apiDoctorList({
        degree: degree || "",
        gender: gender || "",
        specialize: specialize || "",
      }),
  });

  useEffect(() => {
    refetch();
  }, [searchParams]);

  return (
    <Row gutter={[SPACE_BETWEEN_ITEMS, SPACE_BETWEEN_ITEMS]}>
      {data?.map(({ fullName, phone, id }, index) => (
        <Col key={`${fullName}${index}`} span={8}>
          <DoctorCardItem
            key={index}
            id={id}
            phoneNumber={phone}
            doctorName={fullName}
            linkAvatar={
              "https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-11640168385tqosatnrny.png"
            }
          />
        </Col>
      ))}
      <Col span={SPACE_BETWEEN_ITEMS}>
        <Pagination
          current={1}
          defaultCurrent={1}
          pageSize={9}
          total={10}
          // onChange={handleChange}
        />
      </Col>
    </Row>
  );
}

export default DoctorItemLayout;
