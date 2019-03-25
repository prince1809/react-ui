import React from 'react';
import PropTypes from 'prop-types';
import Document, { Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  render() {

    const { canonical, pageContext, url } = this.props;
    let font = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';
    // if (url.match(/onepirate/)) {
    //   font = 'https://fonts.googleapis.com/css?family=Roboto+Condensed:700|Work+Sans:300,400';
    // }

    return (
      <html lang="en" dir="ltr">
        <Head>
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          {/* 
          manifest.json provides metadata  used when your web app is added to the 
          homescreen on Android.
           */}
           <link rel="manifest" href="/static/manifest.json" />
          {/* PWA primary color */}
          <meta
            name="theme-color"
            content={pageContext ? pageContext.theme.palette.primary.main : null}
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="canonical" href={canonical} />
          <link rel="stylesheet" href={font} />
          {/*
            Preconnect allows the browser to setup early connections before an HTTP request
            is actually sent to the server.
            This includes DNS lookups, TLS negotiations, TCP handshakes.
          */}
          <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
          <style id="insertion-point-jss" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. page.getInitialProps
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the server with error:
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. page.getInitialProps
  // 3. page.render

  // Render app and page and get the context of the page with collected side effects.
  let pageContext;
  const page = ctx.renderPage(Component => {
    const WrapperComponent = props => {
      pageContext = props.pageContext;
      return <Component {...props} />;
    };

    WrapperComponent.propTypes = {
      pageContext: PropTypes.object.isRequired,
    };

    return WrapperComponent;
  });

  let css;
  // It might be undefined, e.g. after an error.
  if (pageContext) {
    css = pageContext.sheetsRegistry.toString();
    if (process.env.NODE_ENV === 'production') {
      const result1 = await prefixer.process(css, {from: undefined});
      css = result1.css;
      css = cleanCSS.minify(css).styles;
    }
  }

  return {
    ...page,
    pageContext,
    url: ctx.req.url,
    styles: (
      <style
      id="jss-server-side"
      dangerouslySetInnerHTML={{__html: css}}
      />
    ),
  };
};

export default MyDocument;