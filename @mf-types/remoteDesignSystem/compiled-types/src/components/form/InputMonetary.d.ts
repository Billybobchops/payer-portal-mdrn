import type { Spacing } from '@styles/spacing';
interface InputMonetaryProps {
    disabled?: boolean;
    helperText?: string;
    label: string;
    name: string;
    required: boolean;
    spacing?: Spacing | Spacing[];
}
declare const InputMonetary: React.FC<InputMonetaryProps>;
export default InputMonetary;
