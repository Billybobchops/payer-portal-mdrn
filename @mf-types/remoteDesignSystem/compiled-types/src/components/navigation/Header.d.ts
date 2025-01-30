import type { NavLink } from './types';
interface HeaderProps {
    homeLink: string;
    logoAltText: string;
    logoSrc: string;
    navLinks: NavLink[];
}
declare const Header: React.FC<HeaderProps>;
export default Header;
