import axios, { AxiosRequestConfig, Canceler } from "axios";
import qs from "qs";

import { isFunction } from "@/utils/utils";

// 声明一个 Map 类型的数据用于存储每一个请求的标识 和 取消函数
let AllReqMap = new Map<string, Canceler>();

// 序列化参数，就是指每一次请求存储在Map中的key
export const setPendingUrl = (config: AxiosRequestConfig) => {
	return [config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join("&");
};

export class AxiosCanceler {
	addPending(config: AxiosRequestConfig): void {
		// 在请求开始之前，对之前的请求做检查取消操作
		this.removePending(config);
		const url = setPendingUrl(config);
		config.cancelToken =
			config.cancelToken ||
			new axios.CancelToken(cancel => {
				if (!AllReqMap.has(url)) {
					AllReqMap.set(url, cancel);
				}
			});
	}

	// 移除请求
	removePending(config: AxiosRequestConfig): void {
		const url = setPendingUrl(config);

		if (AllReqMap.has(url)) {
			// 如果在 AllReqMap 中存在当前请求的标识，需要取消当前请求，并在 AllReqMap 中移除
			const cancel = AllReqMap.get(url);
			cancel && cancel();
			AllReqMap.delete(url);
		}
	}

	// 清除所有的pending
	clearAllPending(): void {
		AllReqMap.forEach(cancel => {
			cancel && isFunction(cancel) && cancel();
		});

		AllReqMap.clear();
	}

	// 重置Map
	resetPendings(): void {
		AllReqMap = new Map<string, Canceler>();
	}
}
