import type {NsUser} from "@/types/NsUser";

export namespace NsEditor {

    interface Field {
        label: string
        model: string | number | undefined
        type: HTMLInputElement["type"]
    }

    interface FieldText extends Field {
        type: "text"
        model: string | undefined
    }

    interface FieldNumber extends Field {
        type: "number"
        model: number | undefined
    }

    export type FormField = FieldText | FieldNumber

    export interface Form extends Record<keyof Omit<NsUser.Item, "id">, FormField> {
    }

    export interface Methods {
        submit: () => void
        reset: () => void
        setActiveUser: (user: NsUser.Item | undefined) => void
    }
}