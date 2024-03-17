import type { FormItemProps } from 'antd'

export type ComponentType = 'text' | 'input-choose-data' | 'textarea' | 'collapse' | 'object' | 'cascader' | 'select' | 'selects' | 'radio' | 'checkbox' | 'color' | 'color-group' | 'switch' | 'input-number' | 'input-slider-number'

export interface Option {
    valueType: any
    componentProps: any
    children?: Option[]
    filedProps: FormItemProps
    componentType: ComponentType
}

export const options: Option[] = [
    {
        valueType: 'string',
        componentProps: {
            allowClear: true,
            placeholder: '请输入任务名称'
        },
        filedProps: {
            label: '任务名称',
            name: 'task_name',
            initialValue: '2024-3-16-全基因关联分析',
        },
        componentType: 'text'
    },
    {
        valueType: 'array',
        componentProps: {
            allowClear: true,
            placeholder: '请选择vcf文件',
        },
        filedProps: {
            name: 'phonetype',
            label: '组合聚类选项',
            initialValue: ['phonetype.vcf'],
        },
        componentType: 'input-choose-data'
    },
    {
        valueType: 'array',
        componentProps: {
            allowClear: true,
            placeholder: '请选择vcf文件',
        },
        filedProps: {
            name: 'phonetype',
            label: '组合聚类选项',
            initialValue: ['phonetype.vcf'],
        },
        componentType: 'input-choose-data'
    },
    {
        valueType: 'string',
        componentProps: {
            options: [
                {
                    label: '选项-1',
                    value: 'option-1'
                },
                {
                    label: '选项-2',
                    value: 'option-2'
                },
                {
                    label: '选项-3',
                    value: 'option-3'
                },
            ],
            allowClear: true,
        },
        filedProps: {
            required: true,
            label: '聚类选项',
            name: 'analysis',
            initialValue: 'option-1',
        },
        componentType: 'select'
    },
    {
        valueType: 'boolean',
        componentProps: {
            options: [
                {
                    label: '选项-1',
                    value: 'option-1'
                },
                {
                    label: '选项-2',
                    value: 'option-2'
                },
                {
                    label: '选项-3',
                    value: 'option-3'
                },
            ],
        },
        filedProps: {
            required: true,
            name: 'active',
            initialValue: true,
            label: '是否开启无敌',
        },
        componentType: 'switch'
    },
    {
        valueType: 'boolean',
        componentProps: {
            options: [
                {
                    label: '选项-1',
                    value: 'option-1'
                },
                {
                    label: '选项-2',
                    value: 'option-2'
                },
                {
                    label: '选项-3',
                    value: 'option-3'
                },
            ],
        },
        filedProps: {
            required: true,
            label: '模型选择',
            name: 'groups-model',
            initialValue: ['option-1', 'option-2'],
        },
        componentType: 'checkbox'
    },
    {
        valueType: 'array',
        componentProps: {
            options: [
                {
                    label: '选项-1',
                    value: 'option-1'
                },
                {
                    label: '选项-2',
                    value: 'option-2'
                },
                {
                    label: '选项-3',
                    value: 'option-3'
                },
            ],
            allowClear: true,
        },
        filedProps: {
            label: '组合聚类选项',
            name: 'choose_model',
            initialValue: ['option-1'],
        },
        componentType: 'selects'
    }
]