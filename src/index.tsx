import React from "react";
import ReactDOM from "react-dom/client";
import "lib-flexible/flexible";
import App from "./App";

import "@/styles/reset.scss";
import "@/global.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
