import type {NsUser} from "@/types/NsUser";

export namespace NsUserStore {

    export interface Data {
        user_list: NsUser.Item[]
        active_user: NsUser.Item | undefined
    }

    export interface Methods {
        setActiveUser: (set_id: number) => void
        unsetActiveUser: () => void
        updateActiveUser: (fields: Omit<NsUser.Item, "id">) => void
    }

    export interface MethodPrivate {
        getUserList: () => void
    }
}