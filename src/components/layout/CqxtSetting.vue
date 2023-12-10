<template>
    <div v-if="IsShow">
        <Cqxt-Exit></Cqxt-Exit>
    </div>
</template>

<script lang="ts" setup>
    import CqxtExit from "@/components/layout/CqxtExit.vue" 
    import { useStore } from "vuex"
    import { computed } from "vue"
    const store = useStore()
    const IsShow = computed(()=>{
        console.log(store.getters.activeMenuItem);
        return store.getters.activeMenuItem == '4'? true : false
    })
</script>