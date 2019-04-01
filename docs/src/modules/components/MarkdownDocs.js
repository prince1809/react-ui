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

const SOURCE_CODE_ROOT_URL = 'https://github.com/mui-org/material-ui/blob/master';

function MarkdownDocs(props) {
  const {
    classes,
    disableAd,
    disableEdit,
    markdown: markdownProp,
    markdownLocation: markdownLocationProp,
    req,
    reqPrefix,
    reqSource,
    userLanguage,
  } = props;

  let demos;
  let markdown = markdownProp;
  if (req) {
    demos = {};
    const markdowns = {};
    const sourceFiles = reqSource.keys();
    req.keys().forEach(filename => {
      if(filename.indexOf('.md') !== -1) {
        const match = filename.match(/-([a-z]{2})\.md$/); 
        console.log(match);
        if( match && ['en', 'zh'].indexOf(match[1]) !== -1) {
          markdowns[match[1]] = req(filename);
        } else {
          markdowns.en = req(filename);
        }
      } else {
        console.log("second");
      }
    });
    markdown = markdowns[userLanguage] || markdowns.en;
  }

  const headers = getHeaders(markdown);
  return (
    <MarkdownDocsContents markdown={markdown} markdownLocation={markdownLocationProp}>
      {({ }) => (
        <AppFrame>
          {/* <Head
          title={`${headers.title || getSyntheticLeadingComments(markdown)} - Material-UI`}
          description={headers.description || getDescription(markdown)}
          /> */}
        </AppFrame>
      )}
    </MarkdownDocsContents>
  );
};

MarkdownDocs.propTypes = {
  calsses: PropTypes.object.isRequired,
  disableAd: PropTypes.bool,
  disableEdit: PropTypes.bool,
  markdown: PropTypes.string,
  // You can define the direction location of the markdown file.
  // Otherwise, we try to determine it with heuristic.
  markdownLocation: PropTypes.string,
  req: PropTypes.func,
  reqPrefix: PropTypes.string,
  reqSource: PropTypes.func,
  userLanguage: PropTypes.string.isRequired,
};

MarkdownDocs.defaultProps = {
  disableAd: false,
};

export default compose(
  connect(state => ({
    userLanguage: state.options.userLanguage,
  })),
  withStyles(styles),
)(MarkdownDocs);