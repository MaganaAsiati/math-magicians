import React from 'react';
import style from '../scss/Style.module.scss';
import github from '../assets/github.svg';

function Footer() {
  return (
    <section className={style.footer}>
      Copyright ©️
      <a href="https://github.com/mavericks-db">mavericks-db</a>
      <img src={github} alt="" />
    </section>
  );
}

export default Footer;
