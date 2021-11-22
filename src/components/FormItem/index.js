import React from "react";
import axios from "axios";
import { Formik, FormikProps, Form, Field, ErrorMessage } from "formik";
import { debounce } from "@/utils/utils";
import "../../../config/axios";
import Loading from "../Loading";
import assetsStyle from "./index.less";

class FormItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isFirstError:false,
      loading: false,
      isError: false,
      msg: "",
    };
  }

  getUser = (type) => {
    axios
      .get(`https://api.github.com/users/${this.state[type]}`)
      .then((res) => {
        if (res.avatar_url) {
          this.setState(
            {
              [type]: res,
            },
            () => {
              console.log("请求到的数据1", this.state[type]);
              this.props.callbacks(type, this.state[type]);
            }
          );
        } else {
          console.log("报错了", res);
          this.setState(
            {
              isError: true,
              msg: res.msg,
            },
            () => {
              console.log("报错1", this.state.isError, this.state.msg);
            }
          );
        }
        this.setState(
          {
            loading: false,
          },
          () => {
            console.log("当前loading", this.state.loading);
          }
        );
      });
  };

  handleSubmit = (values, { props = this.props, setSubmitting }) => {
    console.log("提交", this.state.loading);
    const debounces = debounce(() => {
      if (!this.state.loading) {
        setSubmitting(false);
        this.setState(
          {
            ...values,
            loading: true,
          },
          () => {
            this.getUser(this.props.username);
          }
        );
      }
    }, 1000);
    debounces();
  };

  changeVal = (type, value) => {
    // console.log("实时校验", type, value);
    // switch (type) {
    //   case "first_name":
    //     this.setState({
    //       // isFirstError: false,
    //       // firstMessage: "",
    //     });
    //     break;
    //   case "last_name":
    //     this.setState({
    //       // isLastError: false,
    //       // lastMessage: "",
    //     });
    //     break;
    //   default:
    //     break;
    // }
  };

  closeResult = (type) => {
    this.setState(
      {
        [type]: null,
      },
      () => {
        this.props.callbacks(type, null);
      }
    );
  };

  render() {
    return (
      <Formik
        initialValues={{
          [this.props.username]: "",
        }}
        validate={(values) => {
          this.changeVal(this.props.username, values);
          const errors = {};
          if (!values[this.props.username]) {
            errors[
              this.props.username
            ] = `${this.props.username} name Required`;
          }
          return errors;
        }}
        onSubmit={this.handleSubmit}
      >
        {(formProps) => (
          <Form className={assetsStyle["form-content"]}>
            <h3
              className={`${assetsStyle["list-title"]} ${assetsStyle["play-modal"]}`}
            >
              {this.props.username}
            </h3>
            {this.state[this.props.username] &&
            this.state[this.props.username].avatar_url ? (
              <div className={assetsStyle["form-result"]}>
                <div className={assetsStyle.info}>
                  <img
                    src={this.state[this.props.username].avatar_url}
                    alt=""
                  />
                  <div>{this.state[this.props.username].name}</div>
                </div>
                <i
                  className="fa fa-close"
                  style={{ color: "#1890ff" }}
                  onClick={() => {
                    this.closeResult(this.props.username);
                  }}
                />
              </div>
            ) : (
              <div className={assetsStyle["form-item"]} key={2}>
                <div className={assetsStyle["form-input"]}>
                  <Field
                    type="text"
                    name={this.props.username}
                    placeholder="enter username"
                  />
                  <div className={assetsStyle["input-error"]}>
                    <ErrorMessage name={this.props.username} />
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
                    {this.state.loading ? <Loading /> : null}
                    <div style={{ padding: "0 10px" }}>Submit</div>
                  </div>
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    );
  }
}
export default FormItem;
