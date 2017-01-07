import React from 'react';
import {mount} from 'react-mounter';
import reactApp from '/imports/ui/components/reactApp.jsx';


Meteor.startup(() => {
console.log(`Startup client at main.jsx...`);
mount(reactApp , {name: 'Arunoda'});
//render(<reactApp />, document.getElementById('render-target'));
  //ReactDOM.render(<reactApp />,  document.getElementById('render-target'));
});
