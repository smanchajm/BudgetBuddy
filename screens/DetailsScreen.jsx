import { useSQLiteContext } from 'expo-sqlite';
import React, { useState } from 'react';
import { SafeAreaView, Text, Button, StyleSheet, ScrollView } from 'react-native';
import TransactionsList from '../components/TransactionsList';


function DetailsScreen(props) {
    const [categories, setCategories] = useState([]);
    const [transactions, setTransactions] = useState([]);

    const db =useSQLiteContext();

    // gros test de pull request

    

    React.useEffect(() => {
        db.withTransactionAsync(async () => {
            await getData();
        })
    }, [db])

    async function getData() {
        const result = await db.getAllAsync('SELECT * FROM Transactions ORDER BY date DESC;');     
        setTransactions(result);

        const categoriesResult = await db.getAllAsync(`SELECT * FROM Categories;`);
        setCategories(categoriesResult);
    }

    async function deleteTransaction(id) {
        db.withTransactionAsync(async () => {
            await db.runAsync(`DELETE FROM Transactions WHERE id = ?;`, [id]);
            await getData();
        })
    }

    return (
        <ScrollView style={styles.ScrollView}>
            <TransactionsList
            categories={categories}
            transactions={transactions} 
            deleteTransaction={deleteTransaction}
            />
        </ScrollView>
    );
}

export default DetailsScreen;

const styles = StyleSheet.create({
    ScrollView: {
      padding: 30,
      paddingVertical: 30,
    },
    });