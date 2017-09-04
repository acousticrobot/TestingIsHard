[![Build Status](https://travis-ci.org/josankapo/TestingIsHard.png)](https://travis-ci.org/josankapo/TestingIsHard)

#Testing Is Hard: TDD/BDD in Ruby and Javascript

*Slides and examples from talk at Bluewater 05/24/13*

## Help! These tests are failing! Make them pass!

### To test the Ruby tests:

from the root directory in the console, run:

    rake

*note, this is the same as running:*

    ruby test/index.rb

### To test the Javascript tests:
*(make sure you have [node installed](http://nodejs.org/))*

from the root directory in the console, run:

    npm test

*note, this is the same as running:*

    mocha --reporter nyan

### What are all these directories and folders?

  * docs/ The slides from the talk
  * node_modules/ All the node packages (Javascript libraries) installed by npm
  * test/ This is where the magic happens!
  * .travis.yml Specifies which versions of Ruby and node for [Travis ci](https://travis-ci.org/josankapo/TestingIsHard)
  * Gemfile This is where the ruby gems (Ruby libraries) are declared
  * Gemfile.lock This locks the ruby gems down to the installed versions
  * package.json This is where the node packages are declared, the test command to run, and information about this package
  * Rakefile This is where the Ruby test command (handled by Rake) is declared
  * README.md [Markdown](http://daringfireball.net/projects/markdown/) README -- Your reading, dummkopf!

### Additional Links

#### Talk Notes
  * [Extreme Progamming](http://www.extremeprogramming.org/rules/unittests.html)
  * [javascript equality table](https://github.com/dorey/JavaScript-Equality-Table)
  * [Dan North](http://dannorth.net/introducing-bdd/)

#### Documentation
  * [Test Unit rdoc](http://ruby-doc.org/stdlib-2.0/libdoc/test/unit/rdoc/)
  * [Learning Ruby by Testing](http://www.clarkware.com/blog/2005/03/18/ruby-learning-test-1-are-you-there-world)
  * [Rails Testing Guide](http://guides.rubyonrails.org/)
  * [Ruby Koans]()

#### Frameworks
  * [node](http://nodejs.org/)
  * [npm](https://npmjs.org/)
  * [QUint](http://qunitjs.com/) - unit testing framework
  * [Mocha](https://mochajs.org/) - test framework (async, mocks)
  * [Chai](http://chaijs.com/) - BDD / TDD assertion library
  * [Chai Plugins](http://chaijs.com/plugins) highly extendable
  * [Jasmine](https://jasmine.github.io/) - BDD testing framework
  * [Travis](Travis-ci.org)
  * [rubygems.rg](http://rubygems.org/gems/)
  * [Capybara with Given/When/Then steps in acceptance testing](http://railsware.com/blog/2012/01/08/capybara-with-givenwhenthen-steps-in-acceptance-testing/)
  * [spork](https://github.com/sporkrb/spork-rails)
  * [zeus](https://github.com/burke/zeus)

