var request = require("request");
var base_url = "http://localhost:3000/"


describe("Hello World Server", function() {
    describe("GET /", function() {
    //    beforeEach(function(done){
    //        setTimeout(function(){
    //            request.get(base_url, function(error, response,body){
    //             done();
    //            }, 100);
    //        });
    //    });
    //     it("returns status code 200", function(done) {
    //        //arrange and act
    //        request.get(base_url, function(error, response, body) {   //request is node_module we installed
    //            //assert
    //            expect(response.statusCode).toBe(200);
    //            done();   //since node.js is asynch, use a done callback to synch it() with its expect()
    //        });
    //    });

        
        
        // it("returns Hello World", function() {
        //         expect(body).toBe("Hllo World");
        // });
        
    });
    
    describe("GET /jasmine", () => {
        it("returns status code 200", (done) => {
            request.get(base_url + "/jasmine", function(error, response, body) {
                expect(body).toBe("200");
                done();
            });
        });
    });

});