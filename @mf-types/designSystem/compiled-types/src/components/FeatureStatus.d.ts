type EnrollmentStatus = 'Not Enrolled' | 'Partially Enrolled' | 'Enrolled';
interface EnrollStatusProps {
    autoPayStatus: EnrollmentStatus;
    paperlessStatus: EnrollmentStatus;
    payByTextStatus: EnrollmentStatus;
    autoPayLink: string;
    paperlessLink: string;
    payByTextLink: string;
}
declare const EnrollStatus: React.FC<EnrollStatusProps>;
export default EnrollStatus;
