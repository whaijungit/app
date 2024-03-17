import { Button } from 'antd'
import { useEffect, useMemo, useRef, useState } from 'react'

interface CarouselItem {
    desc: string
    title: string
    imgUrl: string
}

interface CarouselProps {
    duration?: number
    items: CarouselItem[]
}

export const Carousel: React.FC<CarouselProps> = (props) => {

    const observe = new IntersectionObserver(
        (ev) => {
            if (!ev[0].isIntersecting) {
                clear()
            }
        },
        { threshold: 0 }
    )
    const [curIndex, setCurIndex] = useState(0)
    useEffect(() => {
        const dom = document.getElementById('carousel');
        if (dom) {
            observe.observe(dom)
        }
        return () => {
            if (dom) {
                observe.unobserve(dom)
            }
        }
    }, [])
    const time = useRef<any>()
    useEffect(() => {
        start()
        return () => {
            clear()
        }
    }, [])
    const clear = () => {
        if (time.current) {
            clearInterval(time.current)
            time.current = null
        }
    }

    const start = () => {
        if (time.current) {
            return
        }
        time.current = setInterval(() => {
            setCurIndex(prev => {
                prev++
                if (prev >= props.items.length) {
                    return 0
                }
                return prev
            })
        }, props.duration || 3000)
    }
    const dots = useMemo(() => props.items.map((it, index) => (
        <div
            key={index}
            onClick={() => {
                setCurIndex(index)
                clear()
            }}
            className={`indcator-item${curIndex === index ? ' active' : ''}`}
        >
            {it.title}
        </div>
    )), [props.items, curIndex])
    const carousels = useMemo(() => {
        return props.items.map((it, index) => (
            <div onMouseEnter={clear} onMouseLeave={start} key={index} className='carousel-item'>
                <img src={it.imgUrl} alt="" />
            </div>
        ))
    }, [props.items])
    return (
        <div className='carousel' id='carousel'>
            <div className='carousel-inner'>
                <div className='carousel-operate'>
                    <div className='carousel-title'>{props.items[curIndex].title}</div>
                    <div className='carousel-desc'>{props.items[curIndex].desc}</div>
                    <Button type='primary'>查看</Button>
                </div>
                <div className="carousel-container" style={{ transform: `translateX(-${curIndex * 1400}px)` }}>
                    {carousels}
                </div>
                <div className='carousel-indcator'>
                    {dots}
                </div>
            </div>
        </div>
    )
}

Carousel.defaultProps = {
    duration: 3000
}
