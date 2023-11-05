import { createStore } from "vuex";

export default createStore ({
    state: {
        name:'ratul',
        title:'vuex state set'
    },
    mutations:{
        changeTitle:function(state,newtitle) {
            state.title=newtitle
        }
    }
})