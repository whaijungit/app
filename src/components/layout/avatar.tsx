import { Avatar, Dropdown } from "antd"
import avatar from '@/assets/icons/avatar.svg'

export const AvatarDropDownMenu: React.FC = () => {
    return (
        <Dropdown
            menu={{ items: [] }}
        >
            <Avatar style={{ marginRight: 40 }} src={avatar} shape='circle' />
        </Dropdown>
    )
}