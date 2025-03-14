import { Helmet } from '@modern-js/runtime/head';
import 'remoteDesignSystem/DesignSystemRootStyles';
import './index.scss';
import FeatureStatus from '@components/FeatureStatus';
import Divider from 'remoteDesignSystem/Divider';
import Heading from 'remoteDesignSystem/Heading';

const Index = () => {
    return (
        <>
            <Helmet title="Account Overview" />
            <main className="main-content">
                <Heading level="h1">Your Account At A Glance</Heading>
                <Divider isDark={true} />
                <FeatureStatus
                    autoPayStatus="Not Enrolled"
                    autoPayLink="#"
                    paperlessStatus="Partially Enrolled"
                    paperlessLink="#"
                    payByTextStatus="Enrolled"
                    payByTextLink="/profile/paybytext"
                />
            </main>
        </>
    );
};

export default Index;
