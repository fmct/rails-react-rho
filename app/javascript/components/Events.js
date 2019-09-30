import React from "react"
import PropTypes from "prop-types"
import Sports from "./Sports"

const handleClick = (e) => {
  e.preventDefault();
  console.log('The link was clicked.');
};

const json = require('./overview.json');
const url = window.location.href;
let rows = []

class Events extends React.Component {
  handleClick(a){
    this.props.callbackFromParent2(a)
  }
  createEvents()  {
    rows = []
    for (let i = 0; i < json['sports'].length; i++) {
      const urlId = url.split("/",5)
      if (json['sports'][i]['id'] == this.props.test 
        || json['sports'][i]['id'] == parseInt(urlId[4]) && this.props.test == " "){
        if (json['sports'][i]['comp'].length != 0){
          let comps = json['sports'][i]['comp']
          for(let comp = 0; comp < comps.length; comp++){
            rows.push(<div key={comps[comp]['desc']} > <h3> {comps[comp]['desc']} </h3>
           </div>);
            let events = comps[comp]['events']
            for(let event = 0; event < events.length; event++){
              let next_url = ""
              if(json['sports'][i]['id'] == this.props.test && this.props.test != " "){
                next_url = url.split("/")[1] + "/sports/" + this.props.test + "/events/" + events[event]['id']
              }
              else if(json['sports'][i]['id'] == parseInt(urlId[4]) && this.props.test == " "){
                next_url = url.split("/")[1] + "/sports/" + parseInt(urlId[4]) + "/events/" + events[event]['id']
              }
              rows.push(<div key={events[event]['id']} > <p> {events[event]['desc']} </p> 
                
                <a href={next_url} key={i + events[event]['id']} className='getThingsBtn' onClick={() => {this.handleClick(events[event]['id'])}}> outcomes </a>
              </div>);
            }
          }
        } else{
          rows.push(<div key={i} > <h3> No Events </h3>
         </div>);
        }
        break
      }
      else{
          const name = json['sports'][i]['desc']
          if (name.split(" ")[0] == 'eSports'){
              rows.push(<div key={name} > <h3> {name} </h3>
              </div>);
              if (json['sports'][i]['comp'].length == 0){
                rows.push(<div key={i} > <p> No Events </p>
                </div>);
              }
          }
      }
    }
    return rows
  }
  render () {
    return (
      <React.Fragment>
        <h1>Events </h1>  
        <div> {this.createEvents()} </div>
      </React.Fragment>
    );
  }
}

export default Events