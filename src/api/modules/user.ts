import FETCH from "@/api";
import { Login } from "../interface/index";

// 用户登陆接口
export const loginApi = (url: string, params: Login.NameReqLogin) => {
	return FETCH.POST(url, params);
};
