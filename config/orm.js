var connection = require("./connection.js");

var orm = 
{
    selectAll: function(retrieve){
        connection.query('SELECT * FROM Burgers', function(err,result){
            if (err) throw err;
            console.log(result)
        });
    },
    insertOne: function(burger_name, retrieve){
        connection.query('INSERT INTO Burgers SET ?', {
            burger_name: burger_name,
            devoured: false,
        },function(err,result){
            if (err) throw err;
            console.log(result)
        });
    },
    updateOne: function(id, retrieve)
	{
		connection.query('UPDATE Burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}],
			function(err, result)
			{
				if (err) throw err;
				console.log(result)
			});
	}
};

module.exports = orm;