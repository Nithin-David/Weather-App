import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./Components/Weather";

const url = "https://api.openweathermap.org/data/2.5/weather?";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("kochi");
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    try {
      setError("")
       if (e.key === "Enter" && location !== "") {
         const { data } = await axios.get(
           `${url}q=${location}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
         );
         setData(data);
         setLocation("");
       }
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <>
      <div className="w-full h-ful">
        <div className="text-center p-8">
          <input
            type="search"
            className="w-[40rem] py-3 px-6 rounded-full bg-gray-700 border border-gray-600 focus:outline-none text-gray-200 text-lg placeholder:text-gray-500 shadow-lg shadow-gray-700"
            placeholder="Enter location..."
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyDownCapture={handleSearch}
          />
        </div>
        {error ? (
          <div className="mx-auto w-[40rem] text-center mt-[10rem] p-[2rem] text-[1.5rem] text-red-700">
            <p>{error}</p>
            <p className="text-[1rem]">Please check spelling or try later.</p>
          </div>
        ): (
          <Weather weatherData = {data}/>
        )}
      </div>
    </>
  );
}

export default App;
