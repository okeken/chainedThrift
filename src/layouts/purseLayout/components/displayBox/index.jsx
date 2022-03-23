import React from "react";

const DisplayBox = ({ icon, name, desc }) => {

  return (
    <div className={`h-28  dark:bg-dark-2 bg-white-1  p-8 rounded-2xl flex items-center border-purple-1 border`}>
      <div className="">
        <div>
          <img
            src={icon}
            alt="coin"
            className="img-responsive"
          />
        </div>
      </div>
      <div className="ml-4 flex flex-col items-center">
        <p className="dark:text-white-1 text-dark-1 Poppins text-center text-xl">{name}</p>
        <p className="dark:text-white-1 text-dark-1 Poppins text-xs font-light">{desc}</p>
      </div>
    </div>
  );
};

export default DisplayBox;
