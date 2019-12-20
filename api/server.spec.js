const request = require("supertest");

const server = require("./server.js");

const router = require('../auth/auth-router.js')

describe("server.js", function () {
    describe("environment", function () {
        it("should set environment to testing", function () {
            expect(process.env.DB_ENV).toBe("testing");
        });
    });

    describe("GET /", function () {
        it("should return a 200 OK", function () {

            return request(server)
                .get("/")
                .then(res => {
                    expect(res.status).toBe(200);
                });

        });

        it("should return a JSON", function () {
            return request(server)
                .get("/")
                .then(res => {
                    expect(res.type).toMatch(/json/i);
                });
        });

        describe("POST /login", function () {
            it("should return a 200 OK", function () {

                return request(router)
                    .post("/login")
                    .then(res => {
                        expect(res.status).toBe(200);
                    });

            });

            it("should return a JSON", function () {
                return request(server)
                    .get("/")
                    .then(res => {
                        expect(res.type).toMatch(/json/i);
                    });
            });
        });
        describe("POST /register", function () {
            it("should return a 201 OK", function () {

                return request(server)
                    .get("/")
                    .then(res => {
                        expect(res.status).toBe(201);
                    });
            });
            it("should return a JSON", function () {
                return request(server)
                    .get("/")
                    .then(res => {
                        expect(res.type).toMatch(/json/i);
                    });
            });
        });
    });
});