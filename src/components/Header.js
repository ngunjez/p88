import React from 'react';
import style from "../styles/Home.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={style.Container}>
      <div className={style.header_main}>
        <span className={style.header_building}>
          Building the Future of Web3 Technology in East Africa and Beyond
        </span>
        <span className={style.header_parralel}>
          Parallel88 is the leading blockchain engineering group in East Africa and one of the largest in the continent, boasting a team of 60+ developers at our Nairobi Studios.
        </span>
       
      </div>
      <button className = {style.header_btn}>Book a Meeting</button>
      <div className = {style.header_pic}>
        <Image 
          className = {style.pic}
          src = "/pic.svg"
          width = {914}
          height={609.18}
          alt = "pic"
        />
      </div>
    </div>
  )
}

export default Header;