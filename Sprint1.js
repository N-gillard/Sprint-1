fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
  .then(data => {
    const breeds = data.message;
    console.log(JSON.stringify(breeds, null, 4));
  })
  .catch(error => {
    console.error("Error:", error);
  });

  fetch("https://dog.ceo/api/breed/hound/images/random/3")
  .then(response => response.json())
  .then(data => {
    const imageUrls = data.message;
    console.log(imageUrls);
  })
  .catch(error => {
    console.error("Error:", error);
  });

  import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
