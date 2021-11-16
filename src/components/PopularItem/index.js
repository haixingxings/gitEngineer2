import React from "react";

import assetsStyle from "./index.less";

class PopularItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { itemData, index } = this.props;
    return (
      <div className={assetsStyle.popularItem}>
        <h2 className={`${assetsStyle["text-center"]} ${assetsStyle.score}`}>
          #{index + 1}
        </h2>
        <div
          className={`${assetsStyle["text-center"]} ${assetsStyle["content-avatar"]}`}
        >
          <img src={itemData.avatar_url} alt="" />
        </div>
        <h4
          style={{
            display: "flex",
            flexDirection: "row",
            height: "36px",
            justifyContent: "center",
            marginBottom: "15px"
          }}
        >
          <a
            href={itemData.svn_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden1"
          >
            {itemData.full_name}
          </a>
        </h4>
        <div
          style={{
            marginBottom: "6px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <i
            className="fa fa-skyatlas"
            style={{
              display: "inline-flex",
              width: "16px",
              justifyContent: "center",
              color: "rgb(255, 191, 116)"
            }}
          />
          <a
            href={itemData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden1"
          >
            {itemData.name}
          </a>
        </div>
        <div style={{ marginBottom: "6px" }}>
          <i
            className="fa fa-user"
            style={{
              display: "inline-flex",
              width: "16px",
              justifyContent: "center",
              color: "rgb(255, 215, 0)"
            }}
          />
          {itemData.stargazers_count} stars
        </div>
        <div style={{ marginBottom: "6px" }}>
          <i
            className="fa fa-usb"
            style={{
              display: "inline-flex",
              width: "16px",
              justifyContent: "center",
              color: "rgb(129, 195, 245)"
            }}
          />
          {itemData.forks_count} forks
        </div>
        <div style={{ marginBottom: "6px" }}>
          <i
            className="fa fa-vk"
            style={{
              display: "inline-flex",
              width: "16px",
              justifyContent: "center",
              color: "rgb(241, 138, 147)"
            }}
          />
          {itemData.open_issues_count} Open issues
        </div>
      </div>
    );
  }
}
export default PopularItem;
