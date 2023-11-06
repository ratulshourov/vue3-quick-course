import { createStore } from "vuex";

export default createStore ({
    state: {
        name:'ratul',
        title:'vuex state set'
    },
    mutations:{
        changeTitle:function(state,newtitle) {
            //when pass without object
            //state.title=newtitle
            //when pass with object
            state.title=newtitle.title
        }
    }
})