
const store = require('./store.js')
const config = require('./config.js')

const signUp = data => {
console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const logIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createTeam = function (data) {
  return $.ajax({
    url: config.apiUrl + '/team',
    method: 'POST'
  })
}

const createPlayer = function (data) {
  return $.ajax({
    url: config.apiUrl + '/player',
    method: 'POST'
  })
}

const getTeam = function () {
  return $.ajax({
    url: config.apiUrl + '/team',
    method: 'GET'
  })
}

const getPlayers = function (teamId) {
  return $.ajax({
    url: config.apiUrl + '/players/' + teamId,
    method: 'GET'
  })
}

const updateTeam = function () {
  return $.ajax({
    url: config.apiUrl + '/team',
    method: 'PATCH'
  })
}

const updatePlayer = function (data) {
  return $.ajax({
    url: config.apiUrl + '/player/' + teamId,
    method: 'PATCH'
  })
}

const deleteTeam = function () {
  return $.ajax({
    url: config.apiUrl + '/team',
    method: 'DELETE'
  })
}

// const deletePlayer = function (data) {
//   return $.ajax({
//     // url: config.apiUrl + '/player/' + teamId,
//     method: 'DELETE'
//   })
// }



module.exports = {
  signUp,
  logIn,
  signOut,
  createTeam,
  createPlayer,
  getTeam,
  getPlayers,
  updateTeam,
  updatePlayer,
  deleteTeam
  // deletePlayer

}
