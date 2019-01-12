import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import MyAppReducer from './MyAppReducer'

const reducer = combineReducers({
  MyAppReducer
})

export default reducer