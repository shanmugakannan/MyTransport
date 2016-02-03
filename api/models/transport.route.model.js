var mongoose = require('mongoose');

var RouteSchema = mongoose.Schema({
"type": "object",
  "properties": {
    "routeId": {
      "id": "routeId",
      "type": "string"
    },
    "startTime": {
      "id": "startTime",
      "type": "date"
    },
    "name": {
      "id": "name",
      "type": "string"
    },
    "routePoints": {
      "id": "routePoints",
      "type": "array"
    },
    "durationMins": {
      "id": "durationMins",
      "type": "array"
    }
  }
});

var RouteData = mongoose.model('model', RouteSchema,'routeData');
module.exports = RouteData;
