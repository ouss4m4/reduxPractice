import { combineReducers } from 'redux';
import { Text } from './Text';
import { Translate } from './Translate';
import { Todos } from './Todos'
import { news } from './news'

export const rootReducer = combineReducers({
    Text,
    Translate,
    Todos,
    news
})






