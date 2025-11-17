'use client';

import React, {ReactElement, useEffect, useState} from 'react';

export default function Page(): ReactElement {
  const [isEvent, setEvent] = useState(true);
  const [isPickup, setPickup] = useState(true);
  useEffect(() => {
  }, []);
  const closeEvent = () => {
    setEvent(false);
  };
  const closePickup = () => {
    setPickup(false);
  };
  return (
    <>
      {/*<div className="layerMain openEvent" style={{display: isEvent ? 'block' : 'none'}}>
        <div className="box">
          <img src={'/img/popup/btn-close.png'} className="close" onClick={closeEvent} alt=''/>
          <h5>랜드라인</h5>
          <p>
            랜드라인 이벤트<br/>
          </p>
        </div>
      </div>*/}
    </>
  );
}
