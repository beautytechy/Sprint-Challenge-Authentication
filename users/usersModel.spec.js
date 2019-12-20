const Users = require("./hobbitsModel.js");
const db = require('../data/dbConfig.js')

describe('users model', function () {
    beforeEach(async () => {
        await db('users').truncate(); //await keyword prevents seeds from running with every test
    })
    describe('insert()', function() {
        it('should add the user to the database', async function() {
         await Hobbits.insert({name: "SprintJestTest1"})
         await Hobbits.insert({name: "SprintJestTest2"});

         const hobbits = await db('users');
         expect(hobbits).toHaveLength(2);
    });
});
});