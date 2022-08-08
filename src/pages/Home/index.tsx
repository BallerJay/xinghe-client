import React from "react";

import Login from "@/components/Login";

import styles from "./index.module.scss";

import Test from "@/assets/common/test.png";

const Home: React.FC = () => {
	const copyToClipboard = (text: string) =>
		navigator.clipboard && navigator.clipboard.writeText && navigator.clipboard.writeText(text);
	return (
		<div className={styles.home}>
			Home
			<img src={Test} alt="" />
			<Login />
			<button
				onClick={() => {
					copyToClipboard("1111");
				}}
			>
				copy
			</button>
		</div>
	);
};

export default Home;
