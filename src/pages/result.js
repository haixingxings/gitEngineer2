import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import assetsStyle from "../../assets/css/index.less";

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      loading: false,
      isFirstError: false,
      firstMsg: "",
      isLastError: false,
      lastMsg: "",
    };
  }

  async componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const paramList = window.location.hash.split("?")[1];
    const play1 = paramList.split("&")[0].split("=")[1];
    const play2 = paramList.split("&")[1].split("=")[1];
    this.setState({
      loading: true,
    });
    const playdata1 = await axios.get(`https://api.github.com/users/${play1}`);
    const playdata2 = await axios.get(`https://api.github.com/users/${play2}`);
    console.log("结果1", playdata1);
    console.log("结果2", playdata2);
    if (
      (!playdata1.success && playdata1.msg) ||
      (!playdata2.success && playdata2.msg)
    ) {
      if (!playdata1.success && playdata1.msg) {
        this.setState({
          isFirstError: true,
          firstMsg: playdata1.msg,
          loading: false,
        });
      }
      if (!playdata2.success && playdata2.msg) {
        this.setState({
          isLastError: true,
          lastMsg: playdata2.msg,
          loading: false,
        });
      }
    } else {
      this.setState(
        {
          dataList: [playdata1, playdata2],
          isFirstError: false,
          firstMsg: "",
          isLastError: false,
          lastMsg: "",
        },
        () => {
          this.setState({
            loading: false,
          });
        }
      );
    }
  };

  Refresh = () => {
    this.setState(
      {
        isFirstError: false,
        firstMsg: "",
        isLastError: false,
        lastMsg: "",
      },
      () => {
        this.getData();
      }
    );
  };

  render() {
    return (
      <div className={`${assetsStyle.result} container`}>
        <div className={assetsStyle["result-loading"]}>
          {this.state.loading ? (
            <div className={assetsStyle.spinner}>
              <div
                className={`${assetsStyle["spinner-container"]} ${assetsStyle.container1} ${assetsStyle["spinner-blue"]}`}
              >
                <div className={assetsStyle.circle1} />
                <div className={assetsStyle.circle2} />
                <div className={assetsStyle.circle3} />
                <div className={assetsStyle.circle4} />
              </div>
              <div
                className={`${assetsStyle["spinner-container"]} ${assetsStyle.container2} ${assetsStyle["spinner-blue"]}`}
              >
                <div className={assetsStyle.circle1} />
                <div className={assetsStyle.circle2} />
                <div className={assetsStyle.circle3} />
                <div className={assetsStyle.circle4} />
              </div>
              <div
                className={`${assetsStyle["spinner-container"]} ${assetsStyle.container3} ${assetsStyle["spinner-blue"]}`}
              >
                <div className={assetsStyle.circle1} />
                <div className={assetsStyle.circle2} />
                <div className={assetsStyle.circle3} />
                <div className={assetsStyle.circle4} />
              </div>
            </div>
          ) : null}
        </div>
        <ul className={assetsStyle["content-list"]}>
          {this.state.isFirstError || this.state.isLastError ? (
            <div className={assetsStyle["error-lists"]}>
              {this.state.isFirstError ? (
                <div
                  className={assetsStyle.errors}
                  style={{ position: "relative" }}
                >
                  报错了:{this.state.firstMsg}
                </div>
              ) : null}
              {this.state.isLastError ? (
                <div
                  className={assetsStyle.errors}
                  style={{ position: "relative" }}
                >
                  报错了:{this.state.lastMsg}
                </div>
              ) : null}
              <div className={assetsStyle.resetBtn} onClick={this.Refresh}>
                <a className={assetsStyle["product-btn"]}>Refresh</a>
              </div>
            </div>
          ) : (
            this.state.dataList.map((item, index) => (
              <li key={item.id}>
                <h2
                  className={`${assetsStyle["text-center"]} ${assetsStyle.score}`}
                >
                  #{index + 1}
                </h2>
                <div
                  className={`${assetsStyle["text-center"]} ${assetsStyle["content-avatar"]}`}
                >
                  <img src={item.avatar_url} style={{ width: "50%" }} alt="" />
                </div>
                <h4
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "36px",
                    justifyContent: "center",
                    marginBottom: "15px",
                  }}
                >
                  <a
                    href={item.svn_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden1"
                  >
                    {item.full_name}
                  </a>
                </h4>
                <div
                  style={{
                    marginBottom: "6px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <i
                    className="fa fa-skyatlas"
                    style={{
                      display: "inline-flex",
                      width: "16px",
                      justifyContent: "center",
                      color: "rgb(255, 191, 116)",
                    }}
                  />
                  <a
                    href={item.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name || "--"}
                  </a>
                </div>
                <div style={{ marginBottom: "6px" }}>
                  <i
                    className="fa fa-user"
                    style={{
                      display: "inline-flex",
                      width: "16px",
                      justifyContent: "center",
                      color: "rgb(255, 215, 0)",
                    }}
                  />
                  {item.followers} stars
                </div>
                <div style={{ marginBottom: "6px" }}>
                  <i
                    className="fa fa-usb"
                    style={{
                      display: "inline-flex",
                      width: "16px",
                      justifyContent: "center",
                      color: "rgb(129, 195, 245)",
                    }}
                  />
                  {item.id} forks
                </div>
                <div style={{ marginBottom: "6px" }}>
                  <i
                    className="fa fa-vk"
                    style={{
                      display: "inline-flex",
                      width: "16px",
                      justifyContent: "center",
                      color: "rgb(241, 138, 147)",
                    }}
                  />
                  {item.public_gists} Open issues
                </div>
              </li>
            ))
          )}
        </ul>
        <div className={assetsStyle.battle}>
          <Link to="/battle">Reset</Link>
        </div>
      </div>
    );
  }
}
export default Result;
