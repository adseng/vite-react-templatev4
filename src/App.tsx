import { App as AppProvider, ConfigProvider } from 'antd'
import zhCh from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import Router from './router'
import { ErrorBoundary } from 'react-error-boundary'

dayjs.locale('zh-cn')

function App() {
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorText: '#242f57',
                        fontFamily: "'NotoSans', sans-serif",
                        controlHeight: 40,
                    },
                }}
                locale={zhCh}>
                <AppProvider>
                    <ErrorBoundary fallback={<div>Something went wrong</div>}>
                        <Router />
                    </ErrorBoundary>
                </AppProvider>
            </ConfigProvider>
        </>
    )
}

export default App
