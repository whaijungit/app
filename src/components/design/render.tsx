import { Option } from './core'
import { Switch } from './switch'
import { CheckBox } from './checkbox'
import { Collapse } from './collapse'
import { InputChooseData } from './input'
import { ColorPicker, Form, Input, Select } from 'antd'
import { Radio } from './radio'

export const renderFormItem = (options: Option[]) => {
    return options.map((opt, index) => (
        <Form.Item key={index} {...opt.filedProps}>
            {renderFormItemNode(opt)}
        </Form.Item>
    ))
}
const renderFormItemNode = (option: Option) => {
    if (option.componentType === 'text') {
        return <Input placeholder='' {...option.componentProps} />
    } else if (option.componentType === 'textarea') {
        return <Input.TextArea {...option.componentProps} />
    }
    else if (option.componentType === 'switch') {
        return <Switch />
    }
    else if (option.componentType === 'radio') {
        return <Radio {...option.componentProps} />
    }
    else if (option.componentType === 'checkbox') {
        return <CheckBox {...option.componentProps} />
    }
    else if (option.componentType === 'selects') {
        return <Select  {...option.componentProps} mode='multiple' />
    }
    else if (option.componentType === 'select') {
        return <Select  {...option.componentProps} />
    }
    else if (option.componentType === 'color') {
        return <ColorPicker  {...option.componentProps} />
    }
    else if (option.componentType === 'input-choose-data') {
        return <InputChooseData {...option.componentProps} />
    }
    else if (option.componentType === 'collapse') {
        return <Collapse />
    }
}