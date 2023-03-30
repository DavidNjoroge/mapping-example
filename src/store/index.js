import Vuex,  {createStore} from 'vuex'
import Vue from "vue";

Vue.use(Vuex)


// Create a new store instance.
export const store = createStore({
    state () {
        return {
            fields: [
                {
                    "name": "dghfgh",
                    "primaryCrop": {
                        "crop": "Broccoli",
                        "yield": {
                            "conservative": 5,
                            "likely": 8,
                            "target": 12
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
                    "uuid": "a1762422-9fb9-4f42-aea9-695cdd8cfb5e",
                    "fieldLocation": {
                        "marker": {
                            "lat": 51.506151485557524,
                            "lng": -0.18625259399414065
                        },
                        "polygon": [
                            {
                                "lat": 51.50481587478995,
                                "lng": -0.16887187957763675
                            },
                            {
                                "lat": 51.50361379162684,
                                "lng": -0.16483783721923828
                            },
                            {
                                "lat": 51.50406791565989,
                                "lng": -0.15689849853515625
                            },
                            {
                                "lat": 51.507059678517834,
                                "lng": -0.16779899597167972
                            },
                            {
                                "lat": 51.50788772102846,
                                "lng": -0.16402244567871094
                            },
                            {
                                "lat": 51.50751376820967,
                                "lng": -0.15921592712402344
                            },
                            {
                                "lat": 51.50551039727485,
                                "lng": -0.15531063079833987
                            },
                            {
                                "lat": 51.50446860957782,
                                "lng": -0.15213489532470706
                            },
                            {
                                "lat": 51.50281238523426,
                                "lng": -0.14913082122802737
                            }
                        ]
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

