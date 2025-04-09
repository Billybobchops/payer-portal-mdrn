import { Helmet } from '@modern-js/runtime/head';
import Divider from 'remoteDesignSystem/Divider';
import Form from 'remoteDesignSystem/Form';
import Heading from 'remoteDesignSystem/Heading';
import Paragraph from 'remoteDesignSystem/Paragraph';

const Index = () => (
    <>
        <Helmet title="Change Password" />
        <main className="main-content">
            <Heading semanticLevel="h1">Change Password</Heading>
            <Divider isDark={true} />
            <Paragraph>Please provide your new password and click update my password.</Paragraph>
            {/* <Form></Form> */}
        </main>
    </>
);

export default Index;
