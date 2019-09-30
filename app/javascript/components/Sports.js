import React from "react"
import PropTypes from "prop-types"
import Events from "./Events"

const json = require('./overview.json');
let rows = []




class Sports extends React.Component {


  handleClick(a){
    this.props.callbackFromParent(a)
  }

  createList() {
    rows = []
    for (let i = 0; i < json['slider_elements'].length; i++) {
    rows.push(<div key={i} > <h3> {json['slider_elements'][i]['desc']} </h3>
      <a href={"/sports/" + json['slider_elements'][i]['id']} 
      className='goToEvents' onClick={() => {this.handleClick(json['slider_elements'][i]['id'])}}> events </a>
     </div>);
    }
    return rows
  }

  reqListener(e) {
    console.log(json['slider_elements'][0]);
  } 
  render () {
    return (
      <React.Fragment>
        <h1>Sports </h1>
        <div> {this.createList()} </div>

      </React.Fragment>
    );
  }
}

export default Sports