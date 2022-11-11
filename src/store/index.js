import {createStore} from 'vuex'

export default createStore({
    state: {
        number: 20
    },
    mutations:{
        addVal(state) {
            state.number += 1
        }
        // },
        // decreaseVal(state){
        //     state.number-=1
        // }
    },
    getters:{
        getVal: state => {
            return state.number
        }
    }
})