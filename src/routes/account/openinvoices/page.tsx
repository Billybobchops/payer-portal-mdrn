import { Helmet } from '@modern-js/runtime/head';
import Accordion from 'remoteDesignSystem/Accordion';
import Divider from 'remoteDesignSystem/Divider';
import Heading from 'remoteDesignSystem/Heading';

const Index = () => (
    <>
        <Helmet title="Open Invoices" />
        <main className="main-content">
            <Heading semanticLevel="h1">Open Invoices</Heading>
            <Divider isDark={true} />
            <Accordion title="Filters">3 column layout of Account Links to go here...</Accordion>
            {/* table to go here */}
        </main>
    </>
);

export default Index;
