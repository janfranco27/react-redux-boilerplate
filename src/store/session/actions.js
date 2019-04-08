const NS = 'DEGREES_TITLES_SESSION'

export const actionTypes = {
  LOGIN: `${NS}/LOGIN`,
  LOGIN_SUCCESS: `${NS}/LOGIN_SUCCESS`
}

const actions = {
  login: () => ({ type: actionTypes.LOGIN }),
  loginSuccess: (payload) => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload
  })
}

export default actions