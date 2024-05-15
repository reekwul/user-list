import type {NsUser} from "@/types/NsUser";

export namespace NsList {
    export interface Props {
        userList: NsUser.Item[]
    }

    export interface Data {
        active_user_id: number | undefined
    }

    export interface Methods {
        setActiveUser: (set_id: NsUser.Item["id"]) => void
        unsetActiveUser: () => void
        toggleActiveUser: (new_user_id: NsUser.Item["id"]) => void
    }
}