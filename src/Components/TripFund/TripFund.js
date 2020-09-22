import React, { Component } from 'react';
import '../../Styles/TripFund.css'
import Form from './Form'
import Dashboard from './Dashboard'

class TripFund extends Component {

  constructor()
  {
    super();
    // this.state = {
    //   from:{city:"",state:""},
    //   to:{city:"",state:""},
    //   price:{fuel:null,food:null,stay:null},
    //   stay:{day:null,price:null},
    //   food:{day:null,price:null},
    //   distance:null,
    //   time:null,
    //   fuel:null,
    //   mileage:null
    // }

    this.state = {
      from:{city:"Coimbatore",state:""},
      to:{city:"Panaji",state:""},
      stay:{day:6,price:800},
      food:{day:7,price:150},
      mileage:40,
      
      price:{fuel:null,food:null,stay:null},
      distance:null,
      time:null,
      fuel:null
    }
    this.fuelPrice = 84;
  }

  secondsToHms = (d) => {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    if(m >= 30) h += 1;
    
    var hDisplay = h > 0 ? h + (h === 1 ? " hour " : " hours ") : "";
    // var mDisplay = m > 0 ? m + (m === 1 ? " minute " : " minutes") : "";
  
    return hDisplay; 

}

newEstimation = (fuelPrice) =>
{
    let totalS = fuelPrice.toString();
    let size = totalS.length;
    let first = parseInt(totalS[0])
    let newTotal = (first+1)*Math.pow(10,size-1)
    this.setState({total:newTotal})
}

  calculate = () => {
    console.log('Calculating')
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          "locations": [this.state.from.city,this.state.to.city]
        })
    };
    fetch('https://www.mapquestapi.com/directions/v2/routematrix?key=NWocdztSYHRGGxghPivCkuoeYaVvMQx1', requestOptions)
    .then(response => response.json())
    .then(data => {
      if(data.info.statuscode === 402)
      {
        console.log(data.info.messages)
      }else{
        let fuel = 0
        if(this.state.mileage)
        {
          fuel = Math.ceil((Math.ceil(data.distance[1]*1.60934)*2)/this.state.mileage);
        }
          
        this.setState(
              { 
                  from:{city:data.locations[0].adminArea5,state:data.locations[0].adminArea3},
                  to:{city:data.locations[1].adminArea5,state:data.locations[1].adminArea3},
                  distance: Math.ceil(data.distance[1]*1.60934),
                  time: this.secondsToHms(data.time[1]),
                  fuel: fuel,
                  price:{
                    fuel:fuel*this.fuelPrice,
                    food:this.state.food.price*this.state.food.day*3,
                    stay:this.state.stay.price*this.state.stay.day
                  }
                })
          
        if(!this.state.to.city)
        {
          this.setState(
            {
              to:{
                city:this.state.to.state,
                state:this.state.to.state}}
            )
        }
        if(!this.state.to.state)
        {
          this.setState(
            {
              to:{  
                city:this.state.to.city,
                state:this.state.to.city}}
            )
        }

          this.newEstimation(this.state.fuel * this.fuelPrice)
      }
        })
      
};

reset = () =>
{
  this.setState({
    from:{city:"",state:""},
    to:{city:"",state:""},
    price:{fuel:0,food:0,stay:0},
    stay:{day:null,price:null},
    food:{day:null,price:null},
    distance:0,
    time:0,
    fuel:0,
    mileage:null
  })
}


handleChange = (e) => {
  e.preventDefault();
  if(e.target.id === "from")
  {
    this.setState({from:{city:e.target.value,state:""}})
  }
  if(e.target.id === "to")
  {
    this.setState({to:{city:e.target.value,state:""}})
  }
  if(e.target.id === "mileage")
  {
    this.setState({mileage:e.target.value})
  }
  if(e.target.id === "food-day")
  {
    this.setState({food:{day:e.target.value,price:this.state.food.price}})
  }
  if(e.target.id === "food-price")
  {
    this.setState({food:{day:this.state.food.day,price:e.target.value}})
  }
  if(e.target.id === "stay-day")
  {
    this.setState({stay:{day:e.target.value,price:this.state.stay.price}})
  }
  if(e.target.id === "stay-price")
  {
    this.setState({stay:{day:this.state.stay.day,price:e.target.value}})
  }
  
  if(e.target.id === "mileage")
  {
    this.setState({mileage:e.target.value})
  }
  console.log(e.target.id,e.target.value)
}
  render(){
if(!this.state.distance)
{
    return (
      <Form 
        from = {this.state.from}
        to = {this.state.to}
        mileage = {this.state.mileage}
        food = {this.state.food}
        stay = {this.state.stay}
        handleChange = {this.handleChange}
        calculate = {this.calculate}
        ></Form>  
    );
}else{
  return(
    <Dashboard
      from = {this.state.from}
      to = {this.state.to}
      food = {this.state.food}
      stay = {this.state.stay}  
      mileage = {this.state.mileage}
      distance = {this.state.distance}
      time = {this.state.time}
      fuel = {this.state.fuel}
      price = {this.state.price}
      reset = {this.reset}
      fuelPrice = {this.fuelPrice}>
    </Dashboard>
    );
  }
}
}

export default TripFund;