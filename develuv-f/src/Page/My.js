import React, { Profiler } from "react";
import Navi from "../Components/Navi";
import Guide from "../Components/FaqTab/FaqGuide";
import Ticket from "../Components/Mymenutab/Ticket";
import QrTicket from "../Components/Mymenutab/QrTicket";
import MyeventItem from "../Components/Mymenutab/MyeventItem";
import Profileform from "../Components/Mymenutab/Profileform";

const My = () => {
  return (
    <div className="my">
      <Navi
        navitext1={"내티켓"}
        navitext2={"주최한이벤트"}
        navitext3={"좋아요한이벤트"}
        navitext4={"프로필설정"}
      />
      <Profileform/>
      <Ticket/>
      <QrTicket/>
    <MyeventItem/>
     
 
    </div>
  );
};

export default My;
