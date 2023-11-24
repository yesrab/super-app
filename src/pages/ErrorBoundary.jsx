import React from "react";
import { useRouteError } from "react-router-dom";
function ErrorBoundary() {
  let error = useRouteError();
  console.log(error);
  return <h1>lmao error</h1>;
}

export default ErrorBoundary;
