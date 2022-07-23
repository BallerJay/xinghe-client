import React from "react";

// import { loginApi } from "@/api/modules/user";

import Login from "@/components/Login";

import "./App.scss";

const App: React.FC = () => {
	// useEffect(() => {
	// 	loginApi("/api/account/user/login", {
	// 		geetest_challenge: "0695276a70fbd7242a1d15fc1f8f541el2",
	// 		geetest_seccode: "f437671ef6901c643b37539782fe0ac3|jordan",
	// 		geetest_validate: "f437671ef6901c643b37539782fe0ac3",
	// 		platform: 1,
	// 		username: "m42846350",
	// 		password: "051356"
	// 	}).then(res => {
	// 		console.log(res, "resssss");
	// 	});
	// }, []);
	return (
		<div className="App">
			<header className="App-header">APP</header>
			<button>click</button>
			<Login />
		</div>
	);
};

export default App;
