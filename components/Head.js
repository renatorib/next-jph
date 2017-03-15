import { injectGlobal } from 'styled-components';
import React from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';

injectGlobal`
  body, html {
    margin: 0;
  }

  body {
    font-family: "Roboto";
    background: #f6f6f6;
  }

  *, *:after, *:before {
    box-sizing: border-box;
  }

  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: #ff9300;
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }

  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #ff9300, 0 0 5px #ff9300;
    opacity: 1.0;
    transform: rotate(3deg) translate(0px, -4px);
  }
`;

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
  </Head>
);
