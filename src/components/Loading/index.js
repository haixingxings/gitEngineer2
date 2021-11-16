import React from "react";

import assetsStyle from "./index.less";

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={assetsStyle.Loading}>
        <div className={assetsStyle.spinner}>
          <div
            className={`${assetsStyle["spinner-container"]} ${assetsStyle.container1}`}
          >
            <div className={assetsStyle.circle1} />
            <div className={assetsStyle.circle2} />
            <div className={assetsStyle.circle3} />
            <div className={assetsStyle.circle4} />
          </div>
          <div
            className={`${assetsStyle["spinner-container"]} ${assetsStyle.container2}`}
          >
            <div className={assetsStyle.circle1} />
            <div className={assetsStyle.circle2} />
            <div className={assetsStyle.circle3} />
            <div className={assetsStyle.circle4} />
          </div>
          <div
            className={`${assetsStyle["spinner-container"]} ${assetsStyle.container3}`}
          >
            <div className={assetsStyle.circle1} />
            <div className={assetsStyle.circle2} />
            <div className={assetsStyle.circle3} />
            <div className={assetsStyle.circle4} />
          </div>
        </div>
      </div>
    );
  }
}
export default Loading;
