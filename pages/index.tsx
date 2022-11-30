import Head from 'next/head';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2 bg-gray-200'>
      <Head>
        <title>Health Monitor Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Hello World!</h1>
    </div>
  );
}
