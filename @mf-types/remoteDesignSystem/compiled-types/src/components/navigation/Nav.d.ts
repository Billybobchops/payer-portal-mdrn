import type { NavLink } from './types';
type NavigationProps = {
    links: NavLink[];
};
declare const Nav: ({ links }: NavigationProps) => import("react").JSX.Element;
export default Nav;
