urlify2
=======

Adding this package to your [Meteor](http://www.meteor.com/) application adds `URLify2` function into the global scope,
which you can use to make slugs from Unicode strings. Resulting slugs are lower space and spaces are replaced with `-`.
It works both on server and client.

Based on Django's [urlify](https://github.com/django/django/blob/master/django/contrib/admin/static/admin/js/urlify.js)
with character maps for additional languages and fallback to UTF-8 normalization string cleanup based on
[django-missing](https://github.com/mitar/django-missing) and work by [Richard Ishida](http://rishida.net/).

Both client and server side.

Installation
------------

```
meteor add peerlibrary:urlify2
```
