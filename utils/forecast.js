const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily,minutely&appid=a9072893516c459f01fb94cc6b93eb08`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect with Weather Services", undefined);
    } else if (body.cod === "400") {
      callback(
        "Unable to find location with these cordinates!. Try Again",
        undefined
      );
    } else {
      callback(undefined, {
        data: body,
      });
    }
  });
};

module.exports = forecast;
