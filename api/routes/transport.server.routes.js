var TransportRoutesModel  = require('../models/transport.route.model');
module.exports = function(app){
//Authentication routes ====================================================

// server routes ===========================================================
//Get All Routes
app.get('/routes',function(req,res){
		 TransportRoutesModel.find(function(err,transportRouteData){
				if (err)
				  res.send('error');
				res.json(transportRouteData);
			});
    });

//Search by Route Name

app.get('/routes/:routeName', function (req, res) {
    if (req.params.routeName) {
        TransportRoutesModel.find({ name: {$regex: new RegExp('^' + req.params.routeName.toLowerCase(), 'i')} }, function (err, searchResult) {
					if (err)
						res.send('error');
          res.json(searchResult);
        });
    }
});

}
