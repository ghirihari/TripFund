import React, { Component } from 'react';

export default class Form extends Component {

  constructor(){
    super();
    
  }


render(){
    return(
      <div className="containe">
      <div className="center">
      <h1>- TRIP X FUND -</h1>
        <div className="form-group place"> 
          {/* <label>From</label> */}
          <input id="from" type="text" className="form-control" placeholder="From" value={this.props.from.city} onChange={this.props.handleChange}></input>
          {this.props.from.valid===false && 
            <label class="exception" style={{margin:'0.5rem'}}>Place Not Found</label>
          }
        </div>
        <div className="form-group place">
          {/* <label>To</label> */}
          <input id="to" type="text" className="form-control" placeholder="To" value={this.props.to.city} onChange={this.props.handleChange}></input>
          {this.props.to.valid===false && 
            <label class="exception" style={{margin:'0.5rem'}}>Place Not Found</label>
          }
        </div>
     
        <div className="form-group"> 
          {/* <label>Mileage</label> */}
          <input id="mileage" type="number" className="form-control" placeholder="Mileage" value={this.props.mileage} onChange={this.props.handleChange}></input>
        </div>
       
        <div className="form-group"> 
          <label>Food</label>
          <div class="form-row">
            <div class="col">
              <input id="food-day" type="number" class="form-control" placeholder="Number Of Days" value={this.props.food.day} onChange={this.props.handleChange}></input>
            </div>
            <div class="col">
              <input id="food-price" type="number" class="form-control" placeholder="Budget Per Meal" value={this.props.food.price} onChange={this.props.handleChange}></input>
            </div>
          </div>
        </div>

        <div className="form-group"> 
          <label>Stay</label>
          <div class="form-row">
            <div class="col">
              <input id="stay-day" type="number" class="form-control" placeholder="Number Of Days" value={this.props.stay.day} onChange={this.props.handleChange}></input>
            </div>
            <div class="col">
              <input id="stay-price" type="number" class="form-control" placeholder="Budget Per Day" value={this.props.stay.price} onChange={this.props.handleChange}></input>
            </div>
          </div>
        </div>
        
        <div className="form-group" style={{textAlign:'center'}}> 
          <button onClick={this.props.calculate} type="submit" className="btn btn-danger" >Submit</button>
        </div>
      </div>
      </div>
    )
}
}