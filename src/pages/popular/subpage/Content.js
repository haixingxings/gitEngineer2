import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import PopularItem from "@/components/PopularItem";
import loadingIcon from "../../../../assets/img/loading.gif";
import "../../../../config/axios";
import assetsStyle from "../../../../assets/css/index.less";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentIndex: "All",
      loading: false,
      dataList: [],
      page: 1,
      // check: false,
      isErrors: false,
      errorMessage: "",
      hasMore: false,
      // hasMore: true, // 是否开启下拉加载
      // data: [], // 接受我每次的数据
      // count: 10, //下拉加载
    };
  }

  componentDidMount() {
    const search = window.location.hash.slice(15) || "All";
    this.getData(search, this.state.page);
  }

  /* eslint-disable */
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.currentIndex !== this.props.currentIndex) {
      this.setState(
        {
          // currentIndex: nextProps.currentIndex,
          dataList: [],
          hasMore: false,
          isErrors: false,
          page: 1,
        },
        () => {
          this.getData(nextProps.currentIndex, 1, true);
        }
      );
    }
  }
  /* eslint-disable */

  getMore = () => {
    console.log("getMore");
    const search = window.location.hash.slice(15) || "All";
    const { page } = this.state;
    this.setState(
      {
        page: page + 1,
        hasMore: false,
      },
      () => {
        this.getData(search, this.state.page);
      }
    );
  };

  getData = (type = "All", page, isChange) => {
    let url = null;
    switch (type) {
      case "All":
        url = `https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories&page=${page}`;
        break;
      case "JavaScript":
        url = `https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories&page=${page}`;
        break;
      case "Ruby":
        url = `https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories&page=${page}`;
        break;
      case "Java":
        url = `https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories&page=${page}`;
        break;
      case "CSS":
        url = `https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories&page=${page}`;
        break;
      default:
        break;
    }
    this.setState(
      {
        loading: true,
      },
      () => {
        axios.get(url).then((res) => {
          if (res.items) {
            const data = res.items ? res.items : res.data.items;
            const totalCount = res.total_count
              ? res.total_count
              : res.data.total_count;
            if (data.length) {
              if (totalCount > this.state.dataList.length) {
                const item = data;
                const dataListData = item.map((items) => ({
                  id: items.id,
                  full_name: items.full_name,
                  name: items.name,
                  stargazers_count: items.stargazers_count,
                  forks_count: items.forks_count,
                  open_issues_count: items.open_issues_count,
                  avatar_url: items.owner.avatar_url,
                  svn_url: items.svn_url,
                  html_url: items.owner.html_url,
                }));
                if (isChange) {
                  this.setState({
                    loading: false,
                    // hasMore: true,
                    dataList: dataListData,
                  });
                } else {
                  const { dataList } = this.state;
                  this.setState({
                    loading: false,
                    hasMore: true,
                    dataList: dataList.concat(dataListData),
                  });
                }
              } else {
                this.setState({
                  // hasMore: false,
                });
              }
            } else {
              this.setState({
                // hasMore: false,
              });
            }
          } else {
            this.setState({
              isErrors: true,
              // dataList: [],
              loading: false,
              // hasMore: false,
              errorMessage: res.msg,
            });
          }
        });
      }
    );
  };

  close = () => {
    this.setState(
      {
        isErrors: false,
        // hasMore: true,
      },
      () => {
        // document.documentElement.scrollTop -= 200;
        this.getData(this.props.currentIndex, this.state.page);
      }
    );
  };

  render() {
    const { loading, dataList } = this.state;
    return (
      <div className="container">
        <InfiniteScroll
          pageStart={0} // 设置初始化请求的页数
          loadMore={this.getMore} // 监听的ajax请求
          hasMore={this.state.hasMore} // 是否继续监听滚动事件 true 监听 | false 不再监听
        >
          <div className={assetsStyle.content} style={{ marginTop: "50px" }}>
            <div>
              <ul className={assetsStyle["content-list"]}>
                {dataList.map((item, index) => (
                  <li key={item.id + Math.random()}>
                    <PopularItem itemData={item} index={index} />
                  </li>
                ))}
              </ul>
              {this.state.isErrors ? (
                <div
                  className={assetsStyle.errors}
                  style={{ position: "relative" }}
                >
                  报错了:{this.state.errorMessage}
                  <div className={assetsStyle.resetBtn} onClick={this.close}>
                    <a className={assetsStyle["product-btn"]}>重试</a>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </InfiniteScroll>
        {loading ? (
          <div className={assetsStyle.loading}>
            <img src={loadingIcon} alt="" />
          </div>
        ) : null}
      </div>
    );
  }
}
export default Content;
