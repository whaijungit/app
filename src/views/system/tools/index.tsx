import { ITool } from '@/types';
import { useState } from 'react';
import { HeaderTable } from '../components';
import { ButtonProps, InputProps, TableProps } from 'antd';
import { CreateToolDrawer } from '@/components/tool/creator'

const Tools: React.FC = () => {
    const [open, setOpen] = useState(false)
    const [columns, _] = useState<TableProps<ITool>['columns']>([
    ])

    const inputProps: InputProps = {
        placeholder: '输入工具名称或类型'
    }
    const btnProps: ButtonProps = {
        children: '新建工具',
        onClick: () => handleOpenDrawer(),
    }

    const handleOpenDrawer = () => {
        setOpen(true)
    }

    const handleCloseDrawer = () => {
        setOpen(false)
    }

    const tableProps: TableProps = {
        columns
    }

    return (
        <>
            <HeaderTable
                btnProps={btnProps}
                inputProps={inputProps}
                tableProps={tableProps}
            />
            <CreateToolDrawer
                open={open}
                onClose={handleCloseDrawer}
            />
        </>
    )
}

export default Tools;
