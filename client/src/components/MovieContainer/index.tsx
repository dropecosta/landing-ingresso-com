import React from "react";

import { Container, Label, MovieRail, Movie, Title } from "./styles";
import IMovie, { ITags } from '../../Models'

interface IProps {
  results: IMovie[];
  selectedLocation: string;
}

const MovieContainer: React.FC<IProps> = ({ results, selectedLocation }) => {
  return (
    <Container>
      <Label>
        <h2>EM CARTAZ</h2>
        <span>Filmes disponíveis para: {selectedLocation}</span>
      </Label>     
      <MovieRail>
        {results.map((item: any) => {
          const result: IMovie = item.event;
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={ result.trailers.length > 0 ? result.trailers[0].url : result.siteURL }
              key={result.id}
            >
              <Movie>
                <div>
                  <img src={result.images[0].url} alt="poster"></img>
                  <div>
                    {result.completeTags.map((tag: ITags) => (
                      <span key={tag.name}>{tag.name}</span>
                    ))}
                  </div>
                </div>
                <Title>
                  <span>{result.title}</span>
                </Title>
              </Movie>
            </a>
          );
        })}
      </MovieRail>
    </Container>
  );
};

export default MovieContainer;
