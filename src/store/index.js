import {createStore} from 'vuex'

export default createStore({
    state: {
        cartProducts: []
    },
    mutations:{
        setProduct(state,val){
            state.cartProducts.push(val)
        }
    },
    getters:{
        getProducts: state => {
            return state.cartProducts
        }
    }
})