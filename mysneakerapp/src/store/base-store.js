import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        count:0,
        addStatus:true,
        reduceStatus:true
    },
    mutations:{
        addCount(state){
            state.count++ ;
            if(state.count > 6){
                state.addStatus = false
            }else{
                state.addStatus = true
            }
        },
        reduceCount(state){
            state.count-- ;
            if(state.count < 0){
                state.reduceStatus = false
            }else{
                state.reduceStatus = true
            }
        }
    },
    
});
export default store;