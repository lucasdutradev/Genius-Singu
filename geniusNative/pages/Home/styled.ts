import styled from 'styled-components/native';

export const TextTitle = styled.Text`
  color: #fff;
  text-align: center;
  margin-top: 5%;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 3px;
`;

export const ViewBoxContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #003049;
`;

export const ViewBoxGame = styled.View`
  flex: 1.7;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  /* background-color: #ccc; */
  width: 100%;
`;

export const ViewBox = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ViewCenterBox = styled.View`
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 1000px;
  z-index: 1;
  background-color: black;
`;

export const ViewBoxTexts = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #003049;
`;
