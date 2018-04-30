import React from 'react'
import styled from 'styled-components'

import { TextInput } from 'blockchain-info-components'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 40px;
`
const getErrorState = (meta) => (!meta.touched || meta.valid) ? 'initial' : 'invalid'

const TextBox = (field) => {
  const errorState = getErrorState(field.meta)

  return (
    <Container>
      <TextInput {...field.input} errorState={errorState} initial={field.meta.initial} placeholder={field.placeholder} />
    </Container>
  )
}

export default TextBox