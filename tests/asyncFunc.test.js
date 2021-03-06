const chai = require("chai");
const expect = chai.expect;
// This is just an async func that takes in a bool
// and calls a callback that returns a some message
// depending on the bool value
function someMadeUpAsyncFunc(boolValue, cb){
    setTimeout(function(){
        cb(boolValue ? "You get a sweet :)" : "You get nothing!!");
    },0);
}

// Added the `only` tag to have only this set of tests to run
describe.only("AsyncTest",function(){
    it("should return `You get a sweet :)` if `true` is passed in",function(done){
        someMadeUpAsyncFunc(true,function(sweetcheck){
            expect(sweetcheck).to.equal("You get a sweet :)");
            done();
        });
    });
    it("should return `You get nothing!!` if `false` is passed in",function(done){
        someMadeUpAsyncFunc(false,function(sweetcheck){
            expect(sweetcheck).to.equal("You get nothing!!");
            done();
        });
    });
});

chai.use(require("chai-as-promised"));
// This is just an async func that takes in a bool
// and that returns a promise
function someMadeUpAyncFuncPromise(boolValue, cb) {
    return new Promise(function(resolve){
      setTimeout(function() {
        resolve(boolValue ? "You get a sweet :)" : "You get nothing!!");
      }, 0);
    })
  }

  // Added the `only` tag to have only this set of tests to run
  describe.only("AsyncTestPromise", function()  {
      it("should return `You get a sweet :)` if `true` is passed in with Promise",function(){
          expect(someMadeUpAyncFuncPromise(true)).to.eventually.equal("You get a sweet :)");
      });
  });