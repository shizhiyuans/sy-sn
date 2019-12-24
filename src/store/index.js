import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        username:"949505887",
        password:"123456",
        path:"five",
        say:'1',
        see:"1"
    },
    mutations:{
        change(state){
            state.path = "six"
            localStorage.setItem("path",JSON.stringify(state.path))
        },
        gaibian(state) {
            state.say = '0';
            localStorage.setItem("suiyi",JSON.stringify(state.say))
        },
        clickO(state){
            state.see = '1';
            localStorage.setItem("see",JSON.stringify(state.see))
        },
        clickt(state){
            state.see = '2';
            localStorage.setItem("see",JSON.stringify(state.see))
        },
        clicks(state){
            state.see = '3';
            localStorage.setItem("see",JSON.stringify(state.see))
        },
    }

})

export default store