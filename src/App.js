import React, { Component } from 'react';
import './App.css'

class App extends Component {

  constructor()
  {
    super();
    this.state = {
      from:{city:"Coimbatore",state:""},
      to:{city:"Goa",state:""},
      price:{fuel:null,food:null,stay:null},
      stay:{day:6,price:800},
      food:{day:7,price:150},
      distance:null,
      time:null,
      fuel:null,
      mileage:40
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
        this.newEstimation(this.state.fuel * this.fuelPrice)
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
    <>
  <div className="containe d-none d-lg-block">
    <div className="center">
      <h1>- TRIP X FUND -</h1>
      <div class="row dashboard">
        <div className="col">
          <div class="card text-white bg-dark mb-3" >
            <div class="card-header">From</div>
            <div class="card-body">
                <h5 class="card-title">{this.state.from.city}</h5>
                <p class="card-text">{this.state.from.state.toLowerCase()}</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card text-white bg-dark mb-3" >
            <div class="card-header">To</div>
            <div class="card-body">
                <h5 class="card-title">{this.state.to.city}</h5>
                <p class="card-text">{this.state.to.state.toLowerCase()}</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card text-white bg-dark mb-3" >
            <div class="card-header">Duration</div>
            <div class="card-body">
                <h5 class="card-title">{this.state.food.day} Days</h5>
                <p class="card-text">{this.state.stay.day} Nights</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div class="card text-white bg-dark mb-3" >
            <div class="card-header">Mileage</div>
            <div class="card-body">
                <h5 class="card-title">{this.state.mileage} Km/L</h5>
                <p class="card-text">Average</p>
            </div>
          </div>
        </div>
        </div>


        <div class="row dashboard">
        <div className="col">
          <div class="card text-white bg-danger mb-3" >
            <div class="card-header">Distance</div>
            <div class="card-body">
                <h5 class="card-title">{this.state.distance} Kms</h5>
                <p class="card-text">One Way</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div class="card text-white bg-danger mb-3" >
            <div class="card-header">Ride Time</div>
            <div class="card-body">
                <h5 class="card-title">{this.state.time}</h5>
                <p class="card-text">Approx</p>
            </div>
          </div>
        </div>
        
        <div className="col">
          <div class="card text-white bg-danger mb-3" >
            <div class="card-header">Fuel Needed</div>
            <div class="card-body">
                <h5 class="card-title">{this.state.fuel} Liters</h5>
                <p class="card-text">One Way : {this.state.fuel/2} Liters</p>
            </div>
          </div>
        </div>
        </div>
        <div className="row dashboard">
        <div className="col">
          <div class="card text-white bg-danger mb-3" >
            <div class="card-header">Price For Fuel</div>
            <div class="card-body">
                <h5 class="card-title">{this.state.price.fuel} Rs</h5>
                <p class="card-text">Price : {this.fuelPrice} /Liter</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card text-white bg-danger mb-3" >
            <div class="card-header">Price For Stay</div>
            <div class="card-body">
                <h5 class="card-title">{this.state.price.stay} Rs</h5>
                <p class="card-text">Stay : {this.state.stay.price} per day</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card text-white bg-danger mb-3" >
            <div class="card-header">Price For Food</div>
            <div class="card-body">
                <h5 class="card-title">{this.state.price.food} Rs</h5>
                <p class="card-text">Stay : {this.state.food.price} per day</p>
            </div>
          </div>
        </div>

        
        </div>
        <div className='row dashboard'>
                  
        <div className="col">
          <div class="card text-white bg-danger mb-3" >
            <div class="card-header">Grand Total</div>
            <div class="card-body">
                <h5 class="card-title" >{this.state.price.fuel+this.state.price.food+this.state.price.stay} Rs</h5>
                <p class="card-text">Approx</p>
            </div>
          </div>
        </div>
     </div>
     
     <div className="form-group" style={{textAlign:'center'}}> 
          <button onClick={this.reset} type="submit" className="btn btn-danger">Reset</button>
        </div>
    </div>
</div>

{/* Mobile */}
<div className="containe d-lg-none">
<div className="center">
  <h1>- TRIP X FUND -</h1>
  <div className="dashboard">
    <div className="col">
      <div class="card text-white bg-dark mb-3" >
        <div class="card-header">From</div>
        <div class="card-body">
            <h5 class="card-title">{this.state.from.city}</h5>
            <p class="card-text">{this.state.from.state.toLowerCase()}</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div class="card text-white bg-dark mb-3" >
        <div class="card-header">To</div>
        <div class="card-body">
            <h5 class="card-title">{this.state.to.city}</h5>
            <p class="card-text">{this.state.to.state.toLowerCase()}</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div class="card text-white bg-dark mb-3" >
        <div class="card-header">Duration</div>
        <div class="card-body">
            <h5 class="card-title">{this.state.food.day} Days</h5>
            <p class="card-text">{this.state.stay.day} Nights</p>
        </div>
      </div>
    </div>

    <div className="col">
      <div class="card text-white bg-dark mb-3" >
        <div class="card-header">Mileage</div>
        <div class="card-body">
            <h5 class="card-title">{this.state.mileage} Km/L</h5>
            <p class="card-text">Average</p>
        </div>
      </div>
    </div>


    <div className="col">
      <div class="card text-white bg-danger mb-3" >
        <div class="card-header">Distance</div>
        <div class="card-body">
            <h5 class="card-title">{this.state.distance} Kms</h5>
            <p class="card-text">One Way</p>
        </div>
      </div>
    </div>

    <div className="col">
      <div class="card text-white bg-danger mb-3" >
        <div class="card-header">Ride Time</div>
        <div class="card-body">
            <h5 class="card-title">{this.state.time}</h5>
            <p class="card-text">Approx</p>
        </div>
      </div>
    </div>
    
    <div className="col">
      <div class="card text-white bg-danger mb-3" >
        <div class="card-header">Fuel Needed</div>
        <div class="card-body">
            <h5 class="card-title">{this.state.fuel} Liters</h5>
            <p class="card-text">One Way : {this.state.fuel/2} Liters</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div class="card text-white bg-danger mb-3" >
        <div class="card-header">Price For Fuel</div>
        <div class="card-body">
            <h5 class="card-title">{this.state.price.fuel} Rs</h5>
            <p class="card-text">Price : {this.fuelPrice} /Liter</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div class="card text-white bg-danger mb-3" >
        <div class="card-header">Price For Stay</div>
        <div class="card-body">
            <h5 class="card-title">{this.state.price.stay} Rs</h5>
            <p class="card-text">Stay : {this.state.stay.price} per day</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div class="card text-white bg-danger mb-3" >
        <div class="card-header">Price For Food</div>
        <div class="card-body">
            <h5 class="card-title">{this.state.price.food} Rs</h5>
            <p class="card-text">Stay : {this.state.food.price} per day</p>
        </div>
    </div>

    
    </div>
              
    <div className="col">
      <div class="card text-white bg-danger mb-3" >
        <div class="card-header">Grand Total</div>
        <div class="card-body">
            <h5 class="card-title" >{(this.state.price.fuel)+this.state.price.food+this.state.price.stay} Rs</h5>
            <p class="card-text">Approx</p>
        </div>
      </div>
    </div>

    
    <div className="form-group" style={{textAlign:'center'}}> 
      <button onClick={this.reset} type="submit" className="btn btn-danger">Reset</button>
    </div>

    
</div>
</div>
</div>
</>
    );
  }
}
}

export default App;
