import styled from "styled-components";
import * as colors from '../../assets/variables';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.TRANSLUCID};
  width: 100%;
  height: 4.375rem;
  box-shadow: 0.375rem 0.375rem 1.25rem 0 ${colors.GREY};

  img {
    margin-left: 1.25rem;
    height: 2.5rem;
  }
`;

export const Filters = styled.div`
  width: 20rem;
  display: flex;
  margin-right: 0.9375rem;
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
    font-size: 0.75rem;
    font-family: 'Titillium Web', sans-serif;
    margin-left: 0.3125rem;
    padding: 0.2rem 0.7rem;
    background: ${colors.DARKGREY};
    outline: none;
    border: 0;
    height: 1.875rem;
    border: 0.0625rem solid ${colors.ORANGE};
    color: ${colors.ORANGE};
    font-size: 0.875rem;
    position: relative;
    z-index: 2;
  }
  
  select.location{
    height: 2.375rem;

    option {
      background: ${colors.DARKGREY};
      color: ${colors.ORANGE};
      border: 0;
      &:hover {
        background: ${colors.DARKGREY};
        color: ${colors.ORANGE};
      }
    }
  }
`;
