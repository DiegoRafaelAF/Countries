const URL_COUNTRIES = 'https://countries-274616.ew.r.appspot.com/';

const api = fetch(URL_COUNTRIES, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: `
    query {
      CallingCode {
        countries {
          name,
          nativeName,
          capital,
          flag {
            svgFile
          },
        }
      }
    }
` }),
}).then((res) => res.json());

export default api;
