(this.webpackJsonptrip=this.webpackJsonptrip||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var c=t(0),s=t.n(c),r=t(6),l=t.n(r),i=(t(12),t(1)),n=t(2),d=t(4),o=t(3),m=(t(13),function(e){Object(d.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"containe"},s.a.createElement("div",{className:"center"},s.a.createElement("h1",null,"- TRIP X FUND -"),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{id:"from",type:"text",className:"form-control",placeholder:"From",value:this.props.from.city,onChange:this.props.handleChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{id:"to",type:"text",className:"form-control",placeholder:"To",value:this.props.to.city,onChange:this.props.handleChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{id:"mileage",type:"number",className:"form-control",placeholder:"Mileage",value:this.props.mileage,onChange:this.props.handleChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Food"),s.a.createElement("div",{class:"form-row"},s.a.createElement("div",{class:"col"},s.a.createElement("input",{id:"food-day",type:"number",class:"form-control",placeholder:"Number Of Days",value:this.props.food.day,onChange:this.props.handleChange})),s.a.createElement("div",{class:"col"},s.a.createElement("input",{id:"food-price",type:"number",class:"form-control",placeholder:"Budget Per Meal",value:this.props.food.price,onChange:this.props.handleChange})))),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Stay"),s.a.createElement("div",{class:"form-row"},s.a.createElement("div",{class:"col"},s.a.createElement("input",{id:"stay-day",type:"number",class:"form-control",placeholder:"Number Of Days",value:this.props.stay.day,onChange:this.props.handleChange})),s.a.createElement("div",{class:"col"},s.a.createElement("input",{id:"stay-price",type:"number",class:"form-control",placeholder:"Budget Per Day",value:this.props.stay.price,onChange:this.props.handleChange})))),s.a.createElement("div",{className:"form-group",style:{textAlign:"center"}},s.a.createElement("button",{onClick:this.props.calculate,type:"submit",className:"btn btn-danger"},"Submit"))))}}]),t}(c.Component)),p=function(e){Object(d.a)(t,e);var a=Object(o.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"containe d-none d-lg-block"},s.a.createElement("div",{className:"center"},s.a.createElement("h1",null,"- TRIP X FUND -"),s.a.createElement("div",{class:"row dashboard"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-dark mb-3"},s.a.createElement("div",{class:"card-header"},"From"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.from.city),s.a.createElement("p",{class:"card-text"},this.props.from.state)))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-dark mb-3"},s.a.createElement("div",{class:"card-header"},"To"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.to.city),s.a.createElement("p",{class:"card-text"},this.props.to.state)))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-dark mb-3"},s.a.createElement("div",{class:"card-header"},"Duration"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.food.day," Days"),s.a.createElement("p",{class:"card-text"},this.props.stay.day," Nights")))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-dark mb-3"},s.a.createElement("div",{class:"card-header"},"Mileage"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.mileage," Km/L"),s.a.createElement("p",{class:"card-text"},"Average"))))),s.a.createElement("div",{class:"row dashboard"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-danger mb-3"},s.a.createElement("div",{class:"card-header"},"Distance"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.distance," Kms"),s.a.createElement("p",{class:"card-text"},"One Way")))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-danger mb-3"},s.a.createElement("div",{class:"card-header"},"Ride Time"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.time),s.a.createElement("p",{class:"card-text"},"Approx")))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-danger mb-3"},s.a.createElement("div",{class:"card-header"},"Fuel Needed"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.fuel," Liters"),s.a.createElement("p",{class:"card-text"},"One Way : ",this.props.fuel/2," Liters"))))),s.a.createElement("div",{className:"row dashboard"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-danger mb-3"},s.a.createElement("div",{class:"card-header"},"Price For Fuel"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.price.fuel," Rs"),s.a.createElement("p",{class:"card-text"},"Price : ",this.fuelPrice," /Liter")))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-danger mb-3"},s.a.createElement("div",{class:"card-header"},"Price For Stay"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.price.stay," Rs"),s.a.createElement("p",{class:"card-text"},"Stay : ",this.props.stay.price," per day")))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-danger mb-3"},s.a.createElement("div",{class:"card-header"},"Price For Food"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.price.food," Rs"),s.a.createElement("p",{class:"card-text"},"Stay : ",this.props.food.price," per day"))))),s.a.createElement("div",{className:"row dashboard"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-danger mb-3"},s.a.createElement("div",{class:"card-header"},"Grand Total"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.price.fuel+this.props.price.food+this.props.price.stay," Rs"),s.a.createElement("p",{class:"card-text"},"Approx"))))),s.a.createElement("div",{className:"form-group",style:{textAlign:"center"}},s.a.createElement("button",{onClick:this.props.reset,type:"submit",className:"btn btn-danger"},"Reset")))),s.a.createElement("div",{className:"containe d-lg-none"},s.a.createElement("div",{className:"center"},s.a.createElement("h1",null,"- TRIP X FUND -"),s.a.createElement("div",{className:"dashboard"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-dark mb-3"},s.a.createElement("div",{class:"card-header"},"From"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.from.city),s.a.createElement("p",{class:"card-text"},this.props.from.state)))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-dark mb-3"},s.a.createElement("div",{class:"card-header"},"To"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.to.city),s.a.createElement("p",{class:"card-text"},this.props.to.state)))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-dark mb-3"},s.a.createElement("div",{class:"card-header"},"Duration"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.food.day," Days"),s.a.createElement("p",{class:"card-text"},this.props.stay.day," Nights")))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-dark mb-3"},s.a.createElement("div",{class:"card-header"},"Mileage"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.mileage," Km/L"),s.a.createElement("p",{class:"card-text"},"Average")))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-danger mb-3"},s.a.createElement("div",{class:"card-header"},"Distance"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.distance," Kms"),s.a.createElement("p",{class:"card-text"},"One Way")))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-danger mb-3"},s.a.createElement("div",{class:"card-header"},"Ride Time"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.time),s.a.createElement("p",{class:"card-text"},"Approx")))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-danger mb-3"},s.a.createElement("div",{class:"card-header"},"Fuel Needed"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.fuel," Liters"),s.a.createElement("p",{class:"card-text"},"One Way : ",this.props.fuel/2," Liters")))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-danger mb-3"},s.a.createElement("div",{class:"card-header"},"Price For Fuel"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.price.fuel," Rs"),s.a.createElement("p",{class:"card-text"},"Price : ",this.fuelPrice," /Liter")))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-danger mb-3"},s.a.createElement("div",{class:"card-header"},"Price For Stay"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.price.stay," Rs"),s.a.createElement("p",{class:"card-text"},"Stay : ",this.props.stay.price," per day")))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-danger mb-3"},s.a.createElement("div",{class:"card-header"},"Price For Food"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.price.food," Rs"),s.a.createElement("p",{class:"card-text"},"Stay : ",this.props.food.price," per day")))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{class:"card text-white bg-danger mb-3"},s.a.createElement("div",{class:"card-header"},"Grand Total"),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.props.price.fuel+this.props.price.food+this.props.price.stay," Rs"),s.a.createElement("p",{class:"card-text"},"Approx")))),s.a.createElement("div",{className:"form-group",style:{textAlign:"center"}},s.a.createElement("button",{onClick:this.props.reset,type:"submit",className:"btn btn-danger"},"Reset"))))))}}]),t}(c.Component),h=function(e){Object(d.a)(t,e);var a=Object(o.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).secondsToHms=function(e){e=Number(e);var a=Math.floor(e/3600);return Math.floor(e%3600/60)>=30&&(a+=1),a>0?a+(1===a?" hour ":" hours "):""},e.newEstimation=function(a){var t=a.toString(),c=t.length,s=(parseInt(t[0])+1)*Math.pow(10,c-1);e.setState({total:s})},e.calculate=function(){console.log("Calculating");var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({locations:[e.state.from.city,e.state.to.city]})};fetch("https://www.mapquestapi.com/directions/v2/routematrix?key=NWocdztSYHRGGxghPivCkuoeYaVvMQx1",a).then((function(e){return e.json()})).then((function(a){var t=0;e.state.mileage&&(t=Math.ceil(2*Math.ceil(1.60934*a.distance[1])/e.state.mileage)),e.setState({from:{city:a.locations[0].adminArea5,state:a.locations[0].adminArea3},to:{city:a.locations[1].adminArea5,state:a.locations[1].adminArea3},distance:Math.ceil(1.60934*a.distance[1]),time:e.secondsToHms(a.time[1]),fuel:t,price:{fuel:t*e.fuelPrice,food:e.state.food.price*e.state.food.day*3,stay:e.state.stay.price*e.state.stay.day}}),e.state.to.city||e.setState({to:{city:e.state.to.state,state:e.state.to.state}}),e.state.to.state||e.setState({to:{city:e.state.to.city,state:e.state.to.city}}),e.newEstimation(e.state.fuel*e.fuelPrice)}))},e.reset=function(){e.setState({from:{city:"",state:""},to:{city:"",state:""},price:{fuel:0,food:0,stay:0},stay:{day:null,price:null},food:{day:null,price:null},distance:0,time:0,fuel:0,mileage:null})},e.handleChange=function(a){a.preventDefault(),"from"===a.target.id&&e.setState({from:{city:a.target.value,state:""}}),"to"===a.target.id&&e.setState({to:{city:a.target.value,state:""}}),"mileage"===a.target.id&&e.setState({mileage:a.target.value}),"food-day"===a.target.id&&e.setState({food:{day:a.target.value,price:e.state.food.price}}),"food-price"===a.target.id&&e.setState({food:{day:e.state.food.day,price:a.target.value}}),"stay-day"===a.target.id&&e.setState({stay:{day:a.target.value,price:e.state.stay.price}}),"stay-price"===a.target.id&&e.setState({stay:{day:e.state.stay.day,price:a.target.value}}),"mileage"===a.target.id&&e.setState({mileage:a.target.value}),console.log(a.target.id,a.target.value)},e.state={from:{city:"",state:""},to:{city:"",state:""},price:{fuel:null,food:null,stay:null},stay:{day:null,price:null},food:{day:null,price:null},distance:null,time:null,fuel:null,mileage:null},e.fuelPrice=84,e}return Object(n.a)(t,[{key:"render",value:function(){return this.state.distance?s.a.createElement(p,{from:this.state.from,to:this.state.to,food:this.state.food,stay:this.state.stay,mileage:this.state.mileage,distance:this.state.distance,time:this.state.time,fuel:this.state.fuel,price:this.state.price,reset:this.reset}):s.a.createElement(m,{from:this.state.from,to:this.state.to,mileage:this.state.mileage,food:this.state.food,stay:this.state.stay,handleChange:this.handleChange,calculate:this.calculate})}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.854ff690.chunk.js.map