import { atom } from 'recoil'
import locale from 'antd/locale/zh_CN'
import type { ConfigProviderProps } from 'antd'

export const theme = atom<ConfigProviderProps>({
    key: 'theme',
    default: {
        locale,
        componentSize: 'large',
        menu: {
            style: {
                fontSize: 16,
                backgroundColor: 'transparent',
                borderInlineColor: 'transparent',
            }
        },
        theme: {
            token: {
                fontSize: 14,
                borderRadius: 4,
                fontWeightStrong: 400,
                colorPrimary: '#0C6DFF',
                fontFamily: 'Microsoft YaHei',
            }
        },
    }
}) 