'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('submit', events.onSignOut)
  $('#change-password').on('submit', events.changePassword)

  $('#allTeamsForm').on('click', events.onGetTeams)
  $('#createTeamForm').on('click', events.onGetTeamCreate)
  $('#updateTeamForm').on('click', events.onGetTeamEdit)
  $('#allPlayerForm').on('click', events.onGetPlayersSuccess)
  $('#createPlayerForm').on('click', events.onGetPlayersCreate)
  $('#updatePlayerForm').on('click', events.onGetPlayerEdit)
})
