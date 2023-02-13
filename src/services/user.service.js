'use strict'

import { dbService } from './db.service.js'
import { utilService } from './util.service.js'

const KEY = 'users'

export const userService = {
    // get,
    getUser,
}

// async function query() {
//     var users = await dbService.query(KEY)

//     console.log(users)
//     if (!users || !users.length) {
//         users = _createUsers()
//         await dbService.insert(KEY, users)
//     }
//     return users
// }

// async function get(id) {
//     return await dbService.get(KEY, id)
// }

async function getUser(id) {
    return {
        name: 'Aviad',
        balance: 100,
        transactions: [],
    }
    // return await dbService.get(KEY, id)
}

// async function remove(id) {
//     return await dbService.remove(KEY, id)
// }

// async function save(user) {
//     if (user._id) return await dbService.put(KEY, user)
//     else return await dbService.post(KEY, user)
// }

// function getEmptyUser() {
//     return {
//         name: '',
//         phone: '',
//         email: '',
//         balance: 100,
//         transactions: [],
//     }
// }

function _createUsers() {
    return [
        _createUser('Aviad'),
    ]
}

function _createUser(name) {
    return {
        name,
        balance: 100,
        transactions: [],
    }
}

