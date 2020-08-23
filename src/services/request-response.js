function request(textRequest) {
  const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
  const token = "dd297d84770c4e317083771a6c94f597021f5761";
  const query = textRequest;
  let result = null;

  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Token " + token,
      "APIKey": "dd297d84770c4e317083771a6c94f597021f5761",
    },
    body: JSON.stringify({ query: query }, " ")
  };
  result = fetch(url, options)
    .then(response => response.text())
    .then(resultJSON => JSON.parse(resultJSON).suggestions);

  return result;
}

export default request;