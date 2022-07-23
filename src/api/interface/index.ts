export interface ResultData<T = any> {
	code: string;
	message: string;
	data?: T;
}

export namespace Login {
	export interface GeetestParams {
		geetest_challenge: string;
		geetest_seccode: string;
		geetest_validate: string;
		platform: string | number;
	}
	// 账号登陆
	export interface NameReqLogin extends GeetestParams {
		username: string;
		password: string;
	}

	// 手机号登陆
	export interface MobileReqLogin extends GeetestParams {
		mobile: string | number;
		code: string | number;
	}

	// 响应数据类型
	export interface ResLogin {
		access_token: string;
	}
}
