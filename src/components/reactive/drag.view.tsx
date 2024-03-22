import { ReactNode } from "react"

interface IProps {
    children: ReactNode
    id: number | string
}

interface IEvents {

}

export const Draggable: React.FC<IProps & IEvents> = (props) => {
    const handleClickDragItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
    }
    const handleDragStart = (e:React.DragEvent<HTMLDivElement>) =>{
        e.stopPropagation()
    }

    const handleDragDrop = (e:React.DragEvent<HTMLDivElement>) =>{
        const target = e.target as HTMLElement
        e.currentTarget.scrollIntoView({behavior: 'smooth',block: 'end'})
        e.currentTarget.querySelectorAll('dragging').forEach(it=>{
            it.classList.remove('dragging')
        })
        e.currentTarget.classList.add('dragging')
    }
    return (
        <div
            draggable
            className='drag-item'
            data-index={props.id}
            onDrop={handleDragDrop}
            onDragStart={handleDragStart}
            onClick={handleClickDragItem}
        >
            {props.children}
        </div>
    )
}