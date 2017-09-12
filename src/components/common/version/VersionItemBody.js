import React from "react";

const VersionItemBody = ({ version, viewVersionAction }) => {
  return (
    <div
      onClick={viewVersionAction}
      style={{
        verticalAlign: "center",
        textAlign: "center",
        cursor: "pointer"
      }}
    >
      <label style={{ fontSize: "20px" }}>{version.versionName}</label>
      <div style={{ height: "172px" }}>
        <img
          src={`${version.selectedCardImage}`}
          style={{ width: "90%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default VersionItemBody;
