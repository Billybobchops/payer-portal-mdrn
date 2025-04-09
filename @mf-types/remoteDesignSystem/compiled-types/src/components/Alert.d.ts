import type { Spacing } from '@styles/spacing';
interface AlertProps {
    content: string;
    isDismissable: boolean;
    spacing?: Spacing | Spacing[];
    variant: 'default' | 'warning' | 'error' | 'success';
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
