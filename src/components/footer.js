import React from "react";

import assetsStyle from "../../assets/css/index.less";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className={assetsStyle.footer}>版权所有© MINWEI</div>;
  }
}
export default Footer;
