import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { debounce } from "../../utils/utils";
import Instruct from "./subpage/instruct";
import FormItem from "@/components/FormItem";
import "../../../config/axios.js";
import assetsStyle from "../../../assets/css/index.less";

export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      first_data: null,
      last_name: "",
      last_data: null,
      // first_loading: false,
      // last_loading: false,
      isFirstError: false,
      firstMessage: "",
      isLastError: false,
      lastMessage: "",
    };
  }

  handleSubmit = (values, { props = this.props, setSubmitting }) => {
    console.log("提交", values, props, setSubmitting);
    const debounces = debounce(() => {
      setSubmitting(false);
      this.setState(
        {
          ...values,
        },
        () => {
          console.log("存储first_name", values.first_name);
          console.log("存储last_name", values.last_name);
          if (values.first_name) {
            this.setState(
              {
                // first_loading: true,
                isFirstError: false,
                firstMessage: "",
              },
              () => {
                this.getUser(
                  "first_data",
                  "isFirstError",
                  "firstMessage",
                  "first_loading",
                  this.state.first_name
                );
              }
            );
          }
          if (values.last_name) {
            this.setState(
              {
                // last_loading: true,
                isLastError: false,
                lastMessage: "",
              },
              () => {
                this.getUser(
                  "last_data",
                  "isLastError",
                  "lastMessage",
                  "last_loading",
                  this.state.last_name
                );
              }
            );
          }
        }
      );
    }, 1000);
    debounces();
  };

  getUser = (type, isError, msg, loading, id) => {
    axios.get(`https://api.github.com/users/${id}`).then((res) => {
      if (res.avatar_url) {
        this.setState(
          {
            [type]: res,
            [loading]: false,
          },
          () => {
            console.log("请求到的数据1", this.state.first_data);
            console.log("请求到的数据2", this.state.last_data);
          }
        );
      } else {
        console.log("报错了", res);
        this.setState(
          {
            [isError]: true,
            [msg]: res.msg,
            [loading]: false,
          },
          () => {
            console.log(
              "报错1",
              this.state.isFirstError,
              this.state.firstMessage
            );
            console.log(
              "报错2",
              this.state.isLastError,
              this.state.lastMessage
            );
          }
        );
      }
    });
  };

  closeResult = (type) => {
    this.setState({
      [type]: null,
    });
  };

  changeVal = (type, value) => {
    console.log("type", type, value);
    switch (type) {
      case "first_name":
        this.setState({
          isFirstError: false,
          firstMessage: "",
        });
        break;
      case "last_name":
        this.setState({
          isLastError: false,
          lastMessage: "",
        });
        break;
      default:
        break;
    }
  };

  clear = (field, value) => {
    console.log("clear", field, value);
  };

  callbacks = (type, data) => {
    this.setState(
      {
        [type]: data,
      },
      () => {
        console.log(`外界拿到的数据${type}`, this.state[type]);
      }
    );
  };

  render() {
    return (
      <div className={`container ${assetsStyle.instructions}`}>
        <Instruct />
        <h3
          className={`${assetsStyle["text-center"]} ${assetsStyle["play-modal"]}`}
        >
          Players
        </h3>
        <div className={assetsStyle["form-list"]}>
          <FormItem username="players1" callbacks={this.callbacks} />
          <FormItem username="players2" callbacks={this.callbacks} />
        </div>
        {this.state.players1 &&
        this.state.players2 &&
        this.state.players1.login !== this.state.players2.login ? (
          <div className={assetsStyle.battle}>
            <Link
              to={`/battle/result?play1=${this.state.players1.login}&play2=${this.state.players2.login}`}
              disabled
            >
              Battle
            </Link>
          </div>
        ) : null}
      </div>
    );
  }
}
