/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) === true) {
      throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  var expect = chai.expect;
 
  it(FILL_ME_IN, function() {
    expect(detectNetwork('38345678901234')).to.equal('Diner\'s Club');
  }); // has a prefix of 38 and a length of 14

  it(FILL_ME_IN, function() {
    expect(detectNetwork('39345678901234')).to.equal('Diner\'s Club');
  }); // has a prefix of 39 and a length of 14

});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var expect = chai.expect;
 
  it(FILL_ME_IN, function() {
    expect(detectNetwork('343456789012345')).to.equal('American Express');
  }); // has a prefix of 34 and a length of 15

  it(FILL_ME_IN, function() {
    expect(detectNetwork('373456789012345')).to.equal('American Express');
  }); // has a prefix of 37 and a length of 15

});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var expect = chai.expect;
 
  it(FILL_ME_IN, function() {
    expect(detectNetwork('4123456789012')).to.equal('Visa');
  }); // has a prefix of 4 and a length of 13
  
  it(FILL_ME_IN, function() {
    expect(detectNetwork('4123456789012345')).to.equal('Visa');
  }); // has a prefix of 4 and a length of 16
  
  it(FILL_ME_IN, function() {
    expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  }); // has a prefix of 4 and a length of 19

});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
  
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });

  it(FILL_ME_IN, function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  }); //has a prefix of 55 and a length of 16

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  // var should = chai.should();
  
  // it('has a prefix of 54 and a length of 16', function() {
  //   detectNetwork('5412345678901234').should.equal(FILL_ME_IN);
  // });
 
  // it('has a prefix of 55 and a length of 16', function() {
  //   detectNetwork('5512345678901234').should.equal(FILL_ME_IN);
  // })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;
 
  it(FILL_ME_IN, function() {
    expect(detectNetwork('6500888899995555')).to.equal('Discover');
  });  // 65 with a length of 16

  it(FILL_ME_IN, function() {
    expect(detectNetwork('6500888899995555888')).to.equal('Discover');
  }); // 65 with a length of 19

  it(FILL_ME_IN, function() {
    expect(detectNetwork('6011888899995555')).to.equal('Discover');
  });  // 6011 with a length of 16

  it(FILL_ME_IN, function() {
    expect(detectNetwork('6011888899995555888')).to.equal('Discover');
  }); // 6011 with a length of 19

  it(FILL_ME_IN, function() {
    expect(detectNetwork('6441888899995555')).to.equal('Discover');
  }); // 644 with a length of 16
  it(FILL_ME_IN, function() {
    expect(detectNetwork('6451888899995555')).to.equal('Discover');
  }); // 645 with a length of 16
  it(FILL_ME_IN, function() {
    expect(detectNetwork('6461888899995555')).to.equal('Discover');
  }); // 646 with a length of 16
  it(FILL_ME_IN, function() {
    expect(detectNetwork('6471888899995555')).to.equal('Discover');
  }); // 647 with a length of 16
  it(FILL_ME_IN, function() {
    expect(detectNetwork('6481888899995555')).to.equal('Discover');
  }); // 648 with a length of 16
  it(FILL_ME_IN, function() {
    expect(detectNetwork('6491888899995555')).to.equal('Discover');
  }); // 649 with a length of 16

  it(FILL_ME_IN, function() {
    expect(detectNetwork('6441888899995555888')).to.equal('Discover');
  }); // 644 with a length of 19
  it(FILL_ME_IN, function() {
    expect(detectNetwork('6451888899995555888')).to.equal('Discover');
  }); // 645 with a length of 19
  it(FILL_ME_IN, function() {
    expect(detectNetwork('6461888899995555888')).to.equal('Discover');
  }); // 646 with a length of 19
  it(FILL_ME_IN, function() {
    expect(detectNetwork('6471888899995555888')).to.equal('Discover');
  }); // 647 with a length of 19
  it(FILL_ME_IN, function() {
    expect(detectNetwork('6481888899995555888')).to.equal('Discover');
  }); // 648 with a length of 19
  it(FILL_ME_IN, function() {
    expect(detectNetwork('6491888899995555888')).to.equal('Discover');
  }); // 649 with a length of 19

});

describe('Maestro', function() {
  var expect = chai.expect;
 
  it(FILL_ME_IN, function() {
    expect(detectNetwork('501888889999')).to.equal('Maestro');
  });  // 5018 with a length of 12
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5018888899994')).to.equal('Maestro');
  });  // 5018 with a length of 13
  it(FILL_ME_IN, function() {
    expect(detectNetwork('50188888999944')).to.equal('Maestro');
  });  // 5018 with a length of 14
  it(FILL_ME_IN, function() {
    expect(detectNetwork('501888889999444')).to.equal('Maestro');
  });  // 5018 with a length of 15
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5018888899994444')).to.equal('Maestro');
  });  // 5018 with a length of 16
  it(FILL_ME_IN, function() {
    expect(detectNetwork('50188888999944446')).to.equal('Maestro');
  });  // 5018 with a length of 17
  it(FILL_ME_IN, function() {
    expect(detectNetwork('501888889999444466')).to.equal('Maestro');
  });  // 5018 with a length of 18
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5018888899994444666')).to.equal('Maestro');
  });  // 5018 with a length of 19

  it(FILL_ME_IN, function() {
    expect(detectNetwork('502088889999')).to.equal('Maestro');
  });  // 5018 with a length of 12
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5020888899994')).to.equal('Maestro');
  });  // 5018 with a length of 13
  it(FILL_ME_IN, function() {
    expect(detectNetwork('50208888999944')).to.equal('Maestro');
  });  // 5018 with a length of 14
  it(FILL_ME_IN, function() {
    expect(detectNetwork('502088889999444')).to.equal('Maestro');
  });  // 5018 with a length of 15
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5020888899994444')).to.equal('Maestro');
  });  // 5018 with a length of 16
  it(FILL_ME_IN, function() {
    expect(detectNetwork('50208888999944446')).to.equal('Maestro');
  });  // 5018 with a length of 17
  it(FILL_ME_IN, function() {
    expect(detectNetwork('502088889999444466')).to.equal('Maestro');
  });  // 5018 with a length of 18
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5020888899994444666')).to.equal('Maestro');
  });  // 5018 with a length of 19

  it(FILL_ME_IN, function() {
    expect(detectNetwork('503888889999')).to.equal('Maestro');
  });  // 5018 with a length of 12
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5038888899994')).to.equal('Maestro');
  });  // 5018 with a length of 13
  it(FILL_ME_IN, function() {
    expect(detectNetwork('50388888999944')).to.equal('Maestro');
  });  // 5018 with a length of 14
  it(FILL_ME_IN, function() {
    expect(detectNetwork('503888889999444')).to.equal('Maestro');
  });  // 5018 with a length of 15
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5038888899994444')).to.equal('Maestro');
  });  // 5018 with a length of 16
  it(FILL_ME_IN, function() {
    expect(detectNetwork('50388888999944446')).to.equal('Maestro');
  });  // 5018 with a length of 17
  it(FILL_ME_IN, function() {
    expect(detectNetwork('503888889999444466')).to.equal('Maestro');
  });  // 5018 with a length of 18
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5038888899994444666')).to.equal('Maestro');
  });  // 5018 with a length of 19

  it(FILL_ME_IN, function() {
    expect(detectNetwork('630488889999')).to.equal('Maestro');
  });  // 5018 with a length of 12
  it(FILL_ME_IN, function() {
    expect(detectNetwork('6304888899994')).to.equal('Maestro');
  });  // 5018 with a length of 13
  it(FILL_ME_IN, function() {
    expect(detectNetwork('63048888999944')).to.equal('Maestro');
  });  // 5018 with a length of 14
  it(FILL_ME_IN, function() {
    expect(detectNetwork('630488889999444')).to.equal('Maestro');
  });  // 5018 with a length of 15
  it(FILL_ME_IN, function() {
    expect(detectNetwork('6304888899994444')).to.equal('Maestro');
  });  // 5018 with a length of 16
  it(FILL_ME_IN, function() {
    expect(detectNetwork('63048888999944446')).to.equal('Maestro');
  });  // 5018 with a length of 17
  it(FILL_ME_IN, function() {
    expect(detectNetwork('630488889999444466')).to.equal('Maestro');
  });  // 5018 with a length of 18
  it(FILL_ME_IN, function() {
    expect(detectNetwork('6304888899994444666')).to.equal('Maestro');
  });  // 5018 with a length of 19

});

describe('should support China UnionPay')
describe('should support Switch')