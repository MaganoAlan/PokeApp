import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: lightgreen;
`;

export const Texts = styled.Text`
  font-family: 'PressStart2P-Regular';
  text-align: center;
  margin-top: 10%;
`;

export const TypesBox = styled.ScrollView`
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 5%;
  margin-bottom: 5%;
`;

export const TypeBack = styled.View`
  border: 1px solid #535353;
  padding: 10px;
  border-radius: 20px;
  width: 60%;
  margin: auto;
  margin-bottom: 10%;
  elevation: 5;
`;

export const TypeText = styled.Text`
  font-family: 'PressStart2P-Regular';
  text-align: center;
  color: #fdfdfd;
`;
