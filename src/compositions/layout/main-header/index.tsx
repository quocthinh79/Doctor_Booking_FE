import {
  Button,
  ContainerFixed,
  Flex,
  Form,
  FormItem,
  Image,
  InputSearch,
} from "@components";
import { SPACE_BETWEEN_ITEMS } from "@constant";
import {
  EBreakpoint,
  EButtonTypes,
  EFlexAlign,
  EInputTextSize,
  EJustifyFlex,
  routerPathFull,
  templateStringToClassName,
} from "@core";
import { cx } from "@emotion/css";
import { useStorageToken } from "@store";
import { useForm } from "antd/es/form/Form";
import { Header } from "antd/es/layout/layout";
import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
const logo = require("../../../images/logo.png");

export function MainHeader() {
  const { id, role, name } = useStorageToken();
  const [form] = useForm();
  const navigator = useNavigate();
  const { setId, setRole, setToken, setName } = useStorageToken();

  const onFinish = (values: any) => {
    return values.keyWord
      ? navigator(`${routerPathFull.search.root}?keyWord=${values.keyWord}`)
      : navigator("/");
  };
  return (
    <Header style={{ backgroundColor: "white" }}>
      <ContainerFixed
        className={templateStringToClassName()`height: 100%; display: flex;`}
        breakpoint={EBreakpoint.XL}
        position="center"
      >
        <Link to={routerPathFull.home.root}>
          <Image width="auto" height="100%" src={logo} preview={false} />
        </Link>
        <Flex
          align={EFlexAlign.Center}
          justify={EJustifyFlex.SpaceBetween}
          className={cx(templateStringToClassName()`background: #fff`)}
        >
          <Flex align={EFlexAlign.Center} gap={SPACE_BETWEEN_ITEMS}>
            <Form form={form} onFinish={onFinish} layout="vertical">
              <FormItem name="keyWord">
                <InputSearch
                  placeholder="Nhập từ bạn cần tìm kiếm ..."
                  enterButton="Search"
                  size={EInputTextSize.Middle}
                  onSearch={() => form.submit()}
                />
              </FormItem>
            </Form>
            <div
              style={{ fontSize: "28px", margin: "auto", marginRight: "5px" }}
            >
              {id !== "" ? (
                <Link to={routerPathFull.appointment.root}>
                  <Button type={EButtonTypes.Text}>
                    Xin chào {name}, Danh sách lịch hẹn{" "}
                    {role === "Doctor" ? "của bác sĩ" : "của bạn"}
                  </Button>
                </Link>
              ) : (
                <Link to={routerPathFull.auth.login}>
                  <Button type={EButtonTypes.Primary}>Đăng nhập</Button>
                </Link>
              )}

              {id != "" ? (
                <Button
                  type={EButtonTypes.Primary}
                  onClick={() => {
                    localStorage.clear(),
                      setId(""),
                      navigator("/"),
                      setRole(""),
                      setName(""),
                      setToken("");
                  }}
                >
                  Thoát
                </Button>
              ) : (
                ""
              )}
            </div>
          </Flex>
        </Flex>
      </ContainerFixed>
    </Header>
  );
}

export default memo(MainHeader);
