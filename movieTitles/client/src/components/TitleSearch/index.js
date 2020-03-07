import React from 'react';


movieSearch()  {
    let inputElement = document.querySelector("#movieSearch");

    let inputValue = inputElement.value;

    if(inputValue.length === 0) {
      inputValue = "@";
    }

    fetch("http://localhost:80/movies/title/" = inputElement.value)
    .then((res) => {return res.json()})
    .then((processed) => {
      console.log(processed);
    });

export default TitleSearch