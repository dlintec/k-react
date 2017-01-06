import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import {beerAppLayout}  from './beerApp.jsx';
import {beerApp} from './beerApp.jsx';
main_route={
  action: function(params) {
    BlazeLayout.render("flow_layout",  { top:"header",main: "mainPage" })
  }
}
//FlowRouter.route('/:path', main_route);
FlowRouter.route('/', main_route);
FlowRouter.route("/react", {
  action() {
    mount(beerAppLayout, { content:<beerApp />});
    //BlazeLayout.render("flow_layout",  { top:"header" })
    ReactDOM.render( <beerApp />, document.getElementById('render-target') );
  }
});
