// @flow

import React from 'react';
import Head from 'next/head';
import MainHead from './Head';

type Props = {
  children?: any,
  title?: string,
  className?: string,
};

const Page = ({ children, title, className = '', ...restProps }: Props) => (
  <div className={`page ${className}`} {...restProps}>
    <MainHead />

    <Head>
      <title>{title || 'Placeholder'}</title>
    </Head>

    {children}
  </div>
);

export default Page;
