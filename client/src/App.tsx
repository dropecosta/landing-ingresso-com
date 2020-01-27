import React, { useState, useEffect } from "react";
import axios from "axios"
import Header from "./components/Header";
import MovieContainer from "./components/MovieContainer";
import IMovie, { IResponse } from "./Models";

const App: React.FC<object> = () => {
  const [results, setResults] = useState<IMovie[]>([]);
  const [location, setLocation] = useState<string>("São Paulo");

  const getMovies = async () => {
    const cartRegion = location === "São Paulo" ? 
      "http://localhost:3000/movies/sp" : 
      "http://localhost:3000/movies/rj";

    const response = await axios.get(cartRegion);
    const responseData = response.data;
    setResults(responseData);
  };

  useEffect(() => {
    getMovies();
  }, [location]);

  const cartProps = { setLocation };

  return(
    <>
      <div className="app">
        <Header {...cartProps} />
        <MovieContainer selectedLocation={location} results={results}/>
      </div>
    </>
  );
};

export default App