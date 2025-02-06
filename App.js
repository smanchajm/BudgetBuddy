import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './navigation/tabs';
import { couleurs } from './constants/colors';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import {SQLiteProvider} from 'expo-sqlite';


const loadDataBase = async () => {
    const dbName = 'BudgetBuddyDB.db';
    const dbAsset = require('./assets/BudgetBuddyDB.db');
    const dbURI = Asset.fromModule(dbAsset).uri;
    const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;
    const fileInfo = await FileSystem.getInfoAsync(dbFilePath);
    if (!fileInfo.exists) {
        await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}SQLite`, { intermediates: true });
        await FileSystem.downloadAsync(dbURI, dbFilePath);
    }
}


const App = () => {
  const [dbLoaded, setDbLoaded] = React.useState(false);

  React.useEffect(() => {
    loadDataBase()
      .then(() => setDbLoaded(true))
      .catch((error) => console.error(error));
  }, []);

  if (!dbLoaded) {
    return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    );
  }

  else {
    return (
      <NavigationContainer>
          <React.Suspense
            fallback={
              <View>
                <Text>Loading Database...</Text>
                <Tabs />
              </View>
            }
          >
            <SQLiteProvider 
            databaseName="BudgetBuddyDB.db" useSuspense >
              <Tabs />

            </SQLiteProvider>
          </React.Suspense>
      </NavigationContainer>
    );

  }
}


export default App;
