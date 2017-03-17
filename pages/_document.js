import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { injectGlobal } from 'styled-components';
import styleSheet from 'styled-components/lib/models/StyleSheet';

injectGlobal`
  body, html {
    margin: 0;
  }

  body {
    font-family: "Roboto";
    font-weight: 300;
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

class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = (
      <style
        dangerouslySetInnerHTML={{ // eslint-disable-line
          __html: styleSheet.rules().map(rule => rule.cssText).join('\n'),
        }}
      />
    );

    return { ...page, styles };
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
          <title>Placeholder</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link href="https://fonts.googleapis.com/css?family=Sansita|IM+Fell+Double+Pica:400i|Roboto:100,300,400" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
