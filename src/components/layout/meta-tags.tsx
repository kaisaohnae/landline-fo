import Head from 'next/head';

export default function MetaTags() {
  return (
    <Head>
      <title>landline</title>
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="description" content="landline,랜드라인" />
      <meta name="keywords" content="landline,랜드라인,가평펜션,가평풀빌라,풀빌라" />
      <meta name="author" content="AnySSign" />
      <meta name="apple-mobile-web-app-title" content="에이나" />
      <meta property="og:title" content="에이나" />
      <meta property="og:description" content="landline,랜드라인,가평펜션,가평풀빌라,풀빌라" />
      <meta property="og:image" content="/img/common/logo.png" />
      <link rel="canonical" href="https://www.anyssign.com/" />
      <link rel="icon" type="image/png" href="/img/common/favicon.png" sizes="32x32" />
      <link rel="shortcut icon" type="image/png" href="/img/common/favicon.png" />
      <meta name="viewport" content="initial-scale=1.0,minimum-scale=0,maximum-scale=1.0,user-scalable=no" />
      <meta name="format-detection" content="telephone=no, address=no, email=no" />
      <meta name="application-name" content="landline" />
    </Head>
  );
}
