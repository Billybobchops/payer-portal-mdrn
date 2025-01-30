interface ProgressIndicatorProps {
    activeStep: 1 | 2 | 3;
    stepTitles?: string[];
}
declare const ProgressIndicator: React.FC<ProgressIndicatorProps>;
export default ProgressIndicator;
