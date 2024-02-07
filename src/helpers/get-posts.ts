const token1 = 'GZDN5VY-P784V2S-GN9K17T-7F6P97G'
const token2 = '9VTHB2B-GMD4FBC-KNEK1T6-YQBJCF7'
const token3 = 'BQKVY82-WR64N98-G9ZFYBD-0GY2CBB'
const token4 = '94KW576-V5TMR5T-MDJXAN0-JRAC8WR' //mama
const token5 = 'KZQCWCS-39JM5KG-KV4Z5A1-MZB04E9' //max
const token6 = '7J1VR9Q-RD34CQF-QMWK1QS-EH5S1GM' //вика

const options = {
  method: "GET",
  headers: { "X-API-KEY": token1},
};

export function getPosts(url: string) {
  const response = fetch(url, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return response;
}

// https://api.kinopoisk.dev/documentation documentation
