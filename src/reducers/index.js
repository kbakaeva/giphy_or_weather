import {combineReducers} from 'redux'
import giphy from './giphy_reducers'
import weather from './weather_reducers'

const rootReducer = combineReducers({
    giphy,
    weather
})

export default rootReducer