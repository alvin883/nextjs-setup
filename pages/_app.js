import React from "react";
import App from "next/app";
import Head from "next/head";
import "../scss/style.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <title>Next JS Setup</title>
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
