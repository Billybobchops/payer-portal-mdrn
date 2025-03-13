import { Helmet } from '@modern-js/runtime/head';
import Divider from 'remoteDesignSystem/Divider';
// import 'remoteDesignSystem/DesignSystemRootStyles';
// import './index.scss';
import Heading from 'remoteDesignSystem/Heading';
const Index = () => (
    <>
        <Helmet title="Pay by Text" />
        <main className="main-content">
            <Heading level="h1">Pay by Text</Heading>
            <Divider isDark={true} />
            {/* imported pay by text stuff goes here? */}
        </main>
    </>
);

export default Index;
