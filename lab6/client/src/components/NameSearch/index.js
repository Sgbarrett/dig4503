import React from "react";




class NameSearch extends React.Component {

        readName(event) {
            event.preventDefault();

            let element = document.querySelector('#name');
            fetch('/name/' + element.value)

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

render () {
    return (
        <div>
            <h1>Pokemon name</h1>
                <form onSubmit={this.readName}>
                    <input   type="text" id="name" />
                <button >SUBMIT</button>
                </form>
        </div>
        );
    }
}
export default NameSearch;