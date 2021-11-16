import React from "react";
import { Formik, FormikProps, Form, Field, ErrorMessage } from "formik";
import Loading from "../Loading";
import assetsStyle from "./index.less";

class FormItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={assetsStyle.formItem}>
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
    );
  }
}
export default FormItem;
