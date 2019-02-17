import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        isLogin:false,
        uid:"",
        tabShow:true,
        tabActive:0,
        tid:''
    },
    mutations:{
        loginState(state,status,aid){
            state.uid = sessionStorage.getItem('uid');
            if(state.uid != ''){
                state.isLogin = true;
            }else{
                state.isLogin = false;
            }
            state.isLogin = status;
        },
        tabState(state,num){
            if(num == 0){
                state.tabShow = true;
            }else {
                state.tabShow = false;
            }
            
        },
        tabActive(state,index){
            state.tabActive = index
        },
        followUser(state,item){
            state.tid = item
        }
    },
    
});
export default store;