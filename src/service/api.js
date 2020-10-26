const URL_COUNTRIES = 'https://countries-274616.ew.r.appspot.com/';

const api = fetch(URL_COUNTRIES, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: `
    query {
      Country {
        name
        nativeName
        capital
        flag {
          emoji
          emojiUnicode
          svgFile
        }
      }
    }
` }),
}).then((res) => res.json());

export default api;
