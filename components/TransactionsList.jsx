import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function TransactionsList({transactions, categories, deleteTransaction}) {
  return (
    <View>
      {transactions.map((transaction) => {

        return (
          <TouchableOpacity
          key={transaction.id}
          activeOpacity={0.7}
          onLongPress={() => deleteTransaction(transaction.id)}
          >
            <Text>{transaction.description} amount: {transaction.amount}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({})