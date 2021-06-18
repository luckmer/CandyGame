import styled from "styled-components";

interface Props {
  Props: any;
}

export const Candy = styled.div<Props>`
  width: 70px;
  height: 70px;
  padding: 5%;
  transition: all 1s;
  background: ${({ Props }) => Props};
`;

export const Container = styled.main`
  max-width: 560px;
  margin: auto;
  height: 100vh;
`;
export const ContainerMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const GameStyle = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-flow: row wrap;
`;
