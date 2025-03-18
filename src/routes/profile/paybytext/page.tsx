import { Helmet } from '@modern-js/runtime/head';
import PayByText from 'payByText/PayByText';
import Divider from 'remoteDesignSystem/Divider';
import Heading from 'remoteDesignSystem/Heading';

const Index = () => (
    <>
        <Helmet title="Pay by Text" />
        <main className="main-content">
            <Heading semanticLevel="h1">Pay by Text</Heading>
            <Divider isDark={true} />
            <PayByText />
        </main>
    </>
);

export default Index;
