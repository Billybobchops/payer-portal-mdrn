import type { Spacing } from '@styles/spacing';
import type React from 'react';
interface IconButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
    icon?: React.ReactNode;
    spacing?: Spacing | Spacing[];
    type?: 'button' | 'submit';
    variant?: 'blue' | 'green' | 'red';
}
declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
