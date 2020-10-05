const Num = {
    state: {
        num: 0
    },

    mutations: {
        SET_NUM(state, num) {
            state.num = num
        }
    },

    actions: {
        setNum({commit}, num) {
            commit('SET_NUM', num)
        },
    },

    getters: {
        getNum(state) {
            return state.num
        }
    }
}
export default Num
