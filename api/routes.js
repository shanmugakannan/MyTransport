module.exports = function(app){
	//GET
	app
	.get('/',function(req,res){
		res.status(200).json(
			[
			{"id": 1,"route":"Route1","match":"s"},
			 {"id": 2,"route":"Route2","match":"s"},
			 {"id": 3,"route":"Route3","match":"s"}
		 ]
		);
	});
}
