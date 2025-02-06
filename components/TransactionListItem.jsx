import React from 'react'
import { Text } from 'react-native'

export default function TransactionListItem({transaction, categoryInfo}) {
  return (
        <Text>
            {transaction.description} amount: {transaction.amount}
        </Text>
  )
}
