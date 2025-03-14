interface CheckboxesProps {
    legend: string;
    options: {
        text: string;
        id: string;
        checked: boolean;
        required?: boolean;
    }[];
}
declare const Checkboxes: React.FC<CheckboxesProps>;
export default Checkboxes;
