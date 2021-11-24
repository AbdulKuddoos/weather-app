const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoidGloaXAiLCJhIjoiY2t2d2dxeHJtMDg3ZDMwcjV3ZndvNzJuOSJ9.l0_cwD6wCvtK3SjiEqPQ5A&limit=1`;

  request({ url, json: true }, (error, { body: { features } }) => {
    if (error) {
      callback("Unable to connect locaion services", undefined);
    } else if (features.length == 0) {
      callback("Unable to find location, Try again", undefined);
    } else {
      callback(undefined, {
        latitude: features[0].center[1],
        longitude: features[0].center[0],
        location: features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
