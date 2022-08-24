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
		// element: (
		// 	<>
		// 		<Outlet></Outlet>
		// 	</>
		// ),
		exact: true,
		children: [
			{
				path: "",
				element: lazyLoad(React.lazy(() => import("@/pages/Home")))
			},
			{
				path: "demo",
				element: lazyLoad(React.lazy(() => import("@/pages/demo")))
			}
		]
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
