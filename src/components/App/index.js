import { connect } from 'react-redux'
import sessionActions from '../../store/session/actions'
import sessionSelectors from '../../store/session/selectors'
import App from './App'

const mapStateToProps = (state) => ({
  username: sessionSelectors.usernameSelector(state),
})

const mapDispatchToProps = {
  login: sessionActions.login
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
