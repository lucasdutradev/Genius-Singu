import styled from 'styled-components/native';
// #ff9c66
export const TextTitle = styled.Text`
  color: #000;
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
  background-color: #fff;
`;

export const ViewAwaitSequence = styled.View`
  flex: 1;
  background-color: transparent;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1030;
`;

export const ViewBoxGame = styled.View`
  flex: 1.7;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ViewBox = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ImageLogo = styled.Image`
  width: 90px;
  height: 29px;
`;

export const ViewCenterBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
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
