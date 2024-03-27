import { Form, Input, Radio } from "antd";
import React from "react";

export const UserForm: React.FC = () => {
    return (
        <Form labelCol={{ span: 5 }} requiredMark={false}>
            <Form.Item
                rules={[
                    {
                        required: true,
                        message: '请输入姓名',
                    },
                    {
                        max: 150,
                        message: '姓名最大长度150字符',
                    },

                ]}
                label="姓名"
                name='username'
            >
                <Input placeholder="请输入姓名" />
            </Form.Item>
            <Form.Item
                label="性别"
                name='gender'
                rules={[
                    {
                        required: true,
                        message: '请输入手机号'
                    },
                    {
                        message: '手机格式不正确',
                        pattern: /^(86|852|886)?(1[3-9]\d{9})|(0\d{2,3}-\d{7,8})$/,
                    }
                ]}
            >
                <Radio.Group options={[{ label: '男', value: '男' }, { label: '女', value: '女' }]} />
            </Form.Item>
            <Form.Item
                label="手机号"
                name='mobile'
                rules={[
                    {
                        required: true,
                        message: '请输入手机号'
                    },
                    {
                        required: true,
                        pattern: /^(86|852|886)?(1[3-9]\d{9})|(0\d{2,3}-\d{7,8})$/,
                        message: '手机格式不正确'
                    }
                ]}
            >
                <Input placeholder="请输入手机号" />
            </Form.Item>
            <Form.Item label="邮箱" name='email'>
                <Input placeholder="请输入邮箱" />
            </Form.Item>
            <Form.Item label="单位" name='company'>
                <Input placeholder="请输入单位" />
            </Form.Item>
            <Form.Item label="专业" name='profession'>
                <Input placeholder="请输入专业" />
            </Form.Item>
            <Form.Item label="研究方向" name='research'>
                <Input placeholder="请输入研究方向" />
            </Form.Item>
        </Form>
    )
}