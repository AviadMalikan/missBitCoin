import { userService } from '../services/user.service.js'

export const userStore = {
    state: {
        user: userService.getUser()
    },
    getter: {
        user({ user }) { return user }
    },
    mutations: {
        setUser(state, { user }) {
            this.user = user
        }
    }

}