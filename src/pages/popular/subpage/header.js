import React from "react";
import assetsStyle from "../../../../assets/css/index.less";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // tabIndex: 1,
      tabs: [
        { tabName: "All", type: "All" },
        { tabName: "JavaScript", type: "JavaScript" },
        { tabName: "Ruby", type: "Ruby" },
        { tabName: "Java", type: "Java" },
        { tabName: "CSS", type: "CSS" },
      ],
      currentIndex: "All",
    };
  }

  componentDidMount() {
    const search = window.location.hash.slice(15) || "All";
    this.setState({
      currentIndex: search,
    });
  }

  tabChoice = (type) => {
    const throttle = this.throttle(() => {
      this.setState(
        {
          currentIndex: type,
        },
        () => {
          this.props.callBacks("currentIndex", type);
        }
      );
    });
    throttle();
  };

  throttle = (fn) => {
    let canRun = true;
    return () => {
      if (!canRun) return;
      canRun = false;
      setTimeout(() => {
        fn.apply(this);
        canRun = true;
      }, 200);
    };
  };

  render() {
    return (
      <ul
        style={{
          textAlign: "center",
          height: "60px",
          lineHeight: "60px",
          background: "#fff",
          width: "100%",
        }}
        className={assetsStyle["header-nav"]}
      >
        {this.state.tabs.map((item) => {
          const tabStyle =
            item.type === this.state.currentIndex ? assetsStyle.active : "";
          return (
            <li key={item.type} className={tabStyle}>
              <a
                href={`#/popular?type=${item.type}`}
                onClick={() => {
                  this.tabChoice(item.type);
                }}
              >
                {item.tabName}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Header;
