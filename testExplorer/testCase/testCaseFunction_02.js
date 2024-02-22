const {getMethod, postMethod, putMethod, patchMethod, deleteMethod} = require("../apiServer/apiObjects")

//test suites
describe("Test API restful", function () {
    //test case 1
    it("Test GET from Function", async function () {
        getMethod();
    });
    it("Test POST from Function", async function () {
        postMethod();
    });
    it("Test PUT from Function", async function () {
        putMethod();
    });
    it("Test PATCH from Function", async function () {
        patchMethod();
    });
    it("Test DELETE from Function", async function () {
        deleteMethod();
    });
});