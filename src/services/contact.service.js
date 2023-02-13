'use strict'

import { dbService } from './db.service.js'
import { utilService } from './util.service.js'

const KEY = 'contacts'

export const contactService = {
    query,
    get,
    remove,
    save,
    getEmptyContact,
}

async function query() {
    var contacts = await dbService.query(KEY)

    console.log(contacts)
    if (!contacts || !contacts.length) {
        contacts = _createContacts()
        await dbService.insert(KEY, contacts)
    }
    return contacts
}

async function get(id) {
    return await dbService.get(KEY, id)
}

async function remove(id) {
    return await dbService.remove(KEY, id)
}

async function save(contact) {
    if (contact._id) return await dbService.put(KEY, contact)
    else return await dbService.post(KEY, contact)
}

function getEmptyContact() {
    return {
        name: '',
        phone: '',
        email: '',
    }
}

function _createContacts() {
    return [
        _createContact('Aviad'),
        _createContact('Ofir'),
        _createContact('Shani'),
    ]
}

function _createContact(name) {
    return {
        _id: utilService.makeId(),
        name,
        phone: utilService.makePhoneNum(),
        email: utilService.makeEmail(),
    }
}
