import React, {} from 'react';
import Link from 'next/link';
import Menu from '@/components/layout/menu';

export default function Header() {

  return (
    <header id="header">
      <h1>
        <Link href="/" title='랜드라인'><img src={'/img/common/logo.png'} height={100} alt='랜드라인'/></Link>
      </h1>
      <Menu/>
    </header>
  );
}
