import React from "react";
import MobileBar from "../../layouts/purseLayout/components/MobileBar"

const PurseSettings = ({theme}) => {
  return (
    <div className="w-full bg-dark-1 h-3/4 px-8">
      <MobileBar theme={theme} />
      <p className="md:text-8xl mt-8 text-4xl text-white-1">Purse settings page</p>
    </div>
  );
};

export default PurseSettings;
