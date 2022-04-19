import styled from 'styled-components/native';

interface Props {
  changeColor: string;
  rotate: number;
}

export const ButtonGeniusDefault = styled.TouchableOpacity`
  background-color: ${(p: Props) => p.changeColor};
  width: 150px;
  height: 150px;
  border-top-left-radius: 1000px;
  border: 3px solid black;
  transform: ${(p: Props) => `rotate(${p.rotate}deg)`};
  overflow: hidden;
`;

export const ViewGeniusDefault = styled.View``;
