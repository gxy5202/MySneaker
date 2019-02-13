<template>
    <div>
        <topUser></topUser>
        <Activity></Activity>
        <Gongneng></Gongneng>
    </div>
</template>
<script>
import topUser from './user/topUser';
import Activity from './user/Activity';
import Gongneng from './user/Gongneng';
export default {
    name:'User',
    components:{
        topUser,
        Activity,
        Gongneng
    }
}
</script>

<style scoped lang="scss">
#app{
    margin: 0 ;
}
</style>
