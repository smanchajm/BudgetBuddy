import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { SymbolView, SymbolViewProps, SFSymbol } from 'expo-symbols';

import homeLogoSelected from "../assets/homeLogo-selected.png";
import reglagesLogoSelected from "../assets/reglagesLogo-selected.png";
// import calendrierLogoSelected from "@/assets/images/calendrierLogo-selected.png";
import homeLogoUnselected from "../assets/homeLogo-unselected.png";
import reglagesLogoUnselected from "../assets/reglagesLogo-unselected.png";
// import calendrierLogoUnselected from "@/assets/images/calendrierLogo-unselected.png";
import { couleurs } from '../constants/colors';

// COMPOSANT POUR LE MENU GÉNÉRAL

const TabBar = ({ state, descriptors, navigation }) => {
  return (
        <View style={styles.tabBar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.title || route.name; 
                const isFocused = state.index === index; 

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={index}
                        onPress={onPress}
                        style={[styles.tabButton, isFocused && styles.selectedTab]}
                    >
                        {label === "Home" && (
                            <SymbolView name="house" style={isFocused ? styles.iconButtonNavSelected : styles.iconButtonNavNotSelected} type="hierarchical" />
                            
                        )}
                        {label === "Detail" && (
                            <SymbolView name="tray.full" style={isFocused ? styles.iconButtonNavSelected : styles.iconButtonNavNotSelected} type="hierarchical" />
                        )}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 25,
        alignSelf: 'center', // Centre horizontalement (si parent est `flex: 1`)
        flexDirection: 'row',
        width: 145,
        height: 65,
        backgroundColor: couleurs.darkGreen,
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 80,
        borderCurve: 'continuous',
        // Ombre pour iOS
        shadowColor: couleurs.black, 
        shadowOffset: { width: 0, height: 5 }, 
        shadowOpacity: 0.25, 
        shadowRadius: 10, 
        // Ombre pour Android
        elevation: 10, 
    },
    tabButton: {
        height: 55,
        width: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: couleurs.darkGreen,
        borderRadius: 100
    },
    selectedTab: {
        backgroundColor: couleurs.lightGreen,
    },
    iconButtonNavSelected: {
        width: 40, 
        height: 40,
        tintColor : couleurs.darkGreen
    }, 
    iconButtonNavNotSelected: {
        width: 40, 
        height: 40,
        tintColor : couleurs.lightGreen
    }
});

export default TabBar;
