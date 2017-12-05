import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ListItem from './ListItem'

const Wrapper = styled.div`
  width: 100%;
`

const TransactionList = (props) => {
  return (
    <Wrapper>
      { props.transactions.map((transaction, index) => <ListItem key={index} transaction={transaction} currency={props.currency} />)}
    </Wrapper>
  )
}

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    to: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.string,
    initial_value: PropTypes.string
  }))
}

TransactionList.defaultProps = {
  transactions: []
}

export default TransactionList