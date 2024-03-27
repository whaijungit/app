import { Dispatch } from 'react'
import { API, IUser } from '@/types/common'
import { userActions } from '@/stores/user'
import { permissionActions } from '@/stores/permission'

export const auth = (dispatch: Dispatch<any>, { data, code }: API<IUser>) => {
    dispatch(userActions.setUser(data))
    dispatch(userActions.setIsLogin(code === 200))
    dispatch(permissionActions.setActions(data.auths.actions))
    dispatch(permissionActions.setPermission(data.auths.menus))
}
