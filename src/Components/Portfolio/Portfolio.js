import React from 'react';

import './Portfolio.css';
import {Swiper,SwiperSlide} from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import Slides from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import Hoc from '../../img/hoc.png';
import Musicapp from '../../img/musicapp.png';

import { themeContext} from '../../Context';
import { useContext } from "react";

export default function Portfolio() {
    const theme =useContext(themeContext);
const darkMode= theme.state.darkMode;

  return (
    <>
    <div className="portfolio">
        {/*heading*/}
        <span style={{color: darkMode ? 'white' :''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/*SLIDER */}
        <Swiper
        spaceBetween={90}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"

        >
            <SwiperSlide>
                <img src={Slides} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Hoc} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Musicapp} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
    </>
  )
}
