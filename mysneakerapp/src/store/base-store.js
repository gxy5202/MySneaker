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
            }else {
                state.isLogin = false;
            }
            
        },
        tabState(state){
            state.tabShow = !state.tabShow 
        }
       
    },
    
});
export default store;