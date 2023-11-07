import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/counterSlide'

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})

export default store