
import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import MaximumAmountLink from './MaximumAmountLink'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  > * { margin-left: 2px; }
`

export const MaximumAmountMessage = () => (
  <Wrapper>
    <FormattedMessage id='modals.sendbch.maximumamountmessage' defaultMessage='Maximum amount exceeded. Use' />
    <MaximumAmountLink />
  </Wrapper>
)

export const InsufficientFundsMessage = () => (
  <FormattedMessage id='modals.sendbch.insufficientfundsnessage' defaultMessage="Insufficients funds" />
)
