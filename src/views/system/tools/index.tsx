import { ITool } from '@/types';
import { useEffect, useState } from 'react';
import { HeaderTable } from '../components';
import { ButtonProps, InputProps, TableProps } from 'antd';
import { CreateToolDrawer } from '@/components/tool/creator'
import { systemApi } from '@/api/tool';
import { ReactiveView } from '@/reactive';

const Tools: React.FC = () => {
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(10)
    const [total, setTotal] = useState(0)
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState<ITool[]>([])
    const [columns, _] = useState<TableProps<ITool>['columns']>([
        {
            title: '名称'
        },
        {
            title: '英文名'
        },
        {
            title: '类型'
        },
        {
            title: '脚本路径'
        },
        {
            title: '运行程序'
        },
        {
            title: '备注'
        },
        {
            title: '创建者'
        },
        {
            title: '审核状态'
        },
        {
            title: '操作',
            render() {
                return (
                    <div className='table-action'>
                        <span>预览</span>
                        <span>编辑</span>
                        <span>查看参数</span>
                        <span>...</span>
                    </div>
                )
            }
        },
    ])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        setLoading(true)
        const r = await systemApi.findList()
        setDatas(r.data.results)
        setTotal(r.data.count)
        setLoading(false)
    }

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
            <ReactiveView />
        </>
    )
}

export default Tools;
