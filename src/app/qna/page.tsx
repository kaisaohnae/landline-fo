'use client';

import React, {useState, useEffect} from 'react';
import {ReactElement} from 'react';
import CounselWrite from '@/app/qna/counsel-write';

export default function Page(): ReactElement {
  const [mounted, setMounted] = useState<boolean>(false);
  const [showFormPopup, setShowFormPopup] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="counsel">
      <CounselWrite />
    </div>
  );
}
