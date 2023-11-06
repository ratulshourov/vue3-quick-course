import { createStore } from "vuex";

export default createStore({
    state: {
        name: 'ratul',
        title: 'vuex state set',
        'key': 12234,
    },
    mutations: {
        changeTitle: function (state, newtitle) {
            //when pass without object
            //state.title=newtitle
            //when pass with object
            state.title = newtitle.title
        }
    },
    actions: {
        updateTitle: function (context, payload) {
            setTimeout(() => {
                context.commit('changeTitle', payload);
            }, 2000);

        }
    },
    getters: {
        getKey: function (state) {
            return state.key;
        }
    }
})