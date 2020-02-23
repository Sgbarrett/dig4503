import React from "react";

class IdSearch extends React.Component {

readID(event) {

    event.preventDefault();

    let element = document.querySelector('#id');
    fetch('/id/' + element.value)

    .then(res => {
    return res.json();
  })

  .then(processed => {
    let reporting = document.querySelector('#reportingArea');

    if (processed.error) {
      reporting.innerHTML = processed.error;
    } else {
      reporting.innerHTML = processed.name;
    }
  });

element.value = '';
    }

render ()   {

    return (

        <div>
        <h1>Pokemon Id</h1>
        <form onSubmit={this.readID} >
            <input type="text" id="id"></input>
            <button >SUBMIT</button>
        </form>
        </div>
    );
    
    }
}

export default IdSearch;