import React from "react";
import { useRouteError } from "react-router-dom";
function ErrorBoundary() {
  let error = useRouteError();
  console.log(error);
  return (
    <div className='errorpage'>
      <h1>Please Allow location permission</h1>
      <p> Error : {error.message}</p>
    </div>
  );
}

export default ErrorBoundary;
