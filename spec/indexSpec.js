var request = require("request");
var base_url = "http://localhost:3000/"

describe("HTML page", () => {
    it("Seeing if an h1 tag exists", (done) => {
        request.get(base_url+'/index', function(error, response, body) {
            //assert
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});