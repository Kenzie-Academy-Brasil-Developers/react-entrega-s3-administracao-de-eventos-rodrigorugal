import styled from "styled-components";

export const BeerItem = styled.li`
  background-color: lightcyan;
  min-width: 350px;
  max-width: 350px;
  height: 500px;

  position: relative;
  margin: 0 10px;
  padding: 10px;

  border: 1px solid red;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 90px;
    height: 190px;
  }

  details {
    width: 100%;
    max-height: 150px;
    overflow: auto;

    margin: 10px 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    summary {
      width: 100%;
      height: 18px;
      text-align: center;
    }
  }

  .Buttons {
    position: absolute;
    bottom: 5px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;
