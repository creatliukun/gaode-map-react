import service from "./index";
 
/**
 * 登录接口
 */
 
export function Login(data) {
  return service.request({
    url: "/v1/register/pc/login/doLogin",
    method: "POST",
    data,
  });
}