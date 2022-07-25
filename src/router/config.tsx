import React from "react";
import { Navigate } from "react-router-dom";

import lazyLoad from "@/components/Loadable";
export default [
	{
		path: "/",
		element: <Navigate to="/home" />
	},
	{
		path: "/home",
		element: lazyLoad(React.lazy(() => import("@/pages/Home"))),
		exact: true
	},
	{
		path: "/demo",
		element: lazyLoad(React.lazy(() => import("@/pages/demo"))),
		exact: true
	},
	{
		path: "*",
		element: <Navigate to="/home" />
	}
];
