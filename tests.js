Tinytest.add('urlify2', function (test) {
  var isDefined = false;
  try {
    URLify2;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "URLify is not defined");
  test.isTrue(Package.urlify2.URLify2, "Package.urlify2.URLify2 is not defined");

  test.equal(URLify2('Işık ılık süt iç'), 'isik-ilik-sut-ic');
  test.equal(URLify2('ČĆŽŠĐ čćžšđ'), 'cczsdj-cczsdj');
  test.equal(URLify2('-word-'), 'word');
  test.equal(URLify2('long test with many words', 10), 'long-test');
  test.equal(URLify2('onelongwordtoolongformaxlength', 10), 'onelongwor');
});
