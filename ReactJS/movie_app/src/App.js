import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    isloading : true,
    movies : []
  };
  
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isloading : false});
    },6000);
  }

  render(){
    const {isloading} = this.state
    return (<div>
      {isloading ? "Loading" : "We are ready"}
    </div>);
  }
}
export default App;