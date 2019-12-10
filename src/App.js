import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      seconds:0 , 
      isOn:false
     }
  }
start =()=> {
  this.interval= setInterval(()=> {
    this.setState({
      seconds:this.state.seconds+1

    })
  },1000)
  this.setState ({
    isOn:true
  })
}

Rest =()=> {
  clearInterval(this.interval)
  this.setState ({
    seconds:0
  })
}
Stop =()=> {
  clearInterval(this.interval)
  this.setState ({
    isOn:false
  })
}
counter(num) {
  var a =num/3600


  var h = Math.floor(a)
  var m= Math.floor((a-h)*60)
  var s= Math.round((((a-h)*60)-m)*60)
 return (
  <div> 
  <span>{String(h).padStart(2,0)} : {String(m).padStart(2,0)} : {String(s).padStart(2,0)} </span>
</div>
 )

     }
  render() { 
    return ( <div>
  <span>{this.counter(this.state.seconds)}</span>


<div>
  <span>Hours</span>
  <span>Minutes</span>
  <span>seconds</span>

</div>
<div>
  <button onClick ={!this.state.isOn ? this.start:this.Stop}>Start</button>
  <button onClick={this.Rest}>Rest</button>

</div>
    </div> );
  }
}
 
export default App;