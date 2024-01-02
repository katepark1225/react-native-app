import { Provider } from 'react-redux'
import store from './redux/store'

const AppProvider = ({children}: any) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default AppProvider
