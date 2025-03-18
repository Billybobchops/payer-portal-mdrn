import type { Spacing } from '@styles/spacing';
interface HelperTextProps {
    helperID: string;
    helperText: string;
    spacing?: Spacing | Spacing[];
}
declare const HelperText: React.FC<HelperTextProps>;
export default HelperText;
