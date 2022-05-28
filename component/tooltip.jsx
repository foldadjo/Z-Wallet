import React from "react";
import Image from "next/image";

const card = {
  borderRadius: "25px",
  border: "white solid",
  boxShadow: "#E5E5E5 0px 2px 10px 2px",
};

const context = {
  cursor: "pointer",
};

function tooltip() {
  return (
    <div className="card p-4" style={card}>
      <div className="text-secondary mt-4 mb-2 mx-3" style={context}>
        <Image src="/icon dashboard.png" alt="icon" width={20} height={20} />
        &ensp; Dashboard
      </div>
      <br />
      <div className="text-secondary my-2 mx-3" style={context}>
        <Image src="/icon transfer.png" alt="icon" width={20} height={20} />
        &ensp; Transfer
      </div>
      <br />
      <div className="text-secondary my-2 mx-3" style={context}>
        <Image src="/icon topup.png" alt="icon" width={20} height={20} />
        &ensp; Top Up
      </div>
      <br />
      <div className="text-secondary my-2 mx-3" style={context}>
        <Image src="/icon user.png" alt="icon" width={20} height={20} />
        &ensp; Profile
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="text-secondary my-4 mx-3" style={context}>
        <Image src="/icon logout.png" alt="icon" width={20} height={20} />
        &ensp; Logout
      </div>
    </div>
  );
}

export default tooltip;
