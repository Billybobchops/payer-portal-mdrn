import { Helmet } from '@modern-js/runtime/head';
import Divider from 'remoteDesignSystem/Divider';
// import 'remoteDesignSystem/DesignSystemRootStyles';
// import './index.scss';
import Heading from 'remoteDesignSystem/Heading';

const Index = () => (
    <>
        <Helmet title="Contact Us" />
        <main className="main-content">
            <Heading semanticLevel="h1">Contact Us</Heading>
            <Divider isDark={true} />
        </main>
    </>
);

export default Index;
