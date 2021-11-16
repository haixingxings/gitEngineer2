import React from "react";

import assetsStyle from "../index.less";

class Instruct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={assetsStyle.instruc}>
        <h2>Instructions</h2>
        <ul>
          <li>
            <div className={assetsStyle["instructions-title"]}>
              Enter two Github
            </div>
            <div>
              <i
                className={`fa fa-users ${assetsStyle["instructions-icon"]}`}
                style={{ color: "rgb(255, 191, 116)" }}
              />
            </div>
          </li>
          <li>
            <div className={assetsStyle["instructions-title"]}>Battle</div>
            <div>
              <i
                className={`fa fa-fighter-jet ${assetsStyle["instructions-icon"]}`}
                style={{ color: "gray" }}
              />
            </div>
          </li>
          <li>
            <div className={assetsStyle["instructions-title"]}>
              See the winner
            </div>
            <div>
              <i
                className={`fa fa-trophy ${assetsStyle["instructions-icon"]}`}
                style={{ color: "rgb(244, 234, 42)" }}
              />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
export default Instruct;
