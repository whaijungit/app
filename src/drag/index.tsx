import './index.less'
import * as React from 'react'
import { useState } from 'react'

const components = [
    {
        id: 1,
        title: '文本组件',
    },
    {
        id: 2,
        title: '文本组件',
    },
    {
        id: 3,
        title: '文本组件',
    },
    {
        id: 4,
        title: '文本组件',
    }
]

export const Drag: React.FC = () => {
    const [items, setItems] = useState(components)
    const [soucre, setSoucre] = useState<number>()
    const handleDragStart = (index: number) => (e: React.DragEvent) => {
        setSoucre(index)
    }
    const handleDragOver = (_: number) => (e: React.DragEvent) => {
        e.preventDefault()
        e.dataTransfer.dropEffect = 'move'
        e.dataTransfer.effectAllowed = 'move'
    }
    const handleDrop = (targetIndex: number) => (e: React.DragEvent) => {
        e.preventDefault()
        console.log(e.currentTarget)
        if ((soucre && targetIndex) && targetIndex !== soucre) {
            const newItems = swapArray(items, soucre, targetIndex)
            setItems(newItems)
        }
        setSoucre(undefined)

    }
    return (
        <div className='drag-container'>
            <div className='draggabe'>
                {items.map((comp, index) => (
                    <div
                        key={index}
                        draggable={true}
                        onDrop={handleDrop(index)}
                        onDragOver={handleDragOver(index)}
                        onDragStart={handleDragStart(index)}
                        className={`${index && index === soucre ? 'dragging ' : ''}draggabe-item`}
                    >
                        <span className=''>{comp.title} {comp.id}</span>
                    </div>
                ))}
            </div>
            <div className="drop-box" draggable onDrop={e => {
                console.log('拖拽放下了')
            }}>
                <div className='draggabe-view-item'></div>
            </div>
        </div>
    )
}

const swapArray = (arr: any[], index: number, targetIndex: number) => {
    const temp = arr[index];
    arr[index] = arr[targetIndex];
    arr[targetIndex] = temp;
    console.log([...arr])
    return [...arr]
}