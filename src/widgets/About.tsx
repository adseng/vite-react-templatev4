// import Modal from '@/ui/Modal'

export default function About() {
    return (
        <div
            className={
                'mx-auto mt-[46px] mb-[100px] w-fit text-[14px] text-[#242f57] flex flex-col gap-[36px]'
            }>
            <div>软件名称：{import.meta.env.VITE_APP_NAME}</div>
            <div>软件型号：{import.meta.env.VITE_APP_UML}</div>
            <div>软件版本：{import.meta.env.VITE_APP_VERSION}</div>
            <div>制造商：{import.meta.env.VITE_APP_PRODUCER}</div>
        </div>
    )
}

// export default function About(props: { open: boolean; setOpen: (open: boolean) => void }) {

// return (
//     <Modal
//         width={720}
//         title={'产品信息'}
//         open={props.open}
//         onClose={() => {
//             props.setOpen(false)
//         }}
//         footer={false}>
//         <div
//             className={
//                 'mx-auto mt-[46px] mb-[100px] w-fit text-[14px] text-[#242f57] flex flex-col gap-[36px]'
//             }>
//             <div>软件名称：{import.meta.env.VITE_APP_NAME}</div>
//             <div>软件型号：{import.meta.env.VITE_APP_UML}</div>
//             <div>软件版本：{import.meta.env.VITE_APP_VERSION}</div>
//             <div>制造商：{import.meta.env.VITE_APP_PRODUCER}</div>
//         </div>
//     </Modal>
// )
// }
