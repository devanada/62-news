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
        <div className="w-full h-full px-8 flex flex-col overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
