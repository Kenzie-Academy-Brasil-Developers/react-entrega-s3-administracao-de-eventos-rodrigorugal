import styled from "styled-components";

export const BoxButton = styled.div`
  cursor: pointer;
  color: #ffffff;
  width: 110px;
  height: 30px;

  ${({ animatio }) =>
    animatio &&
    `
    transition: 0.5s;
    `}

  transition-timing-function: linear;

  margin: 2px;
  content: auto;

  background-color: #720505;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: ${(prop) => (prop.position !== "" ? prop.position : "30px")};
  top: 0px;
  right: 10px;

  &:hover {
    color: #0f0f08;
    background-color: #e16666;

    ${({ animatio }) =>
      animatio &&
      `
      transform: scale(120%)
    `}
  }
`;
