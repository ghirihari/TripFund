import React, { Component } from 'react';
import './App.css'

class App extends Component {

  constructor()
  {
    super();
    this.state = {
      from:{city:"Coimbatore",state:""},
      to:{city:"Chennai",state:""},
      price:{fuel:0,food:0,stay:0},
      stay:{day:null,price:null},
      food:{day:null,price:null},
      distance:null,
      time:null,
      fuel:null,
      mileage:null
    }
    this.fuelPrice = 72;
  }

  secondsToHms = (d) => {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);

    var hDisplay = h > 0 ? h + (h === 1 ? "h " : "h ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " m, " : " m") : "";
    return hDisplay + mDisplay; 

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
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          "locations": [this.state.from.city,this.state.to.city]
        })
    };
    fetch('http://www.mapquestapi.com/directions/v2/routematrix?key=NWocdztSYHRGGxghPivCkuoeYaVvMQx1', requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(this.state.food.price,this.state.food.day)

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
        this.newEstimation(this.state.fuel*72)
      })
};

reset = () =>
{
  this.setState({
    from:{city:"Coimbatore",state:""},
    to:{city:"Chennai",state:""},
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
    <div className="containe">
      <div className="center">
      <h1>- TRIP X FUND -</h1>
        <div className="form-group"> 
          {/* <label>From</label> */}
          <input id="from" type="text" className="form-control" placeholder="From" value={this.state.from.city} onChange={this.handleChange}></input>
        </div>
        <div className="form-group">
          {/* <label>To</label> */}
          <input id="to" type="text" className="form-control" placeholder="To" value={this.state.to.city} onChange={this.handleChange}></input>
        </div>
     
        <div className="form-group"> 
          {/* <label>Mileage</label> */}
          <input id="mileage" type="number" className="form-control" placeholder="Mileage" value={this.state.mileage} onChange={this.handleChange}></input>
        </div>
       
        <div className="form-group"> 
          <label>Food</label>
          <div class="form-row">
            <div class="col">
              <input id="food-day" type="number" class="form-control" placeholder="Number Of Days" value={this.state.food.day} onChange={this.handleChange}></input>
            </div>
            <div class="col">
              <input id="food-price" type="number" class="form-control" placeholder="Budget Per Meal" value={this.state.food.price} onChange={this.handleChange}></input>
            </div>
          </div>
        </div>

        <div className="form-group"> 
          <label>Stay</label>
          <div class="form-row">
            <div class="col">
              <input id="stay-day" type="number" class="form-control" placeholder="Number Of Days" value={this.state.stay.day} onChange={this.handleChange}></input>
            </div>
            <div class="col">
              <input id="stay-price" type="number" class="form-control" placeholder="Budget Per Day" value={this.state.stay.price} onChange={this.handleChange}></input>
            </div>
          </div>
        </div>
        
        <div className="form-group" style={{textAlign:'center'}}> 
          <button onClick={this.calculate} type="submit" className="btn btn-danger">Submit</button>
        </div>
      </div>
      </div>
);
}else{
  return(
  <div className="containe">
    <div className="center">
      <h1>- TRIP X FUND -</h1>
 
    <table className="table">
      <tbody>
        <tr>
          <td>From</td>
          <td>{this.state.from.city},{this.state.from.state}</td>
        </tr>
        <tr>
          <td>To</td>
          <td>{this.state.to.city},{this.state.to.state}</td>
        </tr>
        <tr>
          <td>Distance</td>
          <td>{this.state.distance} Kms</td>
        </tr>
        <tr>
          <td>Ride Time</td>
          <td>{this.state.time}</td>
        </tr>
        <tr>
          <td>Fuel (Mileage {this.state.mileage})</td>
          <td>{this.state.fuel} Litres</td>
        </tr>
        <tr>
          <td>Fuel Price</td>
          <td>{this.state.price.fuel} Rs</td>
        </tr>
        <tr>
          <td>Stay Price</td>
          <td>{this.state.price.stay} Rs</td>
        </tr>
        <tr>
          <td>Food Price</td>
          <td>{this.state.price.food} Rs</td>
        </tr>
        <tr>
          <td>Grand Total</td>
          <td>{this.state.price.fuel+this.state.price.food+this.state.price.stay} Rs</td>
        </tr>
      </tbody>
    </table>
    <div className="form-group" style={{textAlign:'center'}}> 
          <button onClick={this.reset} type="submit" className="btn btn-danger">Reset</button>
        </div>
    </div>
</div>
    );
  }
}
}

export default App;
