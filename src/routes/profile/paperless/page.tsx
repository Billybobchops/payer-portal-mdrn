import { Helmet } from '@modern-js/runtime/head';
import Divider from 'remoteDesignSystem/Divider';
import Heading from 'remoteDesignSystem/Heading';
import Paragraph from 'remoteDesignSystem/Paragraph';

const Index = () => (
    <>
        <Helmet title="Paperless" />
        <main className="main-content">
            <Heading semanticLevel="h1">Paperless</Heading>
            <Divider isDark={true} />
            {/* Paperless feature will be exported to its own repo as a consumable module ... */}
            {/* just placing some stuff in here for now */}
            <Paragraph>
                Going Paperless saves time and money by eliminating the need for paper printing and mailing of invoices
                and payments.
            </Paragraph>
        </main>
    </>
);

export default Index;
