import React, {Component} from 'react';

class Page2 extends Component {

componentDidMount(){// THIS PREFORMS A ACTION ONCE YOU NAVIGATE TO A PARTICULAR PAGE//
    fetch("https://ghibliapi.herokuapp.com/people")
        .then((res) => {
            return res.json();
        })
        .then((people) => console.log(people))
}

    render() {
        return(
            <h1>This is Page 2</h1>
        );
    }
}

export default Page2;