const app = require("./app")
const supertest = require("supertest")
const request = supertest(app)

describe("/api endpoint", () => {
    it("should return a response", async () => {
        const response = await request.get("/api")
        expect(response.status).toBe(200)
        expect(response.text).toBe("Hello world");
    })
})