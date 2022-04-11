import React, { useContext, useState } from "react";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, AuthInput, Title, ErrorContainer} from "../components/account.styles";
import { Text } from "../../../components/typography/typography.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthentificationContext } from "../../../services/authentification/authentification.context";
import { ActivityIndicator, Colors } from "react-native-paper";


export const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const {onRegister, error, isLoading} = useContext(AuthentificationContext);
    return <AccountBackground>
        <AccountCover />
        <AccountContainer>
            <Title>Login</Title>
            <AuthInput label="E-mail"
                       value={email}
                       textContextType="emailAddress"
                       keyboard-type="email-address"
                       autoCapitalize="none"
                       onChangeText={(text) => setEmail(text)}
            />
            <Spacer position="top" size="large">
                <AuthInput label="Password"
                                value={password}
                                textContextType="password"
                                secureTextEntry
                                autoCapitalize="none"
                                secure
                                onChangeText={(text) => setPassword(text)}
                />
            </Spacer>
            <Spacer position="top" size="large">
                <AuthInput label="Repeated Password"
                                value={repeatedPassword}
                                textContextType="password"
                                secureTextEntry
                                autoCapitalize="none"
                                secure
                                onChangeText={(text) => setRepeatedPassword(text)}
                />
            {(error.length !== 0) && <ErrorContainer>
                    <Text variant="error">
                        {error}
                    </Text>
                </ErrorContainer>}   
            </Spacer>
            
            <Spacer size="large" position="top"/>
            { !isLoading ? <AuthButton
                icon="lock-open-outline"
                mode="contained"
                onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>: <ActivityIndicator animating={true} color={Colors.blue300}/>}
        </AccountContainer>
        <Spacer position="top" size="small">
            <AuthButton
                mode="contained"
                onPress={() => navigation.goBack()}
                style={{width: "40%", marginLeft: "30%"}}
            >
                go back
            </AuthButton> 
        </Spacer>
    </AccountBackground>
};