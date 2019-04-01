const headerRegExp = /---[\r\n]([\s\S]*)[\r\n]---/;
const titleRegExp = /# (.*)[\r\n]/;
const descriptionRegExp = /<p class="description">(.*)<\/p>[\r\n]/;
const headerKeyValueRegExp = /(.*): (.*)/g;
const emptyRegExp = /^\s*$/;


export function getHeaders(markdown) {
  let header = "Header"
  return header;
}


export function getContents(markdown) {
  return "Content";
}

export const demoRegexp = /^"demo": "(.*)"/;

export function getTitle(markdown){
  return "title";
}

export function getDescription(markdown) {
  return "Description";
}