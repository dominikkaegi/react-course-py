import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";

export default function Spinner() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <CircularProgress />
    </div>
  );
}
