'use client';

import React, {ReactElement, useEffect, useState} from 'react';
import SwiperCore from 'swiper';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import Main from "@/app/main/main";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Page(): ReactElement {

  useEffect(() => {

  }, []);

  return (
    <>
      <div className="container">
       <Main/>
      </div>
    </>
  );
}
