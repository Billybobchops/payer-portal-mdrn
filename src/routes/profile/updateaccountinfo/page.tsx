import { dummyData } from '@/dummyData';
import { Helmet } from '@modern-js/runtime/head';
import { useState } from 'react';
import AccountLinks from 'remoteDesignSystem/AccountLinks';
import Alert from 'remoteDesignSystem/Alert';
import Divider from 'remoteDesignSystem/Divider';
import Heading from 'remoteDesignSystem/Heading';
import InlineLink from 'remoteDesignSystem/InlineLink';

const Index = () => {
    const [showAlert, setShowAlert] = useState(false);

    return (
        <>
            <Helmet title="Update Account Info" />
            <main className="main-content">
                <Heading semanticLevel="h1">Update Account Info</Heading>
                <Divider isDark={true} />
                <AccountLinks links={dummyData.accountLinks} spacing="u-mt-s u-mb-xl" />
                <InlineLink target="_self" onClick={() => setShowAlert(!showAlert)}>
                    Looking for email address and courtesy email?
                </InlineLink>

                {showAlert && (
                    <Alert isDismissable={false} spacing={['u-mt-s', 'u-mb-l']} variant="default">
                        Email addresses are located on the Update My User information page. Pay by Text notifications
                        are located on the Pay by Text menu.
                    </Alert>
                )}

                {/* 2 column grid of content to go here */}
            </main>
        </>
    );
};

export default Index;
