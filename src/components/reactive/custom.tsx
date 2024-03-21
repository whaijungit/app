import { ISchema } from './schema'
import { Cascader, Checkbox, Collapse, ColorPicker, Input, Radio, Select } from 'antd'


export const CustomComponentMap = {
    text: (option: ISchema) => <Input {...option.componentProps} />,
    select: (option: ISchema) => <Select {...option.componentProps} />,
    color: (option: ISchema) => <ColorPicker {...option.componentProps} />,
    radio: (option: ISchema) => <Radio.Group {...option.componentProps} />,
    cascader: (option: ISchema) => <Cascader  {...option.componentProps} />,
    collapse: (option: ISchema) => <Collapse  {...option.componentProps} />,
    checkbox: (option: ISchema) => <Checkbox.Group {...option.componentProps} />,
    selects: (option: ISchema) => <Select mode='multiple' {...option.componentProps} />,
    selectColorGroup: (option: ISchema) => <Select mode='multiple' {...option.componentProps} />,
}

export type ComponentType =  keyof typeof CustomComponentMap