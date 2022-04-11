import React , {useContext} from "react";
import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../components/utility/safe-area.component";
import { AuthentificationContext } from "../../services/authentification/authentification.context";
import { AvatarContainer } from "./components/settings.styles";
export const SettingsScreen = ({navigation}) => {
    const { onLogout, user } = useContext(AuthentificationContext);
    return (<SafeArea>
            <AvatarContainer>
                <Avatar.Icon icon="human" size={180} backgroundColor="#2182BD"/>
                <Spacer position="top" size="large">
                    <Text variant="label">{user.email}</Text>
                </Spacer>
            </AvatarContainer>
        <List.Section>
            <List.Item style={{ padding: 16 }}
                       title="Favourites"
                       description="Your favrourites restaurants"
                       left={(props) => <List.Icon {...props} icon="heart" color="black"/>}
                       onPress={()=>navigation.navigate("Favourites")}
            />
            <List.Item style={{ padding: 16 }}
                       title="Logout"
                       left={(props) => <List.Icon {...props} icon="door" color="black"/>}
                       onPress={onLogout}
            />
        </List.Section>
    </SafeArea>);
};