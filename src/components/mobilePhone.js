import React from "react";
import Card from "./card";
import { smartphone } from "./data";

const MobilePhone = () => {
  return (
    <div className="container md:mx-auto mx-5">
      <div className="md:mx-24 lg:mx-0">
        <h1 className="text-2xl">Smart Phone</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {smartphone.map((data) => (
            <Card data={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobilePhone;
