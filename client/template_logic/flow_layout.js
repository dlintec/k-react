import React from 'react';




Template.flow_layout.onCreated(function() {
  const pagesHandle=this.subscribe('pages');
  this.autorun(() => {
    FlowRouter.watchPathChange();
    const pagesIsReady = pagesHandle.ready();

    console.log(`Pages Handle is ${pagesIsReady ? 'ready' : 'not ready'}`);
    document.title = orion.dictionary.get('site.title', 'dlintec');
  });
});

Template.flow_layout.helpers({

  pagesHelper:function(){
    return  pages.find({}, {sort: {order: 1}});
  },
});
