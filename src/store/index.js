import Vuex,  {createStore} from 'vuex'
import Vue from "vue";

Vue.use(Vuex)


// Create a new store instance.
export const store = createStore({
    state () {
        return {
            fields: [
                {
                    "name": "cfhbh",
                    "primaryCrop": {
                        "crop": "Beetroot",
                        "yield": {
                            "conservative": 14,
                            "likely": 18,
                            "target": 25
                        }
                    },
                    "otherCrops": [
                        {
                            "crop": "Beetroot",
                            "yield": {
                                "conservative": 14,
                                "likely": 18,
                                "target": 25
                            }
                        },
                        {
                            "crop": "Broccoli",
                            "yield": {
                                "conservative": 5,
                                "likely": 8,
                                "target": 12
                            }
                        }
                    ],
                    "uuid": "ab4ae609-5a9b-4f40-8125-6a1fad693ee9",
                    "fieldLocation": {
                        "lat": 51.50345351147583,
                        "lng": -0.1652240753173828
                    }
                }
            ]
        }
    },
    mutations: {
        addField (state, newField) {
            state.fields.push(newField)
        }
    }
})

