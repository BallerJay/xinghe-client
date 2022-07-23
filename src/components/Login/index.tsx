import React, { useState } from "react";

import { Modal } from "antd-mobile";

import LoginForm from "./component/LoginForm";

import styles from "./login.module.scss";

const Login: React.FC = () => {
	const [visible, setVisible] = useState<boolean>(true);

	return (
		<Modal
			// style={styles.loginModal}
			// bodyStyle={}
			bodyClassName={styles.loginModal}
			visible={visible}
			content={<LoginForm />}
			onClose={() => {
				setVisible(false);
			}}
			actions={[
				{
					key: "confirm",
					text: "我知道了"
				}
			]}
		/>
	);
};

export default Login;
