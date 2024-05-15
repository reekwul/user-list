<script setup lang="ts">
import CList from "@/components/cList.vue";
import CEditor from "@/components/cEditor.vue";
import {reactive} from "vue";
import {useUserStore} from "@/stores/User";


const userStore = useUserStore(),
    data = reactive({
        user_list: userStore.data.user_list
    })
</script>

<template>
    <CList :user-list="data.user_list"/>
    <CEditor/>
</template>

<style scoped>
</style>