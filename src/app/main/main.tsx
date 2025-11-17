'use client';

import React, {ReactElement, useEffect, useState } from 'react';
import MainLayer from "@/app/main/main-layer";
import MainVisual from "@/app/main/main-visual";

export default function Main(): ReactElement {

  return (
    <>
      <div className="main">
        {/*<div className="tutorial-banner">
          <img src={process.env.NEXT_PUBLIC_IMG_HOST + '/img/visual/banner-2025-10-22.png'} />
          <img src={'/img/visual/banner-2025-10-22.png'} />
        </div>*/}
        <MainLayer/>
        <MainVisual/>
      </div>
    </>
  );
}
