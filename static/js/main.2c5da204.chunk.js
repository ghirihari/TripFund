(this.webpackJsonptrip=this.webpackJsonptrip||[]).push([[0],{18:function(e,t,a){e.exports=a(32)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),s=a(15),l=a.n(s),n=(a(23),a(3)),i=a(4),o=a(5),d=a(6),m=a(17),p=a(1),h=(a(24),function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"containe"},c.a.createElement("div",{className:"center"},c.a.createElement("h1",null,"- TRIP X FUND -"),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{id:"from",type:"text",className:"form-control",placeholder:"From",value:this.props.from.city,onChange:this.props.handleChange})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{id:"to",type:"text",className:"form-control",placeholder:"To",value:this.props.to.city,onChange:this.props.handleChange})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{id:"mileage",type:"number",className:"form-control",placeholder:"Mileage",value:this.props.mileage,onChange:this.props.handleChange})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Food"),c.a.createElement("div",{class:"form-row"},c.a.createElement("div",{class:"col"},c.a.createElement("input",{id:"food-day",type:"number",class:"form-control",placeholder:"Number Of Days",value:this.props.food.day,onChange:this.props.handleChange})),c.a.createElement("div",{class:"col"},c.a.createElement("input",{id:"food-price",type:"number",class:"form-control",placeholder:"Budget Per Meal",value:this.props.food.price,onChange:this.props.handleChange})))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Stay"),c.a.createElement("div",{class:"form-row"},c.a.createElement("div",{class:"col"},c.a.createElement("input",{id:"stay-day",type:"number",class:"form-control",placeholder:"Number Of Days",value:this.props.stay.day,onChange:this.props.handleChange})),c.a.createElement("div",{class:"col"},c.a.createElement("input",{id:"stay-price",type:"number",class:"form-control",placeholder:"Budget Per Day",value:this.props.stay.price,onChange:this.props.handleChange})))),c.a.createElement("div",{className:"form-group",style:{textAlign:"center"}},c.a.createElement("button",{onClick:this.props.calculate,type:"submit",className:"btn btn-danger"},"Submit"))))}}]),a}(r.Component)),u=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).copy=function(){r.report="From: "+r.props.from.city+","+r.props.from.state+"\nTo: "+r.props.to.city+","+r.props.to.state+"\nDuration: "+r.props.food.day+" Days,"+r.props.stay.day+" Nights\nMileage: "+r.props.mileage+" Km/L\nRiding Time: "+r.props.time+"\nFuel Needed: "+r.props.fuel+" L\n*Budget*\nFuel ("+r.props.fuelPrice+"*"+r.props.fuel+"): "+r.props.price.fuel+" Rs\nStay ("+r.props.stay.price+"*"+r.props.stay.day+"): "+r.props.price.stay+" Rs\nFood ("+r.props.food.price+"* 3("+r.props.food.day+")): "+r.props.price.food+" Rs\nTotal: "+r.Total+"Rs \n",navigator.clipboard.writeText(r.report),r.setState({status:"Copied"})},r.state={status:"Copy"},r.props.price&&(r.Total=r.props.price.stay+r.props.price.stay+r.props.price.fuel),r}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"containe d-none d-lg-block"},c.a.createElement("div",{className:"center"},c.a.createElement("h1",null,"- TRIP X FUND -"),c.a.createElement("div",{class:"row dashboard"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-dark mb-3"},c.a.createElement("div",{class:"card-header"},"From"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.from.city),c.a.createElement("p",{class:"card-text"},this.props.from.state)))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-dark mb-3"},c.a.createElement("div",{class:"card-header"},"To"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.to.city),c.a.createElement("p",{class:"card-text"},this.props.to.state)))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-dark mb-3"},c.a.createElement("div",{class:"card-header"},"Duration"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.food.day," Days"),c.a.createElement("p",{class:"card-text"},this.props.stay.day," Nights")))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-dark mb-3"},c.a.createElement("div",{class:"card-header"},"Mileage"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.mileage," Km/L"),c.a.createElement("p",{class:"card-text"},"Average"))))),c.a.createElement("div",{class:"row dashboard"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-danger mb-3"},c.a.createElement("div",{class:"card-header"},"Distance"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.distance," Kms"),c.a.createElement("p",{class:"card-text"},"One Way")))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-danger mb-3"},c.a.createElement("div",{class:"card-header"},"Ride Time"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.time),c.a.createElement("p",{class:"card-text"},"Approx")))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-danger mb-3"},c.a.createElement("div",{class:"card-header"},"Fuel Needed"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.fuel," Liters"),c.a.createElement("p",{class:"card-text"},"One Way : ",this.props.fuel/2," Liters"))))),c.a.createElement("div",{className:"row dashboard"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-danger mb-3"},c.a.createElement("div",{class:"card-header"},"Price For Fuel"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.price.fuel," Rs"),c.a.createElement("p",{class:"card-text"},"Price : ",this.fuelPrice," /Liter")))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-danger mb-3"},c.a.createElement("div",{class:"card-header"},"Price For Stay"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.price.stay," Rs"),c.a.createElement("p",{class:"card-text"},"Stay : ",this.props.stay.price," per day")))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-danger mb-3"},c.a.createElement("div",{class:"card-header"},"Price For Food"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.price.food," Rs"),c.a.createElement("p",{class:"card-text"},"Stay : ",this.props.food.price," per day"))))),c.a.createElement("div",{className:"row dashboard"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-danger mb-3"},c.a.createElement("div",{class:"card-header"},"Grand Total"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.price.fuel+this.props.price.food+this.props.price.stay," Rs"),c.a.createElement("p",{class:"card-text"},"Approx"))))),c.a.createElement("div",{className:"form-group",style:{textAlign:"center"}},c.a.createElement("button",{onClick:this.copy,className:"btn btn-warning btn-lg"},this.state.status),c.a.createElement("button",{onClick:this.props.reset,className:"btn btn-danger btn-lg"},"Reset")))),c.a.createElement("div",{className:"containe d-lg-none"},c.a.createElement("div",{className:"center"},c.a.createElement("h1",null,"- TRIP X FUND -"),c.a.createElement("div",{className:"dashboard"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-dark mb-3"},c.a.createElement("div",{class:"card-header"},"From"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.from.city),c.a.createElement("p",{class:"card-text"},this.props.from.state)))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-dark mb-3"},c.a.createElement("div",{class:"card-header"},"To"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.to.city),c.a.createElement("p",{class:"card-text"},this.props.to.state)))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-dark mb-3"},c.a.createElement("div",{class:"card-header"},"Duration"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.food.day," Days"),c.a.createElement("p",{class:"card-text"},this.props.stay.day," Nights")))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-dark mb-3"},c.a.createElement("div",{class:"card-header"},"Mileage"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.mileage," Km/L"),c.a.createElement("p",{class:"card-text"},"Average")))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-danger mb-3"},c.a.createElement("div",{class:"card-header"},"Distance"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.distance," Kms"),c.a.createElement("p",{class:"card-text"},"One Way")))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-danger mb-3"},c.a.createElement("div",{class:"card-header"},"Ride Time"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.time),c.a.createElement("p",{class:"card-text"},"Approx")))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-danger mb-3"},c.a.createElement("div",{class:"card-header"},"Fuel Needed"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.fuel," Liters"),c.a.createElement("p",{class:"card-text"},"One Way : ",this.props.fuel/2," Liters")))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-danger mb-3"},c.a.createElement("div",{class:"card-header"},"Price For Fuel"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.price.fuel," Rs"),c.a.createElement("p",{class:"card-text"},"Price : ",this.fuelPrice," /Liter")))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-danger mb-3"},c.a.createElement("div",{class:"card-header"},"Price For Stay"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.price.stay," Rs"),c.a.createElement("p",{class:"card-text"},"Stay : ",this.props.stay.price," per day")))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-danger mb-3"},c.a.createElement("div",{class:"card-header"},"Price For Food"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.price.food," Rs"),c.a.createElement("p",{class:"card-text"},"Stay : ",this.props.food.price," per day")))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{class:"card text-white bg-danger mb-3"},c.a.createElement("div",{class:"card-header"},"Grand Total"),c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},this.props.price.fuel+this.props.price.food+this.props.price.stay," Rs"),c.a.createElement("p",{class:"card-text"},"Approx")))),c.a.createElement("div",{className:"form-group",style:{textAlign:"center"}},c.a.createElement("button",{onClick:this.copy,className:"btn btn-warning btn-lg"},this.state.status),c.a.createElement("button",{onClick:this.props.reset,type:"submit",className:"btn btn-danger btn-lg"},"Reset"))))))}}]),a}(r.Component),E=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).secondsToHms=function(e){e=Number(e);var t=Math.floor(e/3600);return Math.floor(e%3600/60)>=30&&(t+=1),t>0?t+(1===t?" hour ":" hours "):""},e.newEstimation=function(t){var a=t.toString(),r=a.length,c=(parseInt(a[0])+1)*Math.pow(10,r-1);e.setState({total:c})},e.calculate=function(){console.log("Calculating");var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({locations:[e.state.from.city,e.state.to.city]})};fetch("https://www.mapquestapi.com/directions/v2/routematrix?key=NWocdztSYHRGGxghPivCkuoeYaVvMQx1",t).then((function(e){return e.json()})).then((function(t){if(402===t.info.statuscode)console.log(t.info.messages);else{var a=0;e.state.mileage&&(a=Math.ceil(2*Math.ceil(1.60934*t.distance[1])/e.state.mileage)),e.setState({from:{city:t.locations[0].adminArea5,state:t.locations[0].adminArea3},to:{city:t.locations[1].adminArea5,state:t.locations[1].adminArea3},distance:Math.ceil(1.60934*t.distance[1]),time:e.secondsToHms(t.time[1]),fuel:a,price:{fuel:a*e.fuelPrice,food:e.state.food.price*e.state.food.day*3,stay:e.state.stay.price*e.state.stay.day}}),e.state.to.city||e.setState({to:{city:e.state.to.state,state:e.state.to.state}}),e.state.to.state||e.setState({to:{city:e.state.to.city,state:e.state.to.city}}),e.newEstimation(e.state.fuel*e.fuelPrice)}}))},e.reset=function(){e.setState({from:{city:"",state:""},to:{city:"",state:""},price:{fuel:0,food:0,stay:0},stay:{day:null,price:null},food:{day:null,price:null},distance:0,time:0,fuel:0,mileage:null})},e.handleChange=function(t){t.preventDefault(),"from"===t.target.id&&e.setState({from:{city:t.target.value,state:""}}),"to"===t.target.id&&e.setState({to:{city:t.target.value,state:""}}),"mileage"===t.target.id&&e.setState({mileage:t.target.value}),"food-day"===t.target.id&&e.setState({food:{day:t.target.value,price:e.state.food.price}}),"food-price"===t.target.id&&e.setState({food:{day:e.state.food.day,price:t.target.value}}),"stay-day"===t.target.id&&e.setState({stay:{day:t.target.value,price:e.state.stay.price}}),"stay-price"===t.target.id&&e.setState({stay:{day:e.state.stay.day,price:t.target.value}}),"mileage"===t.target.id&&e.setState({mileage:t.target.value}),console.log(t.target.id,t.target.value)},e.state={from:{city:"Coimbatore",state:""},to:{city:"Panaji",state:""},stay:{day:6,price:800},food:{day:7,price:150},mileage:40,price:{fuel:null,food:null,stay:null},distance:null,time:null,fuel:null},e.fuelPrice=84,e}return Object(i.a)(a,[{key:"render",value:function(){return this.state.distance?c.a.createElement(u,{from:this.state.from,to:this.state.to,food:this.state.food,stay:this.state.stay,mileage:this.state.mileage,distance:this.state.distance,time:this.state.time,fuel:this.state.fuel,price:this.state.price,reset:this.reset,fuelPrice:this.fuelPrice}):c.a.createElement(h,{from:this.state.from,to:this.state.to,mileage:this.state.mileage,food:this.state.food,stay:this.state.stay,handleChange:this.handleChange,calculate:this.calculate})}}]),a}(r.Component),v=(a(25),function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{class:"bikes"},c.a.createElement("h1",null,"Browse Bikes"))}}]),a}(r.Component)),y=(a(26),function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{class:"home"},c.a.createElement("h1",null,"The Indian Traveller".toUpperCase()))}}]),a}(r.Component)),f=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(m.a,null,c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"/Home",component:y}),c.a.createElement(p.a,{path:"/TripFund",component:E}),c.a.createElement(p.a,{path:"/Bikes",component:v})))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.2c5da204.chunk.js.map