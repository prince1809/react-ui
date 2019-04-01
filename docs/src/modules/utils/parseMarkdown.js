const headerRegExp = /---[\r\n]([\s\S]*)[\r\n]---/;
const titleRegExp = /# (.*)[\r\n]/;
const descriptionRegExp = /<p class="description">(.*)<\/p>[\r\n]/;
const headerKeyValueRegExp = /(.*): (.*)/g;
const emptyRegExp = /^\s*$/;


export function getHeaders(markdown) {
  let header = markdown.match(headerRegExp);
  if (!header) {
    return {
      components: []
    };
  }

  header = header[1];

  let regexMatches;
  const headers = {};

  // eslint-disable-next-line no-cond-assign
  while ((regexMatches = headerKeyValueRegExp.exec(header)) !== null) {
    headers[regexMatches[1]] = regexMatches[2];
  }

  if (headers.components) {
    headers.components = headers.components.split(', ').sort();
  } else {
    headers.components = [];
  }
  return headers;
}


export function getContents(markdown) {
  return "Content";
}

export const demoRegexp = /^"demo": "(.*)"/;

export function getTitle(markdown) {
  return "title";
}

export function getDescription(markdown) {
  return "Description";
}