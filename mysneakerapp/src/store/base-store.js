import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        isLogin:false,
        tabShow:true,
        
    },
    mutations:{
        loginState(state){
            if(state.isLogin == false){
                state.isLogin = true;
            }
            
        },
        tabState(state){
            state.tabShow = false;
        }
       
    },
    
});
export default store;