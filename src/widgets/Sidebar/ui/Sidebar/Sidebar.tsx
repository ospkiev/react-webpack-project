import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collpsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed(prev => !prev)
    };

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collpsed}, [className])}>
            <button onClick={onToggle}>Toggle collapse</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

export default Sidebar;