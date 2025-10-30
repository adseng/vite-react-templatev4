import { NavLink } from 'react-router-dom'
import { MENU_BOTTOM_ACTIONS, MENU_LIST } from './MenuBarSettings'

function MenuItem(props: {
    menuName: React.ReactNode
    menuIcon: React.ReactNode
    menuPath: string
}) {
    return (
        <NavLink
            to={props.menuPath}
            className={v => (v.isActive ? 'text-[#69c0ff]!' : 'text-[#242f57]!')}>
            <MenuItemAction menuName={props.menuName} menuIcon={props.menuIcon} />
        </NavLink>
    )
}

function MenuItemAction(props: { menuName: React.ReactNode; menuIcon: React.ReactNode }) {
    return (
        <div className={'flex flex-col items-center'}>
            <div className="w-[22px] h-[22px] flex justify-center items-center">
                {props.menuIcon}
            </div>
            <label className="">{props.menuName}</label>
        </div>
    )
}

export default function MenuBar() {
    return (
        <div className="w-full h-full flex flex-col justify-between overflow-hidden">
            <div className={'flex flex-col gap-[10px]'}>
                {MENU_LIST.map(menu => (
                    <MenuItem
                        key={menu.path}
                        menuName={menu.name}
                        menuIcon={menu.icon}
                        menuPath={menu.path}
                    />
                ))}
            </div>
            <div className={'mx-[20px] h-[1px] bg-[#d2d5e1]'}></div>
            <div className={'flex flex-col justify-end gap-[10px]'}>
                {MENU_BOTTOM_ACTIONS.map(menu => (
                    <MenuItem
                        key={menu.path}
                        menuName={menu.name}
                        menuIcon={menu.icon}
                        menuPath={menu.path}
                    />
                ))}
            </div>
        </div>
    )
}
