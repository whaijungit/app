import { renderFormItem } from './render'
import { Collapse as AntdCollapse } from 'antd'

export const Collapse: React.FC = () => {
    return (
        <AntdCollapse
            items={[
                {
                    key: 1,
                    label: <>更多参数</>,
                    children: renderFormItem([])
                }
            ]}
        />
    )
}