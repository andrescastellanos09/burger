var orm = require('../config/orm.js');

var burger = 
{

  selectAll: function(retrieve)
  {
    orm.selectAll(function(res)
    {
      callback(res);
    });
  },

  insertOne: function(burger_name, retrieve)
  {
    orm.insertOne(burger_name, function(res)
    {
      callback(res);
    });
  },

  updateOne: function(id, retrieve)
  {
    orm.updateOne(id, function(res)
    {
      callback(res);
    });
  }

};


// Export at the end of the burger.js file.
module.exports = burger;

