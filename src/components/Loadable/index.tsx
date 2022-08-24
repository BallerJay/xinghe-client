import React, { Suspense } from "react";
import { Mask, DotLoading } from "antd-mobile";

import styles from "./index.module.scss";

const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
	return (
		<Suspense
			fallback={
				<Mask visible opacity={0.1}>
					<div className={styles.overlayContent}>
						正在加载中
						<DotLoading />
					</div>
				</Mask>
			}
		>
			<Comp />
		</Suspense>
	);
};

export default lazyLoad;
