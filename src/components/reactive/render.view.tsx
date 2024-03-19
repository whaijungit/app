import { useState } from 'react'

interface Item {
    id: number
}

export const RenderView: React.FC = () => {
    const [dragItem, setDragItem] = useState<Item>()
    return (
        <div className='render-view' >
            <div className='render-view-title'>预览</div>
            <div className='view-section'
                onDragStart={e => {
                    setDragItem({
                        id: +(e.target as HTMLElement).dataset['id']!
                    })
                    e.dataTransfer.effectAllowed = 'move'
                }}
                onDragOver={e => {
                }}
                onDragEnter={e => {
                    setDragItem(undefined)
                }}
            >
                <div data-id="1" draggable className={`drag-form-item-view${dragItem && dragItem.id === 1 ? ' dragging' : ''}`}>

                </div>
            </div>
        </div>
    )
}
