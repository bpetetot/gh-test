const { tranzform } = require('./tranzformer')

test('should return undefined when falsy input', () => {
  expect(tranzform()).toBeUndefined()
})

test('should replace first word letter by a Z', () => {
  expect(tranzform('Hello')).toEqual('Zello')
})

test('should replace first sentence letter by a Z s', () => {
  expect(tranzform('Hello world')).toEqual('Zello Zorld')
})
