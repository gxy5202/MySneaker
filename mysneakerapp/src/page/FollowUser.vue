<template>
    <div>
        <popup v-model="prop">内容</popup>
    </div>
</template>
<script>
import { Popup } from 'vant';
export default {
    name:'FollowUser',
    props:['prop'],
    components:{
        Popup
    }
}
</script>
<style lang="scss" scoped>

</style>


