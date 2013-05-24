/*
    Using Chai BDD / TDD assertion library
    See http://chaijs.com/guide/styles/ for these tests
 */

// Mocha assert:
var assert = require('assert');

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should()


var beverages = { tea: [ 'chai', 'matcha', 'oolong' ],
                  coffee: [ 'kona', 'sumatra', 'blue mountain'] };

describe('Mocha assert method', function(){
    it('should work with or without Chai', function(){
        assert.equal(beverages["tea"][1],"matcha");
    })
});

// An Example of Chai Assert

describe('Chai Assert', function(){
    it('should work within a mocha test', function(){
        assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
    })

});

// An example of Chai Expect

describe('Chai Expect', function(){
    it('should work within a mocha test', function(){
        expect(beverages).to.have.property('tea').with.length(3);
    })
});

// An example of Chai Should

describe('Chai Should', function(){
    it('should work within a mocha test', function(){
        beverages.should.have.property('tea').with.length(3);
    })
});

// You need to add chai in order to add a property

var chai = require('chai');

chai.Assertion.addProperty('refreshing', function() {
    var refreshing = [];
    for(var beverage in beverages){
        for (var i = 0; i < beverages[beverage].length; i++) {
            refreshing.push(beverages[beverage][i]);
        };
    }
    this.assert(
        refreshing.should.include.members(this._obj),
        'expected #{this} to be a beverage',
        'expected #{this} to not be a beverage'
    );
});

describe('Chai Lanugage chain', function(){
    it ('should allow for readability and flexible language', function(){
        beverages.should.be.an('object').with.property('tea')
            .that.is.an('array').and.include.members(['chai','matcha']);
        ['chai','kona'].should.be.refreshing;
    })
})

