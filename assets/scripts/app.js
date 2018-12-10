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

  $('#allTeamsForm').on('submit', events.onGetTeams)
  $('#createTeamForm').on('submit', events.onGetTeamCreate)
  $('#updateTeamForm').on('submit', events.onGetTeamEdit)
  $('#allPlayerForm').on('submit', events.onGetPlayersSuccess)
  $('#createPlayerForm').on('submit', events.onGetPlayersCreate)
  $('#updatePlayerForm').on('submit', events.onGetPlayerEdit)
  $('#deleteTeamForm').on('submit', events.onDeleteTeam)
  $('#deletePlayerForm').on('submit', events.onDeletePlayer)
})
