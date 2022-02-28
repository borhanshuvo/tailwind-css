import React from "react";
import Card from "./card";
import { smartphone } from "./data";

const MobilePhone = () => {
  return (
    <div className="container">
      {smartphone.map((sp) => (
        <Card sp={sp} />
      ))}
    </div>
  );
};

export default MobilePhone;
