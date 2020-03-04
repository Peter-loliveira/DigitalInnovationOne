const user = {
    name: "Peter",
    lastName: "Lange Oliveira"
}


function getUserWithFullName(userName) {
    return {
        ...userName,
        fullName: `${userName.name} ${userName.lastName}`
    }
}

const userWhithFullName = getUserWithFullName(user)

console.log(userWhithFullName)