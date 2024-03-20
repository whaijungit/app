import {
    Input, Slider, Switch, cascader, checkbox, chooseData,
    chooseDataAdd, collapse, color, object, radio, select, selects
} from './icons'

const Components = [
    {
        label: '文本框',
        icon: Input,
        template: ``,
    },
    {
        label: '选择数据',
        icon: chooseData,
        template: ``,
    },
    {
        label: '颜色',
        icon: color,
        template: ``,
    },
    {
        label: '开关',
        icon: Switch,
        template: ``,
    },
    {
        icon: radio,
        label: '单选',
        template: ``,
    },
    {
        icon: checkbox,
        label: '多选',
        template: ``,
    },
    {
        icon: select,
        label: '下拉单选',
        template: ``,
    },
    {
        icon: selects,
        label: '下拉多选',
        template: ``,
    },
    {
        icon: Slider,
        label: '滑动输入条',
        template: ``,
    },
    {
        icon: cascader,
        label: '级联选择器',
        template: ``,
    },
    {
        icon: chooseDataAdd,
        label: '动态增减',
        template: ``
    },
    {
        icon: object,
        label: '对象',
        template: ``,
    },
    {
        icon: collapse,
        label: '折叠',
        template: ``,
    }
]

export const ComponentPanel: React.FC = () => {
    return (
        <div className='component-panel'>
            <div className='component-panel-title'>组件</div>
            <div className='component-item-title'>单体</div>
            <div className='component-items'>
                {Components.map(comp => {
                    if (comp.label === '对象' || comp.label === '折叠') return null
                    return (
                        <div key={comp.label} draggable className='component-item'>
                            <div className='component-icon'>{comp.icon}</div>
                            <span className='component-label'>{comp.label}</span>
                        </div>
                    )
                })}
            </div>
            <div className='component-item-title'>单体</div>
            <div className='component-items'>
                {Components.map(comp => {
                    if (comp.label === '对象' || comp.label === '折叠') {
                        return (
                            <div key={comp.label} draggable className='component-item'>
                                <div className='component-icon'>{comp.icon}</div>
                                <span className='component-label'>{comp.label}</span>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

