import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import { Link } from "react-router-dom";
import { Formik, FormikProps, Form, Field, ErrorMessage } from "formik";
import Loading from "../../components/Loading";
import Instruct from "./subpage/instruct";
import "../../../config/axios.js";

import assetsStyle from "../../../assets/css/index.less";
import assetsStyle2 from "./index.less";

export default class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      first_data: null,
      last_name: "",
      last_data: null,
      first_loading: false,
      last_loading: false,
      isFirstError: false,
      firstMessage: "",
      isLastError: false,
      lastMessage: ""
    };
  }

  handleSubmit = (values, { props = this.props, setSubmitting }) => {
    console.log("提交", values, props, setSubmitting);
    setSubmitting(false);
    this.setState(
      {
        ...values
      },
      () => {
        console.log("存储first_name", values.first_name);
        console.log("存储last_name", values.last_name);
        if (values.first_name) {
          this.setState(
            {
              first_loading: true,
              isFirstError: false,
              firstMessage: ""
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
              last_loading: true,
              isLastError: false,
              lastMessage: ""
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
  };

  getUser = (type, isError, msg, loading, id) => {
    axios.get(`https://api.github.com/users/${id}`).then((res) => {
      if (res.avatar_url) {
        this.setState(
          {
            [type]: res,
            [loading]: false
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
            [loading]: false
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
      [type]: null
    });
  };

  changeVal = (type, value) => {
    console.log("type", type, value);
    switch (type) {
      case "first_name":
        this.setState({
          isFirstError: false,
          firstMessage: ""
        });
        break;
      case "last_name":
        this.setState({
          isLastError: false,
          lastMessage: ""
        });
        break;
      default:
        break;
    }
  };

  clear = (field, value) => {
    console.log("clear", field, value);
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
          <Formik
            initialValues={{
              first_name: ""
            }}
            validate={(values) => {
              this.changeVal("first_name", values);
              const errors = {};
              if (!values.first_name) {
                errors.first_name = "play1 name Required";
              }
              return errors;
            }}
            onSubmit={this.handleSubmit}
            setFieldValue={this.clear}
          >
            {(formProps) => (
              <Form className={assetsStyle["form-content"]}>
                <h3
                  className={`${assetsStyle["list-title"]} ${assetsStyle["play-modal"]}`}
                >
                  Players1
                </h3>
                {this.state.first_data && this.state.first_data.avatar_url ? (
                  <div className={assetsStyle["form-result"]}>
                    <div className={assetsStyle.info}>
                      <img src={this.state.first_data.avatar_url} alt="" />
                      <div>{this.state.first_name}</div>
                    </div>
                    <i
                      className="fa fa-close"
                      style={{ color: "#1890ff" }}
                      onClick={() => {
                        this.closeResult("first_data");
                      }}
                    />
                  </div>
                ) : (
                  <div className={assetsStyle["form-item"]} key={1}>
                    <div className={assetsStyle["form-input"]}>
                      <Field
                        type="text"
                        name="first_name"
                        placeholder="enter username"
                      />
                      <div className={assetsStyle["input-error"]}>
                        <ErrorMessage name="first_name" />
                        {this.state.isFirstError ? (
                          <div className={assetsStyle["error-info"]}>
                            {this.state.firstMessage}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={formProps.isSubmitting}
                      style={{ flex: 1 }}
                    >
                      <div className={assetsStyle["btn-loading"]}>
                        {this.state.first_loading ? <Loading /> : null}
                        <div>Submit</div>
                      </div>
                    </button>
                  </div>
                )}
              </Form>
            )}
          </Formik>
          <Formik
            initialValues={{
              last_name: ""
            }}
            validate={(values) => {
              this.changeVal("last_name", values);
              const errors = {};
              if (!values.last_name) {
                errors.last_name = "play2 name Required";
              }
              return errors;
            }}
            onSubmit={this.handleSubmit}
          >
            {(formProps) => {
              console.log("formProps", formProps);
              return (
                <Form className={assetsStyle["form-content"]}>
                  <h3
                    className={`${assetsStyle["list-title"]} ${assetsStyle["play-modal"]}`}
                  >
                    Players2
                  </h3>
                  {this.state.last_data && this.state.last_data.avatar_url ? (
                    <div className={assetsStyle["form-result"]}>
                      <div className={assetsStyle.info}>
                        <img src={this.state.last_data.avatar_url} alt="" />
                        <div>{this.state.last_name}</div>
                      </div>
                      <i
                        className="fa fa-close"
                        style={{ color: "#1890ff" }}
                        onClick={() => {
                          this.closeResult("last_data");
                        }}
                      />
                    </div>
                  ) : (
                    <div className={assetsStyle["form-item"]} key={2}>
                      <div className={assetsStyle["form-input"]}>
                        <Field
                          type="text"
                          name="last_name"
                          placeholder="enter username"
                        />
                        <div className={assetsStyle["input-error"]}>
                          <ErrorMessage name="last_name" />
                          {this.state.isLastError ? (
                            <div className={assetsStyle["error-info"]}>
                              {this.state.lastMessage}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <button
                        type="submit"
                        disabled={formProps.isSubmitting}
                        style={{ flex: 1 }}
                      >
                        <div className={assetsStyle["btn-loading"]}>
                          {this.state.last_loading ? <Loading /> : null}
                          <div>Submit</div>
                        </div>
                      </button>
                    </div>
                  )}
                </Form>
              );
            }}
          </Formik>
        </div>
        {this.state.first_data && this.state.last_data ? (
          <div className={assetsStyle.battle}>
            <Link
              to={`/battle/result?play1=${this.state.first_name}&play2=${this.state.last_name}`}
            >
              Battle
            </Link>
          </div>
        ) : null}
      </div>
    );
  }
}
