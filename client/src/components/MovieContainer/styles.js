import styled from "styled-components";
import * as colors from '../../assets/variables';

export const Container = styled.div`
  height: 100%;
  margin-top: 1.875rem;
`;

export const Label = styled.div`
  display: flex;
  margin-bottom: 1.25rem;
  justify-content: flex-start;
  text-transform: uppercase;
  align-items: baseline;

  h2 {
    color: ${colors.WHITE};
    font-family: 'Titillium Web', sans-serif;
    font-size: 1.25rem;
    margin-right: 0.9375rem;
  }

  span {
    font-size: 0.75rem;
    color: ${colors.BLACK};
    font-family: 'Titillium Web', sans-serif;
    padding: 0.02rem 0.5rem;
    border: 0.0625rem solid ${colors.ORANGE};
    color: ${colors.ORANGE};
    height: 1.125rem;
  }
`;

export const MovieRail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }
`;

export const Title = styled.div`
  position: relative;
  bottom: 3.4375rem;
  left: 0.625rem;
  display: flex;

  span {
    margin-top: 0.625rem;
    font-size: 0.875rem;
    font-family: 'Titillium Web', sans-serif;
    color: ${colors.WHITE};
    font-weight: bold;
    line-height: 1.125rem;
    text-shadow: 0 0.25rem 0.1875rem ${colors.BLACK},
                 0 0.5rem 0.8125rem ${colors.BLACK},
                 0 1.125rem 1.4375rem ${colors.BLACK};
  }
`;

export const Movie = styled.div`
  width: 14.0625rem;
  margin-right: 0.625rem;
  margin-bottom: 2.1875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: baseline;

  div {
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      aspect-ratio: 1;
      transform: scale(1.035);
      transition: transform 0.5s;
    }

    div {
      height: 25%;
      width: 100%;
      position: absolute;
      bottom: 3.125rem;
      left: 0;
      padding: 0.3125rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      span {
        width: 3.75rem;
        text-align: center;
        margin-top: 0.3125rem;
        margin-left: 0.3125rem;
        padding: 0.35rem 0.5rem;
        font-family: 'Titillium Web', sans-serif;
        font-size: 0.75rem;
        text-transform: uppercase;
        background-color: ${colors.ORANGE};
        color: ${colors.BLACK};
      }
    }
  }

  div:hover {
    img {
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`;
