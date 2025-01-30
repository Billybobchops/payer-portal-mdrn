import classes from './Sidebar.module.scss';

interface SidebarProps {
    children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    if (!children) return null; // If no children, don't render anything

    return (
        <aside id="sidebar" className={classes.sidebar}>
            {children}
        </aside>
    );
};

export default Sidebar;
