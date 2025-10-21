import { App as AppProvider, ConfigProvider } from 'antd'
import zhCh from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import Router from './router'

dayjs.locale('zh-cn')

function App() {
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        fontFamily: "'NotoSans', sans-serif",
                    },
                }}
                locale={zhCh}>
                <AppProvider>
                    <Router />
                </AppProvider>
            </ConfigProvider>
        </>
    )
}

export default App
