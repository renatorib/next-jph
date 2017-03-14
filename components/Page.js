// @flow

import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import Meta from './Meta';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

type Props = {
  children?: any,
  title?: string,
  className?: string,
};

const Page = ({ children, title, className = '', ...restProps }: Props) => (
  <div className={`page ${className}`} {...restProps}>
    <Meta />
    <Head>
      <title>{title || 'Placeholder'}</title>
    </Head>

    {children}
  </div>
);

export default Page;
