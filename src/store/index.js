import Vuex,  {createStore} from 'vuex'
import Vue from "vue";

Vue.use(Vuex)


// Create a new store instance.
export const store = createStore({
    state () {
        return {
            fields: []
        }
    },
    mutations: {
        addField (state, newField) {
            state.fields.push(newField)
        }
    }
})

