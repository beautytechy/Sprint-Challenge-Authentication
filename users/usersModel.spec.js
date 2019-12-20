const Users = require("./users-model");
const db = require('../database/dbConfig.js')

describe('users model', function () {
    beforeEach(async () => {
        await db('users').truncate();
    })
    describe('insert()', function() {
        it('should add the user to the database', async function() {
         await Users.insert({name: "SprintJestTest1"})
         await Users.insert({name: "SprintJestTest2"});

         const users = await db('users');
         expect(users).toHaveLength(2);
    });
});
});