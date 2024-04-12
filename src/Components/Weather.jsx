import React from "react";

const Wheather = ({ weatherData}) => {

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <>
      {weatherData.weather ? (
        <div className="w-[40rem] h-[26rem] bg-gray-800 my-14 mx-auto rounded-xl flex p-[1.8rem] text-white px-[2.2rem]">
          <div className="w-1/2 flex-col">
            <h2 className="text-[2rem] font-semibold pt-[1.5rem]">
              {weatherData.name}
            </h2>
            <h4 className="text-gray-400">
              Country: {weatherData.sys.country}
            </h4>
            <h3 className="text-[1.2rem] pt-[5rem]">
              {capitalizeFirstLetter(weatherData.weather[0].description)}
            </h3>
            <div className="w-full">
              <p className="text-[3.8rem] font-semibold pt-[1rem]">
                {weatherData.main.temp.toFixed()} °C
              </p>
              <div className="w-full flex gap-12 text-gray-300">
                <p>
                  <span className="text-[.8rem] text-gray-400">min:</span>{" "}
                  {weatherData.main.temp_min} °C
                </p>
                <p>
                  <span className="text-[.8rem] text-gray-400">max: </span>
                  {weatherData.main.temp_max} °C
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex-col">
            <div className="w-full flex justify-end pr-[2rem]">
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt={weatherData.weather[0].description}
                className="w-[7rem] h-[7rem] justify-self-end"
              />
            </div>
            <div className="pt-[5rem] pl-[2rem]">
              <p>Feels like: {weatherData.main.feels_like.toFixed()} °C</p>
              <p className="pt-[1rem]">
                Humidity: {weatherData.main.humidity} %
              </p>
              <p className="pt-[1rem]">
                Wind speed: {weatherData.wind.speed} km/h
              </p>
            </div>
          </div>
        </div>
      ) : (
        null
      )}
    </>
  );
};

export default Wheather;
