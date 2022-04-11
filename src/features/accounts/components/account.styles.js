import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/typography.component";

export const AccountBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/home_bg.jpg"),
})`
    flex: 1;
    align-center;
    justify-content: center;
`;

export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
    background-color: rgba(255, 255, 255, 0.7);
    width: 90%;
    padding: ${(props) => props.theme.space[4]};
    margin: ${(props) => props.theme.space[3]};
`;

export const AuthButton = styled(Button).attrs({
    color: colors.brand.primary,
  })`
    padding: ${(props) => props.theme.space[2]};
    margin: ${(props) => props.theme.space[2]};
  `;

export const AuthInput = styled(TextInput)`
`;

export const Title = styled(Text)`
  font-size: 30px;
  margin: 10px auto;
`;

export const ErrorContainer = styled.View`
 max-width: 90%;
 text-align: center;
`;

export const AnimationWrapper = styled.View`
height: 50%;
width: 60%;
position: absolute;
top: 10px;
left: 20%;
padding: ${(props) => props.theme.space[2]};
`;