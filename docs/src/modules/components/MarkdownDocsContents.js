import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { _rewriteUrlForNextExport } from 'next/router';
import PropTypes from 'prop-types';
//import { getHeaders, getContents } from 'docs/src/modules/utils/parseMarkdown';
import PageContext from 'docs/src/modules/components/PageContext';


function MarkdownDocsContents(props) {
  const { children, markdownLocation, markdownLocationProps, markdown } = props;

  return (
    <PageContext.Consumer>
      {({ activePage }) => {
        return children({});
      }}
    </PageContext.Consumer>
  )
}

export default MarkdownDocsContents;