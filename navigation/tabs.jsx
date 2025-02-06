import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import TabBar from '../components/TabBar';
import { couleurs } from '../constants/colors';
import { StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator 
        styles={styles.tabBar}
        screenOptions={{
          headerTitle: "BudgetBuddy"
        }}
        tabBar={props => <TabBar {...props} />}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Detail" component={DetailsScreen} />
        </Tab.Navigator>
      );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 80,
  }
});

export default Tabs;