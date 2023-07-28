import React from "react";

const AvatarMascota = ({ listaPacientes, index }) => {
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "3rem",
      }}
      className={listaPacientes[index].colorAvatar + " " + "me-2 mt-2"}
    ></div>
  );
};

export default AvatarMascota;
