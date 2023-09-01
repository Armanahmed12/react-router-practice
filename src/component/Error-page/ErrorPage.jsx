import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();

  return (
    <div style={{height:'100vh'}} className="text-center d-flex flex-column justify-content-center align-items-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
