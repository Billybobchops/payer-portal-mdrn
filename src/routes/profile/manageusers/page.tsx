import { Helmet } from '@modern-js/runtime/head';
import { useState } from 'react';
import Alert from 'remoteDesignSystem/Alert';
import Divider from 'remoteDesignSystem/Divider';
import Heading from 'remoteDesignSystem/Heading';
import { Plus } from 'remoteDesignSystem/Icon';
import InlineLink from 'remoteDesignSystem/InlineLink';
import LinkIconButton from 'remoteDesignSystem/LinkIconButton';
import Paragraph from 'remoteDesignSystem/Paragraph';

const Index = () => {
    const [showAlert, setShowAlert] = useState(false);

    return (
        <>
            <Helmet title="Manage Users" />
            <main className="main-content">
                <Heading semanticLevel="h1">Manage Users</Heading>
                <Divider isDark={true} />
                <Paragraph>Select "Add New User" to invite another user to access your account.</Paragraph>
                <InlineLink target="_self" onClick={() => setShowAlert(!showAlert)}>
                    Click to learn more about the different roles you can assign for each user
                </InlineLink>

                {showAlert && (
                    <Alert isDismissable={false} spacing={['u-mt-s', 'u-mb-l']} variant="default">
                        When you give permission to Users to access your Accounts, you can restrict certain actions on
                        the account by selecting one of the following access levels: Account Guest - This access level
                        will prevent the User from making AutoPay and Paperless elections on the selected Account.
                        Account Oversight - This access level will allow the User to make AutoPay and Paperless
                        elections.
                    </Alert>
                )}

                <Heading semanticLevel="h2" classLevel="h3" spacing="u-mt-l">
                    Invite New Users
                </Heading>
                <LinkIconButton
                    disabled={false}
                    icon={<Plus />}
                    iconPosition="start"
                    text="Add New User"
                    variant="blue"
                />
                {/* Additional stuff to go here */}
            </main>
        </>
    );
};

export default Index;
