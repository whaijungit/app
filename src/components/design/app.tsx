import './index.less'
import { Form } from 'antd'
import { useState } from 'react'
import { Option, options } from './core'
import { renderFormItem } from './render'

const App: React.FC = () => {
    const [uiConfig,] = useState<Option[]>(options)
    return (
        <Form layout='vertical'>
            {renderFormItem(uiConfig)}
        </Form>
    )
}

export default App;
