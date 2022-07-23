import React, { useState } from "react";
import { Card } from "antd-mobile";
import { CloseOutline } from "antd-mobile-icons";

// 图片资源，这里需要优化代码⚠️
import AnFengImg from "@/assets/common/anfeng_game.png";
import TTImg from "@/assets/common/tt_game.png";
import PVImg from "@/assets/common/pv_game.png";

import styles from "./index.module.scss";

const LoginForm: React.FC = () => {
	const [platform, setPlatform] = useState<number | string>(1);
	return (
		<>
			<Card
				title={
					<span
						className={styles.loginModalTitle}
						style={{
							backgroundImage: `url(${platform === 1 ? AnFengImg : platform === 7 ? TTImg : PVImg})`
						}}
					></span>
				}
				extra={<CloseOutline style={{ marginRight: "10px" }} />}
			>
				卡片内容
			</Card>
		</>
	);
};

export default LoginForm;
