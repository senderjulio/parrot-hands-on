import { Provider } from 'react-redux'
import './App.css'
import { persistor, store } from './Components/store'
import AppRoutes from './routes'
import { PersistGate } from 'redux-persist/integration/react'


function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading = {null}>
        <AppRoutes/>
      </PersistGate>

    </Provider>

  )
}

export default App
