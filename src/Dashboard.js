import React, { Component } from 'react';

export default class Dashboard extends Component {

    render(){
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
                        <h5 class="card-title">{this.props.from.city}</h5>
                        <p class="card-text">{this.props.from.state}</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card text-white bg-dark mb-3" >
                    <div class="card-header">To</div>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.to.city}</h5>
                        <p class="card-text">{this.props.to.state}</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card text-white bg-dark mb-3" >
                    <div class="card-header">Duration</div>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.food.day} Days</h5>
                        <p class="card-text">{this.props.stay.day} Nights</p>
                    </div>
                    </div>
                </div>
        
                <div className="col">
                    <div class="card text-white bg-dark mb-3" >
                    <div class="card-header">Mileage</div>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.mileage} Km/L</h5>
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
                        <h5 class="card-title">{this.props.distance} Kms</h5>
                        <p class="card-text">One Way</p>
                    </div>
                    </div>
                </div>
        
                <div className="col">
                    <div class="card text-white bg-danger mb-3" >
                    <div class="card-header">Ride Time</div>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.time}</h5>
                        <p class="card-text">Approx</p>
                    </div>
                    </div>
                </div>
                
                <div className="col">
                    <div class="card text-white bg-danger mb-3" >
                    <div class="card-header">Fuel Needed</div>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.fuel} Liters</h5>
                        <p class="card-text">One Way : {this.props.fuel/2} Liters</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row dashboard">
                <div className="col">
                    <div class="card text-white bg-danger mb-3" >
                    <div class="card-header">Price For Fuel</div>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.price.fuel} Rs</h5>
                        <p class="card-text">Price : {this.fuelPrice} /Liter</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card text-white bg-danger mb-3" >
                    <div class="card-header">Price For Stay</div>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.price.stay} Rs</h5>
                        <p class="card-text">Stay : {this.props.stay.price} per day</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card text-white bg-danger mb-3" >
                    <div class="card-header">Price For Food</div>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.price.food} Rs</h5>
                        <p class="card-text">Stay : {this.props.food.price} per day</p>
                    </div>
                    </div>
                </div>
        
                
                </div>
                <div className='row dashboard'>
                            
                <div className="col">
                    <div class="card text-white bg-danger mb-3" >
                    <div class="card-header">Grand Total</div>
                    <div class="card-body">
                        <h5 class="card-title" >{this.props.price.fuel+this.props.price.food+this.props.price.stay} Rs</h5>
                        <p class="card-text">Approx</p>
                    </div>
                    </div>
                </div>
            </div>
            
            <div className="form-group" style={{textAlign:'center'}}> 
                    <button onClick={this.props.reset} type="submit" className="btn btn-danger">Reset</button>
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
                    <h5 class="card-title">{this.props.from.city}</h5>
                    <p class="card-text">{this.props.from.state}</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div class="card text-white bg-dark mb-3" >
                <div class="card-header">To</div>
                <div class="card-body">
                    <h5 class="card-title">{this.props.to.city}</h5>
                    <p class="card-text">{this.props.to.state}</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div class="card text-white bg-dark mb-3" >
                <div class="card-header">Duration</div>
                <div class="card-body">
                    <h5 class="card-title">{this.props.food.day} Days</h5>
                    <p class="card-text">{this.props.stay.day} Nights</p>
                </div>
                </div>
            </div>
        
            <div className="col">
                <div class="card text-white bg-dark mb-3" >
                <div class="card-header">Mileage</div>
                <div class="card-body">
                    <h5 class="card-title">{this.props.mileage} Km/L</h5>
                    <p class="card-text">Average</p>
                </div>
                </div>
            </div>
        
        
            <div className="col">
                <div class="card text-white bg-danger mb-3" >
                <div class="card-header">Distance</div>
                <div class="card-body">
                    <h5 class="card-title">{this.props.distance} Kms</h5>
                    <p class="card-text">One Way</p>
                </div>
                </div>
            </div>
        
            <div className="col">
                <div class="card text-white bg-danger mb-3" >
                <div class="card-header">Ride Time</div>
                <div class="card-body">
                    <h5 class="card-title">{this.props.time}</h5>
                    <p class="card-text">Approx</p>
                </div>
                </div>
            </div>
            
            <div className="col">
                <div class="card text-white bg-danger mb-3" >
                <div class="card-header">Fuel Needed</div>
                <div class="card-body">
                    <h5 class="card-title">{this.props.fuel} Liters</h5>
                    <p class="card-text">One Way : {this.props.fuel/2} Liters</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div class="card text-white bg-danger mb-3" >
                <div class="card-header">Price For Fuel</div>
                <div class="card-body">
                    <h5 class="card-title">{this.props.price.fuel} Rs</h5>
                    <p class="card-text">Price : {this.fuelPrice} /Liter</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div class="card text-white bg-danger mb-3" >
                <div class="card-header">Price For Stay</div>
                <div class="card-body">
                    <h5 class="card-title">{this.props.price.stay} Rs</h5>
                    <p class="card-text">Stay : {this.props.stay.price} per day</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div class="card text-white bg-danger mb-3" >
                <div class="card-header">Price For Food</div>
                <div class="card-body">
                    <h5 class="card-title">{this.props.price.food} Rs</h5>
                    <p class="card-text">Stay : {this.props.food.price} per day</p>
                </div>
            </div>
        
            
            </div>
                        
            <div className="col">
                <div class="card text-white bg-danger mb-3" >
                <div class="card-header">Grand Total</div>
                <div class="card-body">
                    <h5 class="card-title" >{(this.props.price.fuel)+this.props.price.food+this.props.price.stay} Rs</h5>
                    <p class="card-text">Approx</p>
                </div>
                </div>
            </div>
        
            
            <div className="form-group" style={{textAlign:'center'}}> 
                <button onClick={this.props.reset} type="submit" className="btn btn-danger">Reset</button>
            </div>
        
            
        </div>
        </div>
        </div>
        </>
        
        )
    }
}