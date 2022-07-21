import React from "react";
import Head from "next/head";

import Header from "./Header";

export default function Layout({ headTitle, headDesc, children }) {
  return (
    <div>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={headDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="px-8">{children}</div>
      </main>
    </div>
  );
}
