Template.header.events({
  'click .scroll-link': function(e){
    e.preventDefault();
    var path = e.currentTarget.attributes['href'].value;
    var section = $("#" + path);
    window.history.pushState(path, "", "/" + path);

    Session.set('scrolling', true);
    $('html, body').animate({
      scrollTop: section.offset().top
    }, 1000, function() { Session.set('scrolling', false);});
  },

  'click .navbar-brand': function(){
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  }
});
Template.header.onCreated(function() {
  const pagesHandle=this.subscribe('pages');
  this.autorun(() => {
    FlowRouter.watchPathChange();
    const pagesIsReady = pagesHandle.ready();

    console.log(`Header Pages Handle is ${pagesIsReady ? 'ready' : 'not ready'}`);
    document.title = orion.dictionary.get('site.title', 'dlintec');
  });
});

Template.header.helpers({

  pagesHelper:function(){
    return  pages.find({}, {sort: {order: 1}});
  },
});
