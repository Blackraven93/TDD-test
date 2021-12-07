function getUser(id) {
    return {
        id,
        email: `user${id}@test.com`
    }
}

function getUserId(id) {
    if (id <= 0) throw new Error("Invalid ID");
    return  {
        id,
        email: `user${id}@test.com`
    }
}

module.exports = getUserId;
module.exports = getUser;
