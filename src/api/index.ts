import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { Toast } from "antd-mobile";

import { responseStatus } from "./responseStatus";
import { AxiosCanceler } from "./axiosCancel";
import { ResultData } from "./interface";

export enum ResultEnum {
	SUCCESS = 200,
	ERROR = 500,
	OVERDUE = 599,
	TIMEOUT = 10000,
	TYPE = "success"
}

const axiosCancel = new AxiosCanceler();

class RequestHttp {
	instance: AxiosInstance;
	public constructor() {
		this.instance = axios.create({
			timeout: 10000 // 设置超时时间10s
			// baseURL: publicIp //根据自己配置的反向代理去设置不同环境的baeUrl
		});

		// 请求拦截器
		this.instance.interceptors.request.use(
			(config: AxiosRequestConfig) => {
				axiosCancel.addPending(config);

				const getToken: string = localStorage.getItem("accessToken") || "";

				return {
					...config,
					headers: {
						Authorization: getToken
					}
				};
			},
			(error: AxiosError) => {
				return Promise.reject(error);
			}
		);

		// 响应拦截器

		this.instance.interceptors.response.use(
			(response: AxiosResponse) => {
				const { data, config } = response;

				// 请求结束之后，移除本次请求
				axiosCancel.removePending(config);

				if (data.code === 2) {
					// ⚠️ 程序进入此处代表，token失效
					Toast.show({
						icon: "fail",
						content: response.data?.message || "响应超时，请重试"
					});
					localStorage.clear();
					// 重载页面
					location.reload();
				}

				// 全局请求报错处理
				if (data.code && data.code !== ResultEnum.SUCCESS) {
					Toast.show({
						icon: "fail",
						content: data.message
					});
				}

				return data;
			},
			async (error: AxiosError) => {
				const { response } = error;
				// 请求超时单独判断，请求超时没有 response
				if (error.message.indexOf("timeout") !== -1) Toast.show({ icon: "fail", content: "请求超时，请稍后再试" });
				// 根据响应的错误状态码，做不同的处理
				if (response) return responseStatus(response.status);
				// 服务器结果都没有返回(可能服务器错误可能客户端断网) 断网处理:可以跳转到断网页面
				if (!window.navigator.onLine) return (window.location.hash = "/login");
				return Promise.reject(error);
			}
		);
	}

	// 常用请求方法的封装
	GET<T>(url: string, params?: object): Promise<ResultData<T>> {
		return this.instance.get(url, { params });
	}

	POST<T>(url: string, params?: object): Promise<ResultData<T>> {
		return this.instance.post(url, params);
	}
}

export default new RequestHttp();
