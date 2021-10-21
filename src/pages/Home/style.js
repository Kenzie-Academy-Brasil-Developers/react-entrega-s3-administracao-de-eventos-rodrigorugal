import styled from "styled-components";

export const FullScreen = styled.main`
  width: 100vw;
  height: 100vh;

  background-color: var(--seablue);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BodyHome = styled.article`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;

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
