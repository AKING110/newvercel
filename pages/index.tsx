import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const XPage: React.FC = () => {
  const imageUrl =
    'https://m.bolpurcollege.in/88888.webp';
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Join 1,350,350 online members discussing exciting topics!" />
        <meta name="keywords" content="Quatuor, Afrique, Community, Members" />
        <meta name="generator" content="WordPress 5.3.2" />
        <title>😱 Quatuor en Afrique 😱</title>
        <meta property="al:android:package" content="com.facebook.katana" />
        <meta name="twitter:app:id:googleplay" content="com.facebook.katana" />
        <meta property="al:android:app_name" content="Facebook" />
        <meta name="twitter:app:name:googleplay" content="Facebook" />
        <meta name="theme-color" content="#563d7c" />
        <meta property="fb:app_id" content="87741124305" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="😱 Quatuor en Afrique 😱" />
        <meta property="og:description" content="Join 1,350,350 online members discussing exciting topics!" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="650" />
        <meta property="og:image:height" content="366" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Join 1,350,350 online members discussing exciting topics!" />
        <meta name="twitter:image" content={imageUrl} />
      </Head>
      <main className="container">
        <h1>😱 Quatuor en Afrique 😱</h1>
        <p className="image-container">
          <Image
            src={imageUrl}
            alt="An image representing the vibrant community of Quatuor en Afrique."
            layout="responsive"
            width={650}
            height={366}
            className="img-responsive"
          />
        </p>
      </main>
      <style jsx>{`
        .container {
          padding: 20px;
          text-align: center;
          font-family: Arial, sans-serif;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 20px;
          color: #563d7c;
        }
        .image-container {
          max-width: 650px;
          margin: 0 auto;
        }
        .img-responsive {
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default XPage;
