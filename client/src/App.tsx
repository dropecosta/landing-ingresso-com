import React, { useState, useEffect } from "react";
import Axios from "axios";
import api, { endpoint } from './sevices/api'
import Header from "./components/Header";
import MovieContainer from "./components/MovieContainer";
import IMovie, { IResponse } from "./Models";

const App: React.FC<object> = () => {
  const [results, setResults] = useState<IMovie[]>([]);
  const [location, setLocation] = useState<string>("São Paulo");

  const getMovies = async () => {
    const cartRegion = location === "São Paulo" ? 
      `http://${endpoint}/movies/sp` : 
      `http://${endpoint}/movies/rj`;
      
    const response = await api.get(cartRegion);
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