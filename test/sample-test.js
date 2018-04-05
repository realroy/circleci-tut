const Assert = require('assert')

describe('Math', () => {
  describe('Add', () => {
    it('should return 2 when the math expression is 1 + 1', () => {
      Assert.equal(1 + 1, 2)
    })

    it('should return 3 when the math expression is 2 + 1', () => {
      Assert.equal(2 + 1, 3)
    })

    it('should return 4 when the math expression is 2 + 2', () => {
      Assert.equal(2 + 2, 4)
    })
  })
})