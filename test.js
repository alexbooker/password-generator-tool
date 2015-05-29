var PasswordGenerator = require('./');

exports.passwordLength = function(test){
  test.expect(1);
  var password = PasswordGenerator.generate();
  test.equal(password.length, 5);
  test.done();
};

exports.passwordLength2 = function(test){
  test.expect(1);
  var expected = 3;
  var password = PasswordGenerator.generate(expected);
  test.equal(password.length, expected);
  test.done();
};

exports.containsOnlyLowercaseAndNumbersByDefault = function(test){
  test.expect(1);
  var password = PasswordGenerator.generate();
  test.ok(/^[a-z0-9]*$/.test(password))
  test.done();
};