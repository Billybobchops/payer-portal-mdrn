import type { Spacing } from '@styles/spacing';
interface InputProps {
    disabled?: boolean;
    helperText?: string;
    label: string;
    name: string;
    required: boolean;
    spacing?: Spacing | Spacing[];
    type: 'text' | 'tel' | 'number';
}
declare const Input: React.FC<InputProps>;
export default Input;
