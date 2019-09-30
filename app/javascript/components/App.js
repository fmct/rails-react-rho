import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HelloWorld from "./HelloWorld"
import Sports from "./Sports"
import Events from "./Events"
import Outcomes from "./Outcomes"

let sportId = " "

let eventId = " "

class App extends React.Component {

  myCallback(dataFromChild) {
    sportId = dataFromChild
    return sportId
  }
  eventCallback(dataFromChild) {
    eventId = dataFromChild
    console.log(eventId)
    return eventId
  }
  render () {
    return (
		<BrowserRouter>
			<Switch>

        <Route exact path="/" render={() => <HelloWorld greeting="friend, go to "/>} />     
        <Route path="/sports/*/events/*" render={() => <Outcomes test2={eventId} spId={sportId}/>} /> 
        <Route path="/sports/*" render={() => <Events test={sportId} callbackFromParent2={this.eventCallback}/>} /> 
        <Route path="/sports" render={() => <Sports callbackFromParent={this.myCallback}/>} />  
    	</Switch>
    </BrowserRouter>
    );	
  }
}

export default App
