import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './ShowTextOnHover.module.css';

const ShowTextOnHover = (props) => {
  let { children, ShownText, Url, isNavLink = false } = props;
  return isNavLink ? (
    <NavLink className={style.icon} key={'url'} to={Url}>
      <div className={style.tooltip}>{ShownText}</div>
      <span>{children}</span>
    </NavLink>
  ) : (
    <a className={style.icon} key={'url'} href={Url} target={'_blank'}>
      <div className={style.tooltip}>{ShownText}</div>
      <span>{children}</span>
    </a>
  );
};

export default ShowTextOnHover;
