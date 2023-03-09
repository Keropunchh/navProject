import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainerRefContext } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item title="Register" iconName="person-add" onPress={() => alert('search')} />
          
        </HeaderButtons>
      ),
    });
  }, [navigation]);
 
  return(
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Ionicons name="home" size={30} color="#008b8b" />
    <Text>โฮมสกรีน</Text>
    <Button title="About me" onPress={() => navigation.openDrawer()} />
  </View>
  );
};

export default HomeScreen;