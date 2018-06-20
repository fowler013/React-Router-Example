import React, {Component} from 'react';

class Page1 extends Component {

componentDidMount(){// THIS PREFORMS A ACTION ONCE YOU NAVIGATE TO A PARTICULAR PAGE//
    fetch("https://ghibliapi.herokuapp.com/films")
        .then((res) => {
            return res.json();
        })
        .then((films) => console.log(films))
}

    render() {
        return(
            <h1>This is Page 1</h1>
        );
    }
}

export default Page1;