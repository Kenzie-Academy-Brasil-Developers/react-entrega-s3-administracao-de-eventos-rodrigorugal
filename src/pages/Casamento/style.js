import styled from "styled-components";
import { FullScreen } from "../Home/style";

export const FullScreenCasamento = styled(FullScreen)`
  position: relative;
  .bntBack {
    position: fixed;
    bottom: 5px;
    right: 20px;
  }
`;

export const BodyCasamento = styled.article`
  width: 100%;
  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow: auto;

    ul {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;
