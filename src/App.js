import './App.css';
import React, {useState} from "react";

class App extends React.Component {
  state = {
    fullName: "Ahmed Hassiki",
    bio: "lorem ipsum tararara",
    imgSrc : "http://www.gomycode.com/images.png",
    profession : "Entrepreneur",
    isShow:true,
    timeElapsed : 0
  };
  

  componentDidMount() {
    this.startTime = Date.now();
    this.interval = setInterval(() => {
      this.setState({ timeElapsed: Math.floor((Date.now() - this.startTime) / 1000) });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  toggleShow = () => {
    this.setState({ isShow: !this.state.isShow })
  };
  render() {
    return (
      <>
      {this.state.isShow ? <h2>{this.state.fullName}</h2> : null}
      <button className='thebutton' onClick={this.toggleShow}>Toggle</button>
      <p>Time elapsed since component mounted: {this.state.timeElapsed} seconds</p>

      </>

  );
}
}

export default App;
