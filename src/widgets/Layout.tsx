import { NavLink, Outlet } from 'react-router-dom'
import MenuBar from './MenuBar'
import { MENU_BOTTOM_ACTIONS, MENU_LIST } from './MenuBarSettings'
import { Suspense } from 'react'

export default function Layout() {
    return (
        // 超出允许滚动
        <div className="h-screen min-h-[800px] w-screen min-w-[1080px] flex flex-col">
            <div className="h-[72px] px-[20px] bg-white flex items-center justify-between">
                {/* header left */}
                <div>
                    {MENU_LIST.concat(...MENU_BOTTOM_ACTIONS).map(menu => (
                        <NavLink
                            key={menu.path}
                            to={menu.path}
                            className={({ isActive }) =>
                                'text-[20px] text-[#242f57]! ' + (isActive ? '' : 'hidden')
                            }>
                            {menu.name}
                        </NavLink>
                    ))}
                </div>

                {/*header right*/}
                <div>{/* Add your header right content here */}</div>
            </div>

            <div className="h-[calc(100vh-72px)] pr-[20px] py-[20px] flex flex-row gap-[20px]">
                {/*side menu bar*/}
                <div className="w-[100px] h-full py-[20px] rounded-[10px] bg-white">
                    <MenuBar />
                </div>
                <div className="w-[calc(100%-120px)] h-full p-[20px] overflow-auto rounded-[10px] bg-white">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
