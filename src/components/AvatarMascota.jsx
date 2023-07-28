import React from "react";

const AvatarMascota = ({ listaPacientes, colorAvatar }) => {
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "3rem",
      }}
      className={colorAvatar() + " " + "me-2 mt-2"}
    ></div>
  );
};

export default AvatarMascota;
