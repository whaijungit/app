import { plus, search } from "@/common"
import { Button, ButtonProps, Input, InputProps, Table, TableProps } from "antd"

interface IProps {
    btnProps?: ButtonProps
    inputProps?: InputProps
    tableProps?: TableProps
}

export const HeaderTable: React.FC<IProps> = (props) => {

    const { tableProps } = props

    return (
        <div className='system-section'>
            <div className='header-action'>
                <div className="action-item">
                    <Input {...props.inputProps} prefix={search} />
                </div>
                <div className="action-item">
                    <Button
                        {...props.btnProps}
                        icon={plus}
                        type="primary"
                    />
                </div>
            </div>
            <div className='system-table'>
                <Table {...tableProps} />
            </div>
        </div>
    )
}
