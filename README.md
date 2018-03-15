# "Software Testers and QA Experts of Barcelona" meetup

This is the source code for my talk [Am I responsive? Test me!](https://www.meetup.com/es-ES/BarcelonaTesters/events/248186328) given at "Software Testers and QA Experts of Barcelona" meetup.

The slides of the talk are available at [slideshare](https://www.slideshare.net/FernandoMartnGil/aftertest-barcelona-am-i-responsive-test-me-galen-framework).

## Requirements
* Galen 2.3.6
* Node 6.11.3
* Npm 3.10.10

## Init
* Download [Geckodriver](https://github.com/mozilla/geckodriver) binary to `lib` dir.
* Install gulp.
```
npm install -g gulp
```
* Install dependencies.
```
npm install
```

## Run tests

```
$ gulp test
```

## View reports

```
$ gulp reports
```