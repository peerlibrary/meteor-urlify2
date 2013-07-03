Tinytest.add('meteor-urlify2', function (test) {
  var isDefined = false;
  try {
    URLify2;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "URLify is not defined");
  test.equal(URLify2('Işık ılık süt iç'), 'isik-ilik-sut-ic');
  test.equal(URLify2('ČĆŽŠĐ čćžšđ'), 'cczsdj-cczsdj');
});