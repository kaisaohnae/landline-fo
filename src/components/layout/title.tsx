import Head from 'next/head';

export default function Title({title}: { title?: string }) {
  // let pageTitle = `${title ? title + ' | ' : ''} landline-fo`;
  let pageTitle = `landline`;
  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  );
}
