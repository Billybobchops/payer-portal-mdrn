import { Helmet } from '@modern-js/runtime/head';
import Divider from 'remoteDesignSystem/Divider';
import Heading from 'remoteDesignSystem/Heading';

const Index = () => (
    <>
        <Helmet title="Manage Accounts" />
        <main className="main-content">
            <Heading semanticLevel="h1">Manage Accounts</Heading>
            <Divider isDark={true} />
        </main>
    </>
);

export default Index;
