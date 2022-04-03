import React from "react";
import Purse from "../purse";
import NoPurse from "../noPurse"


const PurseList = ({ purseList = [], isMyPurses, gotToExplorePursesTab, gotToCreateNewPurse }) => {

  if(isMyPurses && purseList.length === 0 ) {
    return (
      <NoPurse
        gotToExplorePursesTab = {gotToExplorePursesTab}
        gotToCreateNewPurse = {gotToCreateNewPurse}
      />
    )
  }
  
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {purseList.map((item, idx) => (
        <Purse
          key={idx}
          purse = {item}
        />
      ))}
    </div>
  );
};

export default PurseList;
