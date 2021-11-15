import React from "react";

import { Link } from "react-router-dom";

import assetsStyle from "../../assets/css/index.less";

class Tabbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentIndex: "All",
      tabIndex: "popular",
      tabs: [
        { name: "popular", id: "popular" },
        { name: "battle", id: "battle" },
      ],
    };
  }

  componentDidMount() {
    const search = window.location.hash.slice(2);
    if (search) {
      this.setState({
        tabIndex: search,
      });
    }
  }

  tabChange = (id) => {
    this.setState({
      tabIndex: id,
    });
  };

  render() {
    return (
      <div className={assetsStyle["top-tab"]}>
        <ul className={`${assetsStyle["tab-list"]} container`}>
          {this.state.tabs.map((item) => {
            const tabsStyle =
              this.state.tabIndex.indexOf(item.id) > -1
                ? `${assetsStyle["top-item"]} ${assetsStyle.active}`
                : assetsStyle["top-item"];
            return (
              <li key={item.id}>
                <Link
                  to={`/${item.name}`}
                  className={tabsStyle}
                  onClick={() => {
                    this.tabChange(item.id);
                  }}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Tabbar;
