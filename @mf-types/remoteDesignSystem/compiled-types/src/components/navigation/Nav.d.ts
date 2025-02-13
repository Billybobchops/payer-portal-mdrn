import type { NavLink } from './types';
type NavigationProps = {
    links: NavLink[];
    isMobileNavOpen: boolean;
};
declare const Nav: ({ links, isMobileNavOpen }: NavigationProps) => import("react").JSX.Element;
export default Nav;
