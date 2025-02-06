import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TransactionsListItem from './TransactionListItem';

export default function TransactionsList({transactions, categories, deleteTransaction}) {
  return (
    <View style={styles.list}>
      {transactions.map((transaction) => {
        const categoryForCurrentItem = categories.find(
          (category) => category.id == transaction.category_id
        )
        return (
          <TouchableOpacity
          key={transaction.id}
          activeOpacity={0.7}
          onLongPress={() => deleteTransaction(transaction.id)}
          >
            <TransactionsListItem 
            transaction={transaction} categoryInfo={categoryForCurrentItem}
            />

          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    gap: 20
  }
})