import { defineStore } from 'pinia'

export default defineStore({
    id: 'app',
    state: () => ({
        test: '',
    }),
    getters: {
        getTest: (state) => state.test,
    },
    actions: {
        reset() {
            this.test = ''
        },
    },
})
