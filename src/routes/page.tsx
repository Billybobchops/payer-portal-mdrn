import { Helmet } from '@modern-js/runtime/head';
import 'remoteDesignSystem/DesignSystemRootStyles';
import './index.scss';
import FeatureStatus from '@components/FeatureStatus';
import Heading from 'remoteDesignSystem/Heading';

const Index = () => (
    <>
        <Helmet title="payer-portal" />
        <main className="main-content">
            <Heading level="h1">Your Account At A Glance</Heading>
            <FeatureStatus
                autoPayStatus="Not Enrolled"
                autoPayLink="#"
                paperlessStatus="Partially Enrolled"
                paperlessLink="#"
                payByTextStatus="Enrolled"
                payByTextLink="#"
            />
        </main>
    </>
);

export default Index;
