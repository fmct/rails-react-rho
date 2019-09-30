import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HelloWorld from "./HelloWorld"
import Sports from "./Sports"
import Events from "./Events"
import Outcomes from "./Outcomes"

let sportId = ""

let outcomeId = " "

class App extends React.Component {

  myCallback(dataFromChild) {
    sportId = dataFromChild
    return sportId
  }
  render () {
    return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" render={() => ("Home!")} />      
      	<Route path="/hello" render={() => <HelloWorld greeting="friend, go to "/>} />
        <Route path="/sport/*/events/*" render={() => <Outcomes />} /> 
        <Route path="/sport/*" render={() => <Events test={sportId} />} /> 
        <Route path="/sports" render={() => <Sports callbackFromParent={this.myCallback}/>} />  
    	</Switch>
    </BrowserRouter>
    );	
  }
}

export default App
