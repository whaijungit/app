import { api } from "@/api/user"
import { useEffect } from "react"
import { auth } from "@/common/auth"
import { useDispatch } from "react-redux"

export const useAuth = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        api.info().then(r => {
            auth(dispatch, r)
        })
    }, [dispatch])
}