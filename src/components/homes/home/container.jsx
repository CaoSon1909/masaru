import React, { useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
const Container = () => {
  const anchors = ["Firstpage", "Secondpage", "Thirdpage"];
  return (
    <ReactFullpage
      // anchors={anchors}
      navigation
      // navigationTooltips={anchors}
      scrollingSpeed={1000}
      // animateAnchor={true}
      // autoScrolling={true}
      // continuousVertical={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="Firstpage">
              <p>Section 1 (welcome to fullpage.js)</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div className="Secondpage">
              <p>Section 2</p>
            </div>
            <div className="Thirdpage">
              <p>Section 3</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Container;
