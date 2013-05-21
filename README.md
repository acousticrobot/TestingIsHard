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

  * docs/ **The slides from the talk**
  * node_modules/ **All the node packages (Javascript libraries) installed by npm**
  * test/ **This is where the magic happens!**
  * .travis.yml Specifies which versions of Ruby and node for [Travis ci](https://travis-ci.org/josankapo/TestingIsHard)
  * Gemfile **This is where the ruby gems (Ruby libraries) are declared**
  * Gemfile.lock **This locks the ruby gems down to the installed versions**
  * package.json **This is where the node packages are declared, the test command to run, and information about this package**
  * Rakefile **This is where the Ruby test command (handled by Rake) is declared**
  * README.md **[Markdown](http://daringfireball.net/projects/markdown/) README -- Your reading it right now!**