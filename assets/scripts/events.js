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
const onLogIn = event => {
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

const onTeamEdit = (event) => {
  event.preventDefault()
  api.getTeams()
    .then(ui.getTeamEdit)
    .catch(ui.failure)
}

const onTeamSubmit = (event) => {
  event.preventDefault()
  api.getTeams()
    .then(ui.getTeamSubmit)
    .catch(ui.failure)
}

const onPlayerEdit = (event) => {
  event.preventDefault()
  api.getTeams()
    .then(ui.getPlayerEdit)
    .catch(ui.failure)
}

const onPlayerSubmit = (event) => {
  event.preventDefault()
  .val
  api.getTeams()
    .then(ui.getPlayerSubmit)
    .catch(ui.failure)
}

// const onGetPlayer = (event) => {
//   event.preventDefault()
//   api.getTeams()
//     .then(ui.getPlayerSuccess)
//     .catch(ui.failure)
// }
//
// const onDeleteTeam = (event) => {
//   event.preventDefault()
//   ui.deletePlayer()
//   api.gBooks()
// }
//
// const onDeletePlayer = (event) => {
//   event.preventDefault()
//   ui.deletePlayer()
//   api.gBooks()
// }


const addHandlers = () => {
  $('#getTeamsButton').on('click', onGetTeams)
  $('#getPlayerButton').on('click', onGetPlayers)
  $('#content').on('click', 'button', OnClickRemove)
}

module.exports = {
  onSignUp,
  onLogIn,
  onChangePassword,
  onSignOut,
  addHandlers,
  onTeamEdit,
  onTeamSubmit,
  onPlayerEdit,
  onPlayerSubmit
}

// $('#sign-up').on('submit', event.onSignUp)
// $('#log-in').on('submit', event.onLogIn)
// $('#sign-out').on('submit', event.onSign)
// $('#change-password').on('submit', event.changePassword)
