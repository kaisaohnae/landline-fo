'use client';

import React, {useState, useEffect} from 'react';
import {ReactElement} from 'react';
import QnaList from "@/app/qna/qna-list";
import QnaWrite from "@/app/qna/qna-write";

export default function Page(): ReactElement {

  const [mounted, setMounted] = useState<boolean>(false);
  const [showFormPopup, setShowFormPopup] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="qna">
      <QnaWrite showFormPopup={showFormPopup} setShowFormPopup={setShowFormPopup} />
      <QnaList/>
      <div className="button-wrapper">
        <button type="button" className="on" onClick={() => {
          setShowFormPopup(true);
        }}>문의하기</button>
      </div>
    </div>
  );
}
