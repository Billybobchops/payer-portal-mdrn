import { Helmet } from '@modern-js/runtime/head';
import Divider from 'remoteDesignSystem/Divider';
import Form from 'remoteDesignSystem/Form';
import Heading from 'remoteDesignSystem/Heading';
import Paragraph from 'remoteDesignSystem/Paragraph';
import PrimaryButton from 'remoteDesignSystem/PrimaryButton';

const Index = () => (
    <>
        <Helmet title="Update User Information" />
        <main className="main-content">
            <Heading semanticLevel="h1">Update My User Information</Heading>
            <Divider isDark={true} />
            <Paragraph>Please review your user information. Click save my changes to save any modifications.</Paragraph>
            {/* <Form></Form> */}
            <Divider isDark={true} spacing={['u-mt-l', 'u-mb-l']} />
            {/* checkbox needs to go in a 2 col layout with the following heading/paragraph */}
            <Heading semanticLevel="h2" classLevel="h3" spacing="u-mt-l">
                Unsubscribe from Invoice Notifications.
            </Heading>
            <Paragraph>
                By checking this box and hitting the update button you will no longer receive emailed Invoice
                Notifications from Invoice Cloud. However, we are still required to send you Payment Receipts and other
                payment related notifications.
            </Paragraph>
            <PrimaryButton disabled={false} text="Save my changes" variant="green" />
        </main>
    </>
);

export default Index;
