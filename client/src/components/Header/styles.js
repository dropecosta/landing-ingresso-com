import styled from "styled-components";
import * as colors from '../../assets/variables';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.TRANSLUCID};
  width: 100%;
  height: 70px;
  box-shadow: 6px 6px 20px 0 ${colors.GREY};

  img {
    margin-left: 20px;
    height: 40px;
  }
`;

export const Filters = styled.div`
  width: 320px;
  display: flex;
  margin-right: 15px;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icon {
    color: ${colors.ORANGE};
  }

  input,
  select {
    font-size: 12px;
    font-family: "Titillium Web";
    margin-left: 5px;
    padding: 0.2rem 0.7rem;
    background: ${colors.BLACK};
    outline: none;
    border: 0;
    height: 30px;
    border: 1px solid ${colors.ORANGE};
    color: ${colors.ORANGE};
    font-size: 14px;
    position: relative;
    z-index: 2;
  }
  
  select.location{
    height: 38px;

    option {
      background: ${colors.BLACK};
      color: ${colors.ORANGE};
      &:hover {
        background: ${colors.BLACK};
        color: ${colors.ORANGE};
      }
    }
  }
`;
