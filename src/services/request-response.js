function request(textRequest) {
  const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
  const token = "746b57b2d19ceab7604d3448318354f90a0e7810";
  const query = textRequest;

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
  const result = fetch(url, options)
    .then(response => response.text())
    .then(resultJSON => JSON.parse(resultJSON).suggestions);

  return result;
}

export default request;