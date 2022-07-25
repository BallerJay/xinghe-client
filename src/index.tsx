import React from "react";
import ReactDOM from "react-dom/client";
import "lib-flexible/flexible";

import { HashRouter } from "react-router-dom";
import Router from "@/router/index";

import "@/styles/reset.scss";
import "@/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<HashRouter>
			<Router />
		</HashRouter>
	</React.StrictMode>
);
