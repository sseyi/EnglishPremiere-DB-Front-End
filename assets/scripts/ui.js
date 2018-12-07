'use strict'
$('#signInResults ').hide()
const signUpSuccess = data => {
  $('#message').text('Signed up succesfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is:', data)
}

const signUpFailure = error => {
  $('#message').text('Error on Sign Up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signUpFailure ran. Error is:', error)
}
const signInSuccess = data => {
  $('#message').text('Signed in succesfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#results2').show()
  console.log('signInSuccess ran. Data is:', data)
}

const signInFailure = error => {
  $('#message').text('Error on Sign In')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signInFailure ran. Error is:', error)
}

const getTeamsSuccess = response => {
  $('#showTeamResults').html('')
  console.log(response)
  response.teams.forEach(function (team) {
    let playerHTML = ''
    team.players.forEach(function (player) {
      playerHTML += (`
        <h4>first_name/${player.first_name} </h4>
      <p> last_name/${player.last_name} </p>
        <p> player/${player.age} </p>
      <p> position/${player.position} </p>
      <p> goals/${player.goals} </p>
    `)
    })
    const teams = (`
      <h4> ${team.name} </h4>
        <p> ${team.standings} </p>
      <p> ${team.location} </p>
      <p> ${playerHTML} </p>
    `)
    $('#showTeamResults').append(teams)
  })
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  getTeamsSuccess
}
