import { Helmet } from '@modern-js/runtime/head';
// import 'remoteDesignSystem/DesignSystemRootStyles';
// import './index.scss';
import Heading from 'remoteDesignSystem/Heading';

const Index = () => (
    <>
        <Helmet title="Contact Us" />
        <main className="main-content">
            <Heading level="h1">Contact Us</Heading>
        </main>
    </>
);

export default Index;
