import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: tomato;
  width: 100%;
  height: 100%;
`;

export const Visor = styled.View`
  background-color: lightgreen;
  width: 90%;
  height: 70%;
  margin: auto;
  margin-top: 5%;
  border-radius: 10px;
  border: 1px solid #535353;
  padding: 5%;
`;

export const Buttons = styled.View`
  flex-direction: row;
  margin: auto;
`;

export const SecondVisor = styled.View`
  width: 120px;
  height: 100px;
  background-color: lightgreen;
  border: 1px solid #535353;
  padding: 5%;
  border-radius: 10px;
  margin: 2%;
`;

export const VisorText = styled.Text`
  font-family: 'PressStart2P-Regular';
  font-size: 10px;
`;
