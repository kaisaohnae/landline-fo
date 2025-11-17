'use client';

import React, {useEffect, useState} from 'react';
import { usePathname } from 'next/navigation';


const Footer = () => {

  const pathname = usePathname();

  const degSets = [
    ["120deg", "140deg", "80deg", "30deg", "40deg"],
    ["40deg", "80deg", "140deg", "90deg", "170deg"],
    ["80deg", "40deg", "0deg", "140deg", "60deg"],
    ["40deg", "140deg", "80deg", "50deg", "80deg"],
  ];

  const [degs, setDegs] = useState(degSets[0]);

  useEffect(() => {
    // 경로별로 다른 배열 선택
    switch (pathname) {
      case "/room/":
        setDegs(degSets[1]);
        break;
      case "/reservation/":
        setDegs(degSets[2]);
        break;
      case "/qna/":
        setDegs(degSets[3]);
        break;
      default:
        setDegs(degSets[0]);
    }
  }, [pathname]);

  return (
    <>
      <footer id="footer">
        <div className="copy">
          <p>
            Copyright © 2025 landline.co.kr All Rights Reserved.<br/>
            Email : 7083620@hanmail.net
          </p>
        </div>
      </footer>

    </>
);
};

export default Footer;
