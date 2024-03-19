import * as React from 'react'
import { FC } from 'react'

interface DragProps {
    children: React.ReactNode
    onDragStart?: (e: React.DragEvent) => void
}

export const DragItem: FC<DragProps> = (props) => {
    return (
        <div draggable {...props} data-drag='move' />
    )
}