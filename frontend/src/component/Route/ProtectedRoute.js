import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (!loading && isAuthenticated === false) {
    return <Navigate to="/login" />;
  }
  //  kmelit 2eme partie
  //   if (isAdmin === true && user.role !== "admin") {
  //     return <Navigate to="/login" />;
  //   }

  return (
    <Fragment>{loading === false ? <component {...rest} /> : null}</Fragment>
  );
};

export default ProtectedRoute;
