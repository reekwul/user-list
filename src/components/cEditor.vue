<script setup lang="ts">
import {reactive, watch} from "vue";
import type {NsEditor} from "@/types/componnets/NsEditor";
import {useUserStore} from "@/stores/User";
import type {NsUser} from "@/types/NsUser";

const userStore = useUserStore(),
    form: NsEditor.Form = reactive({
        name: {
            label: "name",
            model: undefined,
            type: "text",
        },
        age: {
            label: "age",
            model: undefined,
            type: "number",
        }
    }),
    methods: NsEditor.Methods = {
        submit: () => {
            const update = {} as Omit<NsUser.Item, "id">
            let key: keyof Omit<NsUser.Item, "id">
            for (key in form) {
                Object.assign(update, {[key]: form[key].model})
            }

            userStore.methods.updateActiveUser(update)
            methods.reset()
        },
        reset: () => {
            let key: keyof Omit<NsUser.Item, "id">
            if (userStore.data.active_user) {
                for (key in form) {
                    form[key].model = userStore.data.active_user[key]
                }
            } else {
                for (key in form) {
                    form[key].model = undefined
                }
            }
        },
        setActiveUser: (user) => {
            if (!user) {
                methods.reset()
                return
            }
            let key: keyof Omit<NsUser.Item, "id">
            for (key in form) {
                form[key].model = user[key as keyof NsUser.Item]
            }
        }
    }

watch(() => userStore.data.active_user, methods.setActiveUser)
</script>

<template>
    <form @submit.prevent="methods.submit" @reset.prevent="methods.reset">
        <p v-for="(field,key) in form" :key="key">
            <label>{{ field.label }}</label>
            <input :type="field.type" v-model="field.model">
        </p>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
    </form>
</template>

<style scoped>

</style>