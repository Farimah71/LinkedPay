import { ComponentBase } from "../types/component-base.type";

export type DividerProps = Omit<ComponentBase , "isDisable"> & {
    text?:string
}