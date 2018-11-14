const chai = require("chai");
const expect = chai.expect;
//import sinon
const sinon = require("sinon");
//import our getIndexPage function
const indexPage = require('../../controllers/app.controller.js');

describe("getIndexPage",function(){
    it("should return index page",function(){
        let req={};
        // Have `res` have a send key with a function value coz we use `res.send()` in our func
        let res = {
            send: sinon.spy()
        }
        indexPage.getIndexPage(req,res);
        // let's see what we get on res.send
        console.log(res.send);
        // `res.send` called once
        expect(res.send.calledOnce).to.be.true;
        // expect to get argument `bla` on first call
        expect(res.send.firstCall.args[0]).to.equal("bla");
    });
});