import './index.less'
import { Carousel } from './carousel'
import imgUrl from '@/assets/model.png'
import { Advantage } from './advantage'
import { HostCardGroup } from './host.tools'
import { Achievement } from './achievement'
import Partners from './partners'


const imgs = [
    {
        imgUrl: imgUrl,
        title: '丰富的工具类型1',
        desc: '计算大量样本或高密度标记基因型的IBS遗传距离1',
    },
    {
        imgUrl: imgUrl,
        title: '丰富的工具类型2',
        desc: '计算大量样本或高密度标记基因型的IBS遗传距离2',
    },
    {
        imgUrl: imgUrl,
        title: '丰富的工具类型3',
        desc: '计算大量样本或高密度标记基因型的IBS遗传距离3',
    },
    {
        imgUrl: imgUrl,
        title: '丰富的工具类型4',
        desc: '计算大量样本或高密度标记基因型的IBS遗传距离4',
    },
]

const Home: React.FC = () => {
    return (
        <>
            <Carousel items={imgs} />
            <Advantage />
            <HostCardGroup />
            <Achievement />
            <Partners />
        </>
    )
}

export default Home;