var add = require("../app/add")
var request = require("request");
var base_url = "http://localhost:3000/"
describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require("../app/hello_world");

    });

    afterAll(() => {
        server.close();
    });
    describe("GET /", () => {
        var data = {};
        beforeAll(() => {
            request.get()
        })
    })
});

//practice unit tests
describe("Add functionality", () => {
    it("calculates x + y = z", () => {
        expect(add(10,5)).toEqual(16);
    })

    it("calculates x + y != z", () => {
        expect(add(10,5)).not.toEqual(15);
    })
})