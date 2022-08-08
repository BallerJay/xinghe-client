// 动态修改活动title
export const setPageTitle = (name: string) => {
	let title = document.getElementsByTagName("title")[0];
	title.innerHTML = name;
};

// 判断是否为函数
export const isFunction = (val: unknown): Boolean => {
	return Object.prototype.toString.call(val) === "[object Function]";
};

// 判断是否微信内部登录
export const isWechat = () => {
	const list: any = window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) || [];
	return list[0] == "micromessenger";
};

// 判断是否钉钉内部登录
export const isDing = () => {
	const list: any = window.navigator.userAgent.toLowerCase().match(/dingtalk/i) || [];
	return list[0] == "dingtalk";
};

// 复制文本
export const copyToClipboard = (text: string) =>
	navigator.clipboard && navigator.clipboard.writeText && navigator.clipboard.writeText(text);
