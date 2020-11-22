function tranzformWord (str) {
  return 'Z' + str.slice(1)
}

function tranzformSentence(str) {
  return str.split(' ').map(tranzformWord).join(' ')
}

function tranzform (str) {
  if (!str) return

  return tranzformSentence(str)
}

module.exports = { tranzform }
