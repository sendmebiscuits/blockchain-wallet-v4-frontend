import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Field, reduxForm } from 'redux-form'
import styled from 'styled-components'

import { required } from 'services/FormHelper'
import { ADDRESS_FORM } from 'data/components/identityVerification/model'
import { AddressPropType } from 'data/modules/profile/model'

import media from 'services/ResponsiveService'
import { Button, Text, HeartbeatLoader } from 'blockchain-info-components'
import { FormGroup, FormItem, TextBox, SelectBox } from 'components/Form'
import { countryHasStates } from 'components/Form/SelectBoxRegion'
import {
  Form,
  ColLeft,
  ColRight,
  InputWrapper,
  PartnerHeader,
  PartnerSubHeader,
  ColRightInner
} from 'components/IdentityVerification'
import renderFaq from 'components/FaqDropdown'

const FormContainer = styled.div`
  margin-top: 25px;
`
const AddressForm = styled(Form)`
  display: flex;
  flex-direction: row;
  ${media.mobile`
    flex-direction: column;
  `};
`
const AddressFormGroup = styled(FormGroup)`
  ${media.mobile`
    flex-direction: column;
    div:first-of-type {
      margin-bottom: 10px;
    }
    div:last-of-type {
      div:last-of-type {
        margin-bottom: 15px;
      }
    }
  `};
`

const faqQuestions = [
  {
    question: (
      <FormattedMessage
        id='identityverification.address.faq.whycollect.question'
        defaultMessage='Why do you need this information?'
      />
    ),
    answer: (
      <FormattedMessage
        id='identityverification.address.faq.whycollect.answer'
        defaultMessage='To comply with government regulated anti-money laundering legislation, we need to obtain additional information in order to verify your identity.'
      />
    )
  }
]

const Address = ({
  invalid,
  submitting,
  supportedCountries,
  possibleAddresses,
  countryCode,
  address,
  onAddressSelect,
  onPostCodeChange,
  handleSubmit
}) => (
  <AddressForm onSubmit={handleSubmit}>
    <ColLeft>
      <InputWrapper>
        <PartnerHeader>
          <FormattedMessage
            id='identityverification.address.header'
            defaultMessage='Address Details'
          />
        </PartnerHeader>
        <PartnerSubHeader>
          <FormattedMessage
            id='identityverification.address.subheader'
            defaultMessage="There's so much we'd love to know about you, but we only need a few things."
          />
        </PartnerSubHeader>
        <FormContainer>
          <FormGroup>
            <FormItem>
              <Text size='14px' weight={400} style={{ marginBottom: '5px' }}>
                <FormattedMessage
                  id='identityverification.address.country'
                  defaultMessage='Country'
                />
              </Text>
              <Field
                name='country'
                validate={[required]}
                elements={supportedCountries}
                component={SelectBox}
                label={
                  <FormattedMessage
                    id='components.selectboxcountry.label'
                    defaultMessage='Select country'
                  />
                }
              />
            </FormItem>
          </FormGroup>
          <FormGroup>
            <FormItem>
              <Text size='14px' weight={400} style={{ marginBottom: '5px' }}>
                <FormattedMessage
                  id='identityverification.address.zipcode'
                  defaultMessage='Zip Code'
                />
              </Text>
              <Field
                name='postCode'
                onChange={onPostCodeChange}
                errorBottom
                validate={[required]}
                component={TextBox}
              />
            </FormItem>
          </FormGroup>
          <FormGroup>
            <FormItem>
              <Text size='14px' weight={400} style={{ marginBottom: '5px' }}>
                <FormattedMessage
                  id='identityverification.address.selectaddress'
                  defaultMessage='Select Address'
                />
              </Text>
              <Field
                name='address'
                elements={possibleAddresses}
                onChange={onAddressSelect}
                component={SelectBox}
                label={
                  <FormattedMessage
                    id='identityverification.address.selectaddress'
                    defaultMessage='Select Address'
                  />
                }
              />
            </FormItem>
          </FormGroup>
          {Boolean(address) && (
            <div>
              <FormGroup>
                <FormItem>
                  <Text
                    size='14px'
                    weight={400}
                    style={{ marginBottom: '5px' }}
                  >
                    <FormattedMessage
                      id='identityverification.address.address'
                      defaultMessage='Address'
                    />
                  </Text>
                  <Field
                    name='line1'
                    validate={[required]}
                    component={TextBox}
                    placeholder='Street Address'
                  />
                </FormItem>
              </FormGroup>
              <FormGroup>
                <FormItem>
                  <Text
                    size='14px'
                    weight={400}
                    style={{ marginBottom: '5px' }}
                  >
                    <FormattedMessage
                      id='identityverification.address.address2'
                      defaultMessage='Address 2'
                    />
                  </Text>
                  <Field
                    name='line2'
                    component={TextBox}
                    placeholder='Apartment, unit, floor, etc..'
                  />
                </FormItem>
              </FormGroup>
              <FormGroup>
                <FormItem>
                  <Text
                    size='14px'
                    weight={400}
                    style={{ marginBottom: '5px' }}
                  >
                    <FormattedMessage
                      id='identityverification.address.city'
                      defaultMessage='City'
                    />
                  </Text>
                  <Field
                    name='city'
                    validate={[required]}
                    component={TextBox}
                  />
                </FormItem>
              </FormGroup>
              <AddressFormGroup inline>
                <FormItem>
                  <Text
                    size='14px'
                    weight={400}
                    style={{ marginBottom: '5px' }}
                  >
                    {countryHasStates(countryCode) ? (
                      <FormattedMessage
                        id='identityverification.address.state'
                        defaultMessage='State'
                      />
                    ) : (
                      <FormattedMessage
                        id='identityverification.address.region'
                        defaultMessage='Region'
                      />
                    )}
                  </Text>
                  <Field
                    name='state'
                    validate={[required]}
                    countryCode={countryCode}
                    component={TextBox}
                  />
                </FormItem>
              </AddressFormGroup>
            </div>
          )}
        </FormContainer>
      </InputWrapper>
    </ColLeft>
    <ColRight>
      <ColRightInner>
        <Button
          uppercase
          nature='primary'
          type='submit'
          fullwidth
          disabled={!address || invalid || submitting}
        >
          {!submitting ? (
            <FormattedMessage
              id='identityverification.address.continue'
              defaultMessage='Continue'
            />
          ) : (
            <HeartbeatLoader height='20px' width='20px' color='white' />
          )}
        </Button>
        {renderFaq(faqQuestions)}
      </ColRightInner>
    </ColRight>
  </AddressForm>
)

Address.propTypes = {
  countryCode: PropTypes.string.isRequired,
  possibleAddresses: PropTypes.arrayOf(AddressPropType).isRequired,
  address: AddressPropType.isRequired,
  onAddressSelect: PropTypes.func.isRequired,
  onPostCodeChange: PropTypes.func.isRequired
}

export default reduxForm({
  form: ADDRESS_FORM,
  destroyOnUnmount: false
})(Address)