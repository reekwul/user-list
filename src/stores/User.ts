import {defineStore} from "pinia";
import {onMounted, reactive} from "vue";
import type {NsUserStore} from "@/types/stores/NsUserStore";
import type {NsUser} from "@/types/NsUser";

export const useUserStore = defineStore("user", () => {
    const data: NsUserStore.Data = reactive({
            user_list: [],
            active_user: undefined
        }),
        methods: NsUserStore.Methods = {
            setActiveUser: (set_id) => {
                data.active_user = data.user_list.find((user: NsUser.Item) => user.id === set_id)
            },
            unsetActiveUser: () => {
                data.active_user = undefined
            },
            updateActiveUser: (fields) => {
                if (!data.active_user) {
                    return
                }

                Object.assign(data.active_user, fields)
                methods.unsetActiveUser()
            },
        },
        _methods: NsUserStore.MethodPrivate = {
            getUserList: () => {
                const count_user = 10
                for (let i = 1; i <= count_user; i++) {
                    const user: NsUser.Item = {id: i, age: i, name: `user ${i}`}
                    data.user_list.push(user)
                }
            }
        }
    onMounted(() => {
        _methods.getUserList()
    })
    return {data, methods}
})