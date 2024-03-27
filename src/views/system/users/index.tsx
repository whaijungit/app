import { api } from "@/api/user";
import { IUser } from "@/types/common";
import { HeaderTable } from "../components"
import { useEffect, useState } from "react";
import { searchParam } from "@/common/query";
import { useSearchParams } from "react-router-dom";
import { Button, ButtonProps, Drawer, InputProps, Space, Switch, TableProps } from "antd";
import { UserForm } from "./component";

const Users: React.FC = () => {
    const [total, setTotal] = useState(0)
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState<IUser[]>([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(searchParam(searchParams, 'page', 1))
    const [size, setSize] = useState(searchParam(searchParams, 'size', 10))
    const [search, setSearch] = useState(searchParams.get('search') || undefined)
    useEffect(() => {
        const time = setTimeout(() => {
            fetchData()
        }, 200);
        return () => {
            clearTimeout(time)
        }
    }, [page, search, size])
    const fetchData = async () => {
        setLoading(true)
        try {
            const r = await api.findList({
                page,
                size,
                search
            })
            console.log(r.data.results)
            setDatas(r.data.results)
            setTotal(r.data.count)
        } catch (error) {

        } finally {
            setLoading(false)
        }

    }
    const setSearchParamsState = () => setSearchParams(searchParams)
    const inputProps: InputProps = {
        placeholder: '输入用户姓名或邮箱',
        value: search,
        onChange(e) {
            setSearch(e.target.value)
        }
    }
    const btnProps: ButtonProps = {
        children: '新建用户',
        onClick() {
            setOpen(true)
        }
    }
    const handleCloseDrawer = () => {
        setOpen(false)
    }
    const tableProps: TableProps<IUser> = {
        loading: loading,
        dataSource: datas,
        rowKey: (item) => item.id,
        pagination: {
            total,
            current: page,
            pageSize: size,
            onChange(page, size) {
                setPage(page)
                setSize(size)
                searchParams.set('page', page.toString())
                searchParams.set('size', size.toString())
                setSearchParamsState()
            }
        },
        scroll: { x: 1300 },
        columns: [
            {
                title: '序号',
                dataIndex: 'id',
                render(_, __, index) {
                    return index + 1
                }
            },
            {
                title: '姓名',
                dataIndex: 'realname'
            },
            {
                title: '手机号码',
                dataIndex: 'mobile',
            },
            {
                title: '邮箱',
                dataIndex: 'email'
            },
            {
                title: '角色',
                dataIndex: 'roles_list'
            },
            {
                title: '状态',
                render(_, record) {
                    return <Switch defaultChecked={record.is_active} />
                }
            },
            {
                title: '操作',
                render() {
                    return (
                        <div className='table-action'>
                            <span>详情</span>
                            <span>编辑</span>
                            <span>修改密码</span>
                            <span>...</span>
                        </div>
                    )
                }
            },
        ]
    }
    return (
        <>
            <Drawer
                width={424}
                open={open}
                onClose={handleCloseDrawer}
                styles={{
                    footer: {
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }
                }}
                footer={(
                    <Space size={20}>
                        <Button>取消</Button>
                        <Button type="primary">确定</Button>
                    </Space>
                )}
            >
                <UserForm />
            </Drawer>
            <HeaderTable
                btnProps={btnProps}
                inputProps={inputProps}
                tableProps={tableProps}
            />
        </>
    )
}

export default Users;
