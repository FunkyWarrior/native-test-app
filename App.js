import React from 'react';
import {Provider} from 'react-redux'
import {store} from './src/appData/store'
import {AppContainer} from './src/appData/AppContainer'


export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
}
