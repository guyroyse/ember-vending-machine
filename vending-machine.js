window.App = Ember.Application.create();


App.IndexRoute = Ember.Route.extend({
  model : function() {
    return App.VendingMachine.create();
  }
});

App.IndexController = Ember.ObjectController.extend({
  actions : {
    insertCoin : function(coin) {
      this.model.insertCoin(coin);
    }
  }
});

App.Coin = Ember.Object.extend({

  name : null,

  value : null,

  label : function() {
    var name = this.get('name');
    return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
  }.property('name'),

  key : function() {
    return this.get('name').toUpperCase();
  }.property('name')

});

App.VendingMachine = Ember.Object.extend({

  init : function() {
    this.set('total', 0);
  },

  coins : [
    App.Coin.create({ name : 'nickel', value : 5 }),
    App.Coin.create({ name : 'dime', value : 10 }),
    App.Coin.create({ name : 'quarter', value : 25 })
  ],

  display : function() {
    var total = this.get('total');
    return total === 0 ? 'INSERT COIN' : (total / 100).toFixed(2);
  }.property('total'),

  insertCoin : function(coin) {
    var foundCoin = this.coins.findBy('key', coin);
    if (foundCoin)
      this.incrementProperty('total', foundCoin.get('value'));
  }

});
