const store = require('./store.js')

const clearText = () => {
  $('form').trigger('reset')
}

const signUpSuccess = data => {
  $('.sign-up-message').html('<p class="blue">Sign Up Successful!</p>')
  console.log('signUpSuccess ran. Data is:', data)
}

const signUpFailure = error => {
  $('.sign-up-message').html('<p class="red">Sign UP Successful!</p>')
  console.log('signUpFailure ran. Error is:', error)
}
const logInSuccess = data => {
  $('.sign-in-message').html('<p class="blue">Sign In Successful!</p>')
  store.user = data.user
  console.log('signInSuccess ran. Data is:', data)
}

const logInFailure = error => {
  $('.sign-in-message').html('<p class="red">Sign In Unsuccessful</p>')
  console.log('signInFailure ran. Error is:', error)
}
const changePasswordSuccess = data => {
  $('.sign-in-message').html('<p class="blue">Sign In Successful!</p>')
  store.user = data.user
  console.log('changePasswordSuccess ran. Data is:', data)
}

const changePasswordFailure = error => {
  $('.change-password-message').html('<p class="red">Change Password Unsuccessful</p>')
  console.log('changePasswordFailure ran. Error is:', error)
}

  // const teamsTemplate = require('../templates/Teams.handlebars')
  //
  // const getTeamsSuccess = (data) => {
  //   console.log(data)
  //   const showTeamsHtml = teamsTemplate({ teams: data.teams })
  //   $('.content').html(showTeamsHtml)
  // }


// const getPlayersSuccess = (data) => {
//   console.log(data)
//   const showsPlayersHtml = playersTemplate({ players: data.players })
//   $('.content').html(showsPlayersHtml)
// }


module.exports = {
  signUpSuccess,
  signUpFailure,
  logInSuccess,
  logInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  clearText,
  // getTeamsSuccess,
  // getPlayersSucess
}
