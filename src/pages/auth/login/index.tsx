import {
  Button,
  Card,
  Flex,
  RememberMe,
  SizeProps,
  Space,
  Tabs,
} from "@components";
import {
  EButtonTypes,
  EHtmlButtonTypes,
  EJustifyFlex,
  ILogin,
  apiLogin,
  handleSchemaError,
  messError,
  routerPathFull,
  schemaLogin,
} from "@core";
import { usePathname, useStorageRoles, useStorageToken } from "@store";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "antd/es/form/Form";
import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginFormItem from "./login-form-item";
import { Form, notification } from "antd";

export interface LoginProps {}

export interface LoginFormProps extends ILogin {
  rememberMe: boolean;
}

export function LoginPage(_props: LoginProps) {
  const navigation = useNavigate();
  const [form] = useForm();
  const { setToken, setId,setRole,setName } = useStorageToken();
  const { setRoles } = useStorageRoles();
  const [api, contextHolder] = notification.useNotification();
  const pathname = usePathname((state: any) => state.pathname);

  const { mutate: login, isLoading } = useMutation({
    mutationKey: ["apiLogin"],
    mutationFn: apiLogin,
    onSuccess: (data) => {
      pathname === "" ? navigation("/") : navigation(pathname);
      setToken(data.token);
      setRole(data.roles);
      setName(data.userName)
      setRoles(data.roles);
      setId(data.id);
    },
    onError: (error: any) => {
      api["error"]({
        message: "LỖI",
        description: messError(error),
      });
    },
  });

  const onFinish = async ({ password, email }: LoginFormProps) => {
    try {
      // schemaLogin.parse({ email, password });
      login({ email, password });
    } catch (error: any) {
      handleSchemaError(error, form);
    }
  };

  return (
    <>
      {contextHolder}
      <Card>
        <Tabs
          items={[
            {
              key: "1",
              label: "Đăng nhập",
              children: (
                <Form
                  labelCol={{ span: 5 }}
                  form={form}
                  name="loginForm"
                  onFinish={onFinish}
                >
                  <Space widthFull size={SizeProps.Large}>
                    <LoginFormItem />
                    <Flex justify={EJustifyFlex.SpaceBetween}>
                      <RememberMe />
                      <Link to={routerPathFull.auth.forgotPass}>
                        Quên mật khẩu
                      </Link>
                    </Flex>
                    <Button
                      loading={isLoading}
                      block
                      type={EButtonTypes.Primary}
                      htmlType={EHtmlButtonTypes.Submit}
                    >
                      Đăng nhập
                    </Button>
                    <Flex justify={EJustifyFlex.Center}>
                      <Link to={routerPathFull.auth.register}>
                        Đăng kí tài khoản
                      </Link>
                    </Flex>
                  </Space>
                </Form>
              ),
            },
          ]}
        />
      </Card>
    </>
  );
}

export default memo(LoginPage);
