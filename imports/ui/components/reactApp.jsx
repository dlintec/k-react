import React, { Component, PropTypes  } from 'react';
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data';
import Task from './Task.jsx';
import BeerForm from '/imports/ui/components/beer/beerform.jsx';
import BeerList from '/imports/ui/components/beer/beerlist.jsx';
import BarChart from '/imports/ui/components/beer/barchart.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

 // App component - represents the whole app

export default class reactApp extends TrackerReact(React.Component) {
  constructor(props) {
      super(props);
      this.state = {
        subscription: {
          beersSub: Meteor.subscribe('beersPub')
        }
      }
      this.localdata = [
        { qty: 0, xLabel: "Sun" },
        { qty: 0, xLabel: "Mon" },
        { qty: 0, xLabel: "Tue" },
        { qty: 0, xLabel: "Wed" },
        { qty: 0, xLabel: "Thu" },
        { qty: 0, xLabel: "Fri" },
        { qty: 0, xLabel: "Sat" },
      ];

      //this.beers={};
      /*this.beersHandle=Meteor.subscribe('beersPub',{
          onReady: function () {
             this.beers=Beers.find({}).fetch()
             this.beers.map(function(d) {
                this.localdata[moment(d.date).day()].qty += d.beers;
              });

              console.log("onReady And the Items actually Arrive", this);
          },

          onError: function () { console.log("onError", arguments); }
          }


    );*/
    //this.beers=function(){return Beers.find({}).fetch()};



  }
  componentWillUnmount() {
      this.state.subscription.beersSub.stop();
  }
  //tracker-based reactivity in action, no need for `getMeteorData`!
  getBeers() {
      return Beers.find({}).fetch(); //fetch must be called to trigger reactivity
  }

  getTasks() {
  //console.log("getTasks...");
   return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }


  renderTasks() {
    //console.log("renderTasks...");
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <ul>
          {this.renderTasks()}
          {this.renderBeersApp()}

        </ul>
      </div>
    );
  }
  mapData() {
    return this.localdata;
  }

  renderBeersApp() {
    //console.log("renderBeersApp... ");

    return (
      <div>

  		   <div className="page-header">
  					<center>
  						<h1>
  						<i className="fa fa-beer"></i> Beer
  						<small> Dashboard</small></h1>
  					</center>
  			</div>

  			<div className="container">
  				<div className="row">
            <div className="col-md-4">
  						<BeerForm />
              <BeerList data={this.getBeers()}/>

  					</div>

  					<div className="col-md-offset-2 col-md-6">
  						<BarChart data={this.mapData()} width="480" height="320"/>
  					</div>
  				</div>
  			</div>
		  </div>
		);
  }
}
