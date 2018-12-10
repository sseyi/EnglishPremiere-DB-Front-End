'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')
// const copyData = data => {
//   store.game = data.game
// }

const onSignUp = event => {
  console.log('in onSignUp')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // takes this data and sends it to our server
  // using an HTTP request (POST)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onChangePassword = event => {
  console.log('in onChangePassword')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // takes this data and sends it to our server
  // using an HTTP request (POST)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignIn = event => {
  console.log('in onSignIn')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  // takes this data and sends it to our server
  // using an HTTP request (POST)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signUpFailure)
}

const onSignOut = event => {
  console.log('out onLogOut')
  event.preventDefault()
  const data = getFormFields(event.target)
  // takes this data and sends it to our server
  // using an HTTP request (POST)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onGetTeams = (event) => {
  event.preventDefault()
  api.getTeams()
    .then(ui.getTeamsSuccess)
    .catch(ui.failure)
}

const onUpdateTeam = (event) => {
  event.preventDefault()
  api.getTeams()
    .then(ui.getTeamEdit)
    .catch(ui.failure)
}

const onGetTeamCreate = (event) => {
  event.preventDefault()
  api.getTeams()
    .then(ui.getTeamCreate)
    .catch(ui.failure)
}

const onGetPlayers = (event) => {
  event.preventDefault()
  api.getTeams()
    .then(ui.getPlayersSuccess)
    .catch(ui.failure)
}

const onGetPlayersCreate= (event) => {
  event.preventDefault()
  console.log('i have a problem')
  api.getTeams()
    .then(ui.getPlayerCreate)
    .catch(ui.failure)
}

const onUpdatePlayer = (event) => {
  event.preventDefault()
  console.log('i have a problem')
  api.getTeams()
    .then(ui.getPlayerEdit)
    .catch(ui.failure)
}

const onDeleteTeam = (event) => {
  event.preventDefault()
    .then(ui.deleteTeam)
    .catch(ui.failure)
}

const onDeletePlayer = (event) => {
  event.preventDefault()
    .then(ui.deletePlayer)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getTeamsButton').on('click', onGetTeams)
  $('#getPlayerButton').on('click', onGetPlayers)
  $('#content').on('click', 'button', OnClickRemove)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onGetTeams,
  onGetTeamCreate,
  onUpdateTeam,
  onDeleteTeam,
  onGetPlayersCreate,
  onUpdatePlayer,
  onDeletePlayer,
  addHandlers
}

// $('#sign-up').on('submit', event.onSignUp)
// $('#log-in').on('submit', event.onLogIn)
// $('#sign-out').on('submit', event.onSign)
// $('#change-password').on('submit', event.changePassword)
