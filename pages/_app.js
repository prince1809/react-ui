import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import find from 'lodash/find';

import PageContext from 'docs/src/modules/components/PageContext';
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

function findActivePage(currentPages, router) {
  const activePage = find(currentPages, page => {
    if (page.children) {
      return router.pathname.indexOf(`${page.pathname}/`) === 0;
    }

    // Should be an exact match if no children
    return router.pathname === page.pathname;
  });

  if (!activePage) {
    return null;
  }

  // we need to drill down
  if (activePage.pathname !== router.pathname) {
    return findActivePage(activePage.children, router);
  }

  return activePage;
}

class MyApp extends App {

  constructor(props) {
    super();
    this.redux = initRedux(props.reduxServerState || {});
    this.pageContext = getPageContext();
  }

  render() {

    const { Component, pageProps, router } = this.props;

    let pathname = router.pathname;
    if (pathname !== '/') {
      pathname = pathname.replace(/\/$/, '');
    }

    const activePage = findActivePage(pages, { ...router, pathname });

    return (
      <Container>
        <Provider store={this.redux}>
          <PageContext.Provider value={{ activePage, pages }}>
            <AppWrapper pageContext={this.pageContext}>
              <Component {...pageProps} />
            </AppWrapper>
          </PageContext.Provider>
        </Provider>
      </Container>
    );
  }
}

MyApp.getInitialProps = () => {
  let pageProps = {};

  if (!process.browser) {
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