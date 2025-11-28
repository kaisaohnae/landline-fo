'use client';

import React, {useEffect, useState} from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="copy">
          <p>
            Copyright © 2025 landline.co.kr All Rights Reserved.
            <br />
            <span style={{display: 'inline-block', paddingRight: '10px'}}>
              <Link href="/privacy" title="개인정보보호방침">
                개인정보보호방침
              </Link>
            </span>
            Email : 7083620@hanmail.net
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
