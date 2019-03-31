import warning from 'warning';


export function titleize(string) {
  warning(
    typeof string === 'string' && string.length > 0,
    'titleize(string) expectes a non empty string argument.',
  )

  return string
  .split('-')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');
}


export function pageToTitle(page) {
  if(page.title) {
    return page.title;
  }

  const name = page.pathname.replace(/.*\//,'');
  
  if (page.pathname.indexOf('/api/') !== -1) {
    return name;
  }

  return titleize(name);
}

export function getCookie(name) {
  const regex = new RegExp(`(?:(?:^|.*;*)${name}*=*([^;]*).*$)|^.*$`);
  return document.cookie.replace(regex, '$1');
}