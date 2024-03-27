import { ISchema } from './core'
import { Cascader, Checkbox, ColorPicker, Input, Radio, Select, Switch } from 'antd'
import { ChooseData, Collapse, DynamicsChooseData, ObjectFC, SliderNumebr } from './components'

export const CustomComponentMap = {
    collapse: (option: ISchema) => <Collapse  {...option} />,
    text: (option: ISchema) => <Input {...option.componentProps} />,
    select: (option: ISchema) => <Select {...option.componentProps} />,
    switch: (option: ISchema) => <Switch {...option.componentProps} />,
    object: (option: ISchema) => <ObjectFC {...option.componentProps} />,
    color: (option: ISchema) => <ColorPicker {...option.componentProps} />,
    radio: (option: ISchema) => <Radio.Group {...option.componentProps} />,
    cascader: (option: ISchema) => <Cascader  {...option.componentProps} />,
    chooseData: (option: ISchema) => <ChooseData {...option.componentProps} />,
    textArea: (option: ISchema) => <Input.TextArea {...option.componentProps} />,
    checkbox: (option: ISchema) => <Checkbox.Group {...option.componentProps} />,
    sliderNumber: (option: ISchema) => <SliderNumebr {...option.componentProps} />,
    dynamicsChooseData: (option: ISchema) => <DynamicsChooseData {...option.componentProps} />,
    selects: (option: ISchema) => <Select mode='multiple' {...option.componentProps} />,
    selectColorGroup: (option: ISchema) => <Select mode='multiple' {...option.componentProps} />,
}

export type ComponentType = keyof typeof CustomComponentMap