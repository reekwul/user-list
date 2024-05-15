<script setup lang="ts">
/*
   Можно преобрпазовать импорыт типов к виду
   import type {a,b,c} from "@/types"
*/
import type {NsList} from "@/types/componnets/NsList";
import {reactive, watch} from "vue";
import {useUserStore} from "@/stores/User";

defineProps<NsList.Props>()

const userStore = useUserStore(),
    data: NsList.Data = reactive({
        active_user_id: undefined,
    }),
    methods: NsList.Methods = {
        setActiveUser: (set_id) => {
            data.active_user_id = set_id
            userStore.methods.setActiveUser(set_id)
        },
        unsetActiveUser: () => {
            data.active_user_id = undefined
            userStore.methods.unsetActiveUser()
        },
        toggleActiveUser: (new_user_id) => {
            new_user_id !== data.active_user_id ? methods.setActiveUser(new_user_id) : methods.unsetActiveUser()
        }
    }

watch(() => userStore.data.active_user, () => {
    data.active_user_id = undefined
})
</script>

<template>
    <ul>
        <template v-for="user in userList" :key="user.id">
            <li :value="user.id" @click="methods.toggleActiveUser(user.id)">
                <span v-for="(field,key) in user" :key="key+user.id">{{ field }}</span>
            </li>
        </template>
    </ul>
</template>

<style scoped>

</style>