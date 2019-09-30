import React from "react"
import PropTypes from "prop-types"

const json = require('./overview.json');
let rows = []
const url = window.location.href;
const eventId = url.split("/",5)[4]




class Outcomes extends React.Component {


  createList() {  
    rows = []
    for (let i = 0; i < json['sports'].length; i++) {
      if (json['sports'][i]['id'] == parseInt(eventId)){
        const comps = json['sports'][i]['comp']
        for (let comp = 0; comp < comps.length; comp++) {
          const events = comps[comp]['events']
          for (let event = 0; event < events.length; event++) {
            const urlSplit = url.split("/",7)
            console.log(parseInt(urlSplit[6]))
            if (events[event]['id'] == parseInt(this.props.test2) && this.props.test2 != ""
              || events[event]['id'] == parseInt(urlSplit[6]) && this.props.test2 == ""){
              const firstTeamName = events[event]['oppADesc']
              const firstTeamScore = events[event]['scoreboard']['scrA']
              const secondTeamName = events[event]['oppBDesc']
              const secondTeamScore = events[event]['scoreboard']['scrB']
              rows.push(<div key={i} > <h3> {firstTeamName + ' ' + firstTeamScore + ' - ' + secondTeamScore + ' ' + secondTeamName} </h3>
               </div>);
            }
          }
        }
      }
    }
    return rows
  }

  reqListener(e) {
    console.log(json['slider_elements'][0]);
  } 
  render () {
    return (
      <React.Fragment>
        <h1>Outcomes </h1>
        <div> {this.createList()} </div>

      </React.Fragment>
    );
  }
}

export default Outcomes