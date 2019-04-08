import { createSelector } from 'reselect'

const getSession = (store) => store.session

const usernameSelector = createSelector(
  getSession,
  (session) => (session.username)
)

export default {
  usernameSelector,
}