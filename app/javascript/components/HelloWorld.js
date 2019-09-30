import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
  };
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <a href="/sports" className='getThingsBtn' onClick={() => {this.handleClick}}> sports </a>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
