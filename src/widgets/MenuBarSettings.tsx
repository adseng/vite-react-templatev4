import { ROUTES } from '@/router/settings'
import { BsFillBarChartLineFill } from 'react-icons/bs'
import { FaClipboardList } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
export const MENU_LIST = [
    { name: '记录', icon: <FaClipboardList className="text-[20px]" />, path: ROUTES.HISTORY },
    {
        name: '计算队列',
        icon: <BsFillBarChartLineFill className="text-[20px]" />,
        path: ROUTES.CALC_QUE,
    },
]

export const MENU_BOTTOM_ACTIONS = [
    {
        name: '关于',
        icon: <AiOutlineInfoCircle className="text-[20px]" />,
        path: ROUTES.ABOUT,
    },
]
