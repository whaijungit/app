import './index.less'
import { RenderView } from './render.view'
import { PropretyPanel } from './proprety.panel'
import { ComponentPanel } from './component.panel'

export const ReactiveView: React.FC = () => {
    return (
        <section className='reactive-section'>
            <ComponentPanel />
            <RenderView />
            <PropretyPanel />
        </section>
    )
}