import React from 'react';
import PropTypes from 'prop-types';
import warning from 'warning';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
//import Portal from '@material-ui/core/Portal';
//import MarkdownElement from '@material-ui/docs/MarkdownElement';
import Head from 'docs/src/modules/components/Head';
//import AppContent from 'docs/src/modules/components/AppContent';
//import Demo from 'docs/src/modules/components/Demo';
import AppFrame from 'docs/src/modules/components/AppFrame';
//import AppTableOfContents from 'docs/src/modules/components/AppTableOfContents';
//import Ad from 'docs/src/modules/components/Ad';
//import EditPage from 'docs/src/modules/components/EditPage';
import MarkdownDocsContents from 'docs/src/modules/components/MarkdownDocsContents';
import { getSyntheticLeadingComments } from 'typescript';
import {
  getHeaders,
  getTitle,
  getDescription,
  demoRegexp,
} from 'docs/src/modules/utils/parseMarkdown';

const styles = theme => ({

});

function MarkdownDocs(props) {

  let markdown = "";

  const headers = getHeaders(markdown);
  return (
    <MarkdownDocsContents>
      {({}) => (
        <AppFrame>
          <Head
          title={`${headers.title || getSyntheticLeadingComments(markdown)} - Material-UI`}
          description={headers.description || getDescription(markdown)}
          />
        </AppFrame>
      )}
    </MarkdownDocsContents>
  );
}

export default compose(
  connect(state => ({
    userLanguage: state.options.userLanguage,
  })),
  withStyles(styles),
)(MarkdownDocs);