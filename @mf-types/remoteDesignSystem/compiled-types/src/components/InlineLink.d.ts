import type { Spacing } from '@styles/spacing';
interface LinkProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    spacing?: Spacing | Spacing[];
    target?: string;
    variant?: 'blue' | 'grey';
}
declare const InlineLink: React.FC<LinkProps>;
export default InlineLink;
