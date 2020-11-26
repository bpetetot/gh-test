function tranzformWord (str) {
  return 'Z' + str.slice(1)
}

function tranzform (str) {
  if (!str) return

  const rezult = tranzformWord(str)

  return rezult
}

module.exports = { tranzform }
