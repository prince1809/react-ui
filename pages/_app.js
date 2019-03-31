import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';

import AppWrapper from 'docs/src/modules/components/AppWrapper';
import initRedux from 'docs/src/modules/redux/initRedux';
import getPageContext from 'docs/src/modules/styles/getPageContext';


let dependenciesLoaded = false;


if (process.browser) {
  // eslint-disable-next-line no-console
  console.log(
    `%c

███╗   ███╗ █████╗ ████████╗███████╗██████╗ ██╗ █████╗ ██╗      ██╗   ██╗██╗
████╗ ████║██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██║██╔══██╗██║      ██║   ██║██║
██╔████╔██║███████║   ██║   █████╗  ██████╔╝██║███████║██║█████╗██║   ██║██║
██║╚██╔╝██║██╔══██║   ██║   ██╔══╝  ██╔══██╗██║██╔══██║██║╚════╝██║   ██║██║
██║ ╚═╝ ██║██║  ██║   ██║   ███████╗██║  ██║██║██║  ██║███████╗ ╚██████╔╝██║
╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚══════╝  ╚═════╝ ╚═╝

Tip: you can access the \`theme\` object directly in the console.
`,
    'font-family:monospace;color:#1976d2;font-size:12px;',
  );
}

const pages = [
  {
    pathname: '/versions',
    displayNav: false,
  },
  {
    pathname: '/',
    displayNav: false,
    title: false,
  },
];

class MyApp extends App {

  constructor(props) {
    super();
    this.redux = initRedux(props.reduxServerState || {});
    this.pageContext = getPageContext();
  }

  render() {

    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider store={this.redux}>
          <AppWrapper pageContext={this.pageContext}>
            <Component {...pageProps} />
          </AppWrapper>
        </Provider>
      </Container>
    );
  }
}

MyApp.getInitialProps = () => {
  let pageProps = {};

  if(!process.browser) {
    const redux = initRedux({});
    pageProps = {
      reduxServerState: redux.getState(),
    };
  }
  return {
    pageProps,
  };
};



export default MyApp;