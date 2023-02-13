import { contactStore } from './contact.store.js'
import { userStore } from './user.store.js'
import { createStore } from 'vuex'

export const myStore = createStore({
    strict: true,
    state(){

    },
    modules:{
        contactStore,
        userStore,
    }
})