var assert = require('assert'),

simpleCase = ["zero", "zero", "one", "zero"],

myArray = [ 0, 0, 0.0, "0", "zero", [0],
zero =(function (){return 0})(),
false, null, undefined
];

Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j]){
                a.splice(j--, 1);
            }
        }
    }
    return a;
};

describe('Array', function(){
    describe('UnequalArray', function(){

        it('should work for a simple test case', function(){
            assert.deepEqual(simpleCase.unique(), [ "zero", "one"]);
        })

        it('should return an !=== array', function(){
            assert.deepEqual(myArray.unique(),
            // Change this array so the test passes
            [ 0, 0, 0.0, "0", "zero", [0],
              zero =(function (){return 0})(),
              false, null, undefined
            ]);
        })
    })
})
