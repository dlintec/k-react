orion.collections.onCreated(function() {
  var self = this;
  console.log('collection tabular',_.has(this, 'tabular'));
  // if the collection doesn't has the tabular option, nothing to do here!
  if (!_.has(this, 'tabular')) return;

  var tabularOptions = _.extend({
    name: 'tabular_' + self.name,
    collection: self,
    columns: [
      { data: '_id', title: 'ID' },
    ],
    stateSave: true,
    responsive: true,
    autoWidth: false,
    selector: function(userId) {
      var selectors = Roles.helper(userId, 'collections.' + self.name + '.indexFilter');
      return { $or: selectors };
    }
  }, this.tabular);

  Tracker.autorun(function() {
    tabularOptions.columns.map(function(column) {
      if (_.isFunction(column.title)) {
        column.langTitle = column.title;
      }

      if (_.isFunction(column.langTitle)) {
        column.title = column.langTitle();
      }

      return column;
    });


    self.tabularTable = new Tabular.Table(tabularOptions);
  });
});
