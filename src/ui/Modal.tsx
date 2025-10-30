import { Modal } from 'antd'
import icon_close from '@/assets/icons/icon_close.svg'

type ModalProps = {
    width?: number
    open?: boolean
    title: string
    onClose?: React.MouseEventHandler<HTMLImageElement>
    children?: React.ReactNode
    footer?: React.ReactNode
}

function Index(props: ModalProps) {
    return (
        <Modal
            centered
            destroyOnHidden
            footer={false}
            maskClosable={false}
            open={props.open}
            width={props.width || 720}
            modalRender={() => {
                return (
                    <div className="relative bg-white rounded-[10px] p-[1px] pointer-events-auto">
                        <div
                            className={
                                'header relative p-[24px] border-b-[#CBCFE1] border-b-[1px] flex flex-row items-center justify-between'
                            }>
                            <div className={'title text-[20px] leading-[20px]'}>{props.title}</div>
                            <div
                                className={
                                    'absolute right-[24px] top-1/2 transform -translate-y-1/2 w-[30px] h-[30px] cursor-pointer hover:bg-[#F1F3F8]'
                                }>
                                <img
                                    className={
                                        'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                                    }
                                    src={icon_close}
                                    onClick={props.onClose}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={'body'}>{props.children}</div>
                        <div className={'footer'}>{props.footer}</div>
                    </div>
                )
            }}
        />
    )
}

export default Index
