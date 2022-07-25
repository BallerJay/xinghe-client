import React from "react";
import { Route, HashRouter, useRoutes } from "react-router-dom";
import routers from "./config";

const rootRouter: any = [...routers];

const Router = () => {
	const routes = useRoutes(rootRouter);
	console.log(routes, "routes");
	return routes;
};

export default Router;
