var Add = require("../app/hello_world").Add;
var Mult = require("../app/hello_world").Mult;
var request = require("request");
var base_url = "http://localhost:3000/"
describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require("../app/app");

    });

    // afterAll(() => {
    //     server.close();
    // });
    describe("GET /", () => {
        var data = {};
        beforeAll((done) => {
            request.get(base_url, (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body).toBe("<h1>Jaime</h1>");
        })
    });
});


//practice unit tests
describe("Add functionality", () => {
    it("calculates x + y = z", () => {
        expect(Add(10,5)).toEqual(15);
        console.log("I ran add");
    })

    it("calculates x + y != z", () => {
        expect(Add(10,5)).not.toEqual(12);
        console.log("I ran not equal to")
    })
});

describe("Multiplication tests", () => {
    it("calculates x * y = z", () => {
        expect(Mult(5,10)).toEqual(50);
        console.log("I ran multiply")
    });
})