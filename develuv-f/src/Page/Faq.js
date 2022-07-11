import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Navi from "../Components/Navi";
import FaqItem from "../Components/FaqTab/FaqItem";
import FaqGuide from "../Components/FaqTab/FaqGuide";
import FaqPolicy from "../Components/FaqTab/FaqPolicy";
import FaqPrivacy from "../Components/FaqTab/FaqPrivacy";

const Faq = () => {
  let location = useLocation();
  const [params, setParams] = useState(location.pathname);
  console.log(params);
  useEffect(() => setParams(location.pathname), [location.pathname]);

  const choosePage = () => {
    switch (params) {
      case "/faq":
        return <FaqItem />;
      case "/code-of-conduct":
        return <FaqGuide />;
      case "/terms":
        return <FaqPolicy />;
      case "/privacy":
        return <FaqPrivacy />;
      default:
        return <FaqItem />;
    }
  };

  return (
    <div>
      <Navi
        navitext1={"FAQ"}
        navitext2={"이용가이드"}
        navitext3={"이용약관"}
        navitext4={"개인정보처리방침"}
      />

      {choosePage()}
    </div>
  );
};

export default Faq;
