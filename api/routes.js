module.exports = function(app){
	//GET
	app
	.get('/',function(req,res){
		res.status(200).json(
			[
			{"id": 1,"route":"Route1","match":"s"},
			 {"id": 21,"route":"Route2","match":"s"},
			 {"id": 13,"route":"Route3","match":"s"},
			 {"id": 2,"route":"Route4","match":"s"},
			 {"id": 45,"route":"Route5","match":"c"},
			 {"id": 12,"route":"Route6","match":"c"},
			 {"id": 17,"route":"Route7","match":"c"},
			 {"id": 14,"route":"Route8","match":"c"},
			 {"id": 18,"route":"Route9","match":"c"},
			 {"id": 19,"route":"Route10","match":"c"},
			 {"id": 71,"route":"Route11","match":"c"},
			 {"id": 61,"route":"Route12","match":"s"},
			 {"id": 51,"route":"Route13","match":"c"},
			 {"id": 31,"route":"Route14","match":"c"},
			 {"id": 81,"route":"Route15","match":"e"}
		 ]
		);
	});
}
