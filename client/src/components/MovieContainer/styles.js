import styled from "styled-components";
import * as colors from '../../assets/variables';

export const Container = styled.div`
  height: 100%;
  margin: 30px 15px 0;
`;

export const Label = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: flex-start;
  text-transform: uppercase;
  align-items: baseline;

  h2 {
    color: ${colors.WHITE};
    font-family: 'Titillium Web';
    font-size: 20px;
    margin-right: 15px;
  }

  span {
    font-size: 12px;
    color: ${colors.BLACK};
    font-family: 'Titillium Web';
    padding: 0.02rem 0.5rem;
    border: 1px solid ${colors.ORANGE};
    color: ${colors.ORANGE};
    height: 18px;
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
  bottom: 55px;
  left: 10px;
  display: flex;

  span {
    margin-top: 10px;
    font-size: 14px;
    font: 'Titillium Web';
    color: ${colors.WHITE};
    font-weight: bold;
    line-height: 18px;
    text-shadow: 0px 4px 3px #${colors.BLACK},
                 0px 8px 13px #${colors.BLACK},
                 0px 18px 23px #${colors.BLACK};
  }
`;

export const Movie = styled.div`
  width: 225px;
  margin-right: 10px;
  margin-bottom: 35px;
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
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 100%;
      height: 25%;
      position: absolute;
      bottom: 50px;
      left: 0px;
      box-shadow: 0 3px 8px ${colors.BLACK});
      padding: 5px;

      span {
        padding: 0.35rem 0.5rem;
        background-color: ${colors.ORANGE};
        border: 1px solid ${colors.BLACK};
        text-transform: uppercase;
        color: ${colors.GREY};
        width: 60px;
        font-size: 12px;
        text-align: center;
        margin-top: 5px;
      }
    }
  }
`;
