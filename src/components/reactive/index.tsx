import './index.less'
import { useState } from 'react'
import { options } from './schema.ts'



export const ReactiveView: React.FC = () => {
    const [jsonSchema, setJsonSchema] = useState(options)
    return (
        <section className='reactive-section'>
            
        </section>
    )
}