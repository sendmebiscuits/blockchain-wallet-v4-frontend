import * as AT from './actionTypes'

export {
  arrayInsert,
  arrayMove,
  arrayPop,
  arrayPush,
  arrayRemove,
  arrayRemoveAll,
  arrayShift,
  arraySplice,
  arraySwap,
  arrayUnshift,
  autofill,
  blur,
  change,
  destroy,
  focus,
  initialize,
  registerField,
  reset,
  setSubmitFailed,
  setSubmitSucceeded,
  startAsyncValidation,
  startSubmit,
  stopAsyncValidation,
  stopSubmit,
  submit,
  touch,
  unregisterField,
  untouch
} from 'redux-form'

export const change2 = (form, field, value) => ({ type: AT.CHANGE2, payload: { form, field, value } })
