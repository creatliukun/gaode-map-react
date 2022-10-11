import React from 'react';
import { NavBar } from 'antd-mobile'
// import './index.css';
import './index.less';

const Header = (props) => {

  const { title, onBack, right, backArrow } = props;
  console.log(props, 'props')
  const back = () => {
    onBack && onBack()
  };

  return (
    <>
      <div className="header-nav">
        <NavBar onBack={back} right={right || null} backArrow={backArrow}>
          {title}
        </NavBar>
      </div>
    </>
  )
}

export default Header;