// The user can press b and it should beep right away
// The user can input any number from 1 to 9 and it should
// immediately output "setting timer for x seconds...", and
// beep after that number of seconds has passed
// The user can use ctrl + c to exit the program, 
//  at which point the program should say "Thanks for using me, ciao!" before terminating

const timer2 = require('../timer2');
const assert = require('chai').assert;

describe ('#timer2', () => {
  it ('should let user press b and it should beep right away', () => {
    assert.equal(timer2('b'), '\007')
  })
  it ('should let user input any number from 1 to 9', () => {
    assert.equal(timer2('1'), )
  })
  it ('should immediately output "setting timer for x seconds..."', () => {
    assert.equal(timer2('b'), '\007')
  })
  it ('should beep after that number of seconds has passed', () => {
    assert.equal(timer2('b'), '\007')
  })
  it ('should user ctrl c to exit the program at which point the program should say "Thanks for using me, ciao!" before terminating', () => {
    assert.equal(timer2('b'), '\007')
  })
})