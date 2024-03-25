import { Checkbox } from "antd"

interface IProps {
    value?: boolean
    onChange?: (e: boolean) => void
}

export const CheckPwd: React.FC<IProps> = (props) => {
    return (
        <div className='check-pwd' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Checkbox
                checked={props.value}
                onChange={e => props.onChange && props.onChange(e.target.checked)}
            >
                记住密码
            </Checkbox>
            <span>忘记密码？</span>
        </div>
    )
}