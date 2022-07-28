import React from "react";

import Login from "@/components/Login";

import styles from "./index.module.scss";

import Test from "@/assets/common/test.png";

const Home: React.FC = () => {
	return (
		<div className={styles.home}>
			Home
			<img src={Test} alt="" />
			<Login />
		</div>
	);
};

export default Home;
