import React, { useEffect, useState } from "react";
import { Card, Tabs, Form, Button, Input } from "antd-mobile";
import { CloseOutline } from "antd-mobile-icons";

// 图片资源，这里需要优化代码⚠️
import AnFengImg from "@/assets/common/anfeng_game.png";
import TTImg from "@/assets/common/tt_game.png";
import PVImg from "@/assets/common/pv_game.png";

import styles from "./index.module.scss";

interface LoginFormProps {
	onClosed: () => void;
}

const LoginForm: React.FC<LoginFormProps> = props => {
	const { onClosed } = props;

	const [platform, setPlatform] = useState<number | string>(7);

	const updateActiveTabsColor: () => void = () => {
		const currentTabs = document.getElementsByClassName("adm-tabs")[0] as HTMLElement;
		currentTabs.style.setProperty("--active-line-color", platform === 1 ? "#8dc120" : "#4065e0");
		currentTabs.style.setProperty("--active-title-color", platform === 1 ? "#8dc120" : "#4065e0");
	};

	useEffect(() => {
		updateActiveTabsColor();
	}, []);

	return (
		<Card
			title={
				<span
					className={styles.loginModalTitle}
					style={{
						backgroundImage: `url(${platform === 1 ? AnFengImg : platform === 7 ? TTImg : PVImg})`
					}}
				></span>
			}
			extra={
				<CloseOutline
					style={{ marginRight: "10px" }}
					onClick={() => {
						onClosed();
					}}
				/>
			}
		>
			<Tabs activeLineMode="full" onChange={() => updateActiveTabsColor()}>
				<Tabs.Tab title="短信登录" key="mobile">
					<Form
						layout="horizontal"
						footer={
							<Button
								block
								type="submit"
								size="large"
								shape="rounded"
								style={{
									backgroundColor: platform === 1 ? "#8DC120" : "#4065E0",
									color: "#fff"
								}}
							>
								立即登陆
							</Button>
						}
					>
						<Form.Item
							name="mobile"
							label={<span className={styles.userField}></span>}
							rules={[{ required: true, message: "请输入手机号！" }]}
							style={{ marginTop: "15px" }}
						>
							<Input placeholder="请输入手机号" clearable />
						</Form.Item>
						<Form.Item
							name="mobile"
							label={<span className={styles.codeField}></span>}
							rules={[{ required: true, message: "请输入验证码！" }]}
							extra={
								<a style={{ color: `${platform === 1 ? "var(--anfeng-primary-color)" : "var(--tt-primary-color)"}` }}>
									发送验证码
								</a>
							}
							style={{ marginTop: "20px" }}
						>
							<Input placeholder="请输入验证码" clearable />
						</Form.Item>
					</Form>
				</Tabs.Tab>
				<Tabs.Tab title="账号登陆" key="account">
					<Form
						layout="horizontal"
						footer={
							<Button
								block
								type="submit"
								size="large"
								shape="rounded"
								style={{
									backgroundColor: platform === 1 ? "#8DC120" : "#4065E0",
									color: "#fff"
								}}
							>
								立即登陆
							</Button>
						}
					>
						<Form.Item
							name="username"
							label={<span className={styles.userField}></span>}
							rules={[{ required: true, message: "请输入账号！" }]}
							style={{ marginTop: "15px" }}
						>
							<Input placeholder="请输入账号" clearable />
						</Form.Item>
						<Form.Item
							name="password"
							label={<span className={styles.codeField}></span>}
							rules={[{ required: true, message: "请输入密码！" }]}
							style={{ marginTop: "20px" }}
						>
							<Input placeholder="请输入密码" clearable type="password" />
						</Form.Item>
					</Form>
				</Tabs.Tab>
			</Tabs>
		</Card>
	);
};

export default LoginForm;
