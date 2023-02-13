import { contactService } from '../services/contact.service.js'

export const contactStore = {
    state: {
        contacts: [],
        lastRemoveContact: null
    },
    getters: {
        contacts({ contacts }) {
            return contacts
        }
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContacts(state, { contactId }) {
            const idx = state.contacts.findIndex(c => c._id === contactId)
            state.lastRemoveContact = state.contacts[idx]
            state.contacts.splice(idx, 1)
        },
        addContact(state, { contact }) {
            state.contact.push(contact)
        },
        updateContact(state, { contact }) {
            const idx = state.contacts.findIndex(c => c._id === contact._id)
            state.contacts.splice(idx, 1, contact)
        }
    },
    actions: {
        async loadContacts({ commit }) {
            const contacts = await contactService.query()
            commit({ type: 'setContacts', contacts })
        },
        async removeContact({ commit }, payload) {
            commit(payload)
            try {
                await contactService.remove(payload.contactId)
            } catch (err) {
                commit({ type: ' undoRemoveContact' })
                throw err
            }
        },
        async saveProduct({ commit }, { contact }) {
            const actionType = (contact._id) ? 'updateContact' : 'addContact'
            const savedContact = contactService.save(contact)
            commit({ type: actionType, savedContact })
            return savedContact
        }
    },
}