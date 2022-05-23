const $ = (selector) => document.querySelector(selector);

export const getTemp = (sel) => {
  const url = $(sel).href;

  return fetch(url).then(r => r.text()).then(html => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.firstElementChild;
  });
};