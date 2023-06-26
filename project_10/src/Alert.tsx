import React, { useEffect } from "react"
import { ListType } from "./App"
type Prop = {
    type: string,
    msg: string
    removeAlert: () => void,
    list: ListType[]
}
const Alert: React.FC<Prop> = ({ type, msg, removeAlert, list }) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert()
        }, 3000);
        return () => {
            clearTimeout(timeout);
        }
    }, [list])


    return (
        <p className={`alert alert-${type}`}>{msg}</p>
    )
}
export { Alert }