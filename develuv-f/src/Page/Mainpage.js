import React from "react";
import "./scss/mainPage.scss";
import { FullPage, Slide } from "react-full-page";

const Mainpage = () => {
  return (
    <div>
      <FullPage>
        <Slide>
          <div className="wrapper">
            <div id="leftWrap" className="halfWrap">
              <div>
                <h1>개발자들의 커뮤니티</h1>
                <br />
                <h1 id="introdText">D e v e l u p</h1>
                <hr width="550px" />
                <h2 id="introd2">개발 컨퍼런스부터 해커톤까지</h2>
                <button className="btn">시작하기</button>
              </div>
            </div>
            <div className="halfWrap">
              <img id="mp_Photo" src="img/Final.png" />
            </div>
          </div>
        </Slide>
        <Slide>
          <div className="wrapper">
            <div className="halfWrap">
              <img id="introd2_photo" src="img/conference.jpg"></img>
            </div>
            <div className="halfWrap">
              <div>
                <h1>개발 이벤트들은 모두 여기에서</h1>
                <h1>한 번에 찾아보자!</h1>
                <br></br>
                <a>더 알아보기</a>
              </div>
            </div>
          </div>
        </Slide>
      </FullPage>
    </div>
  );
};

export default Mainpage;
