const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', () => {

  it('should be divisible by 15', () => {
    [15, 30, 45].map(num => {
      expect(fizzBuzzer(num)).to.equal('fizz-buzz');
    });
  });

  it('should be divisible by 3', () => {
    [3, 6, 9, 12].map(num => {
      expect(fizzBuzzer(num)).to.equal('fizz');
    });
  });

  it('should be divisible by 5', () => {
    [5, 10, 20].map(num => {
      expect(fizzBuzzer(num)).to.equal('buzz');
    });
  });

  it('should return number if not divisible by 3 or 5', () => {
    [1, 2, 4, 7].map(num => {
      expect(fizzBuzzer(num)).to.equal(num);
    });
  });

  it('should produce error if input isn\'t number', () => {
    const badInputs = [true, false, 'cat', ()=>{}, [1, 2, 3]];
    badInputs.forEach(num => {
      expect( () => {
          fizzBuzzer(num);
      }).to.throw(Error);
    });
  });
});