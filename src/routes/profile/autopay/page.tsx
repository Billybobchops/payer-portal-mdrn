import { Helmet } from '@modern-js/runtime/head';
import Divider from 'remoteDesignSystem/Divider';
import Heading from 'remoteDesignSystem/Heading';
import Paragraph from 'remoteDesignSystem/Paragraph';

const Index = () => (
    <>
        <Helmet title="AutoPay" />
        <main className="main-content">
            <Heading semanticLevel="h1">AutoPay</Heading>
            <Divider isDark={true} />
            {/* AutoPay feature will be exported to its own repo as a consumable module ... */}
            {/* just placing some stuff in here for now */}
            <Paragraph>
                Save trees, checks, stamps, and time. Sign up for AutoPay and pay invoices automatically on their
                AutoPay collection date. AutoPay will automatically pay invoices on their due date using your default
                payment method. AutoPay will send you an email confirmation of your transaction as each invoice is paid,
                automatically.
            </Paragraph>
            {/* Table to go here */}
        </main>
    </>
);

export default Index;
