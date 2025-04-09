import { Helmet } from '@modern-js/runtime/head';
import Divider from 'remoteDesignSystem/Divider';
import Heading from 'remoteDesignSystem/Heading';
import { Plus } from 'remoteDesignSystem/Icon';
import LinkIconButton from 'remoteDesignSystem/LinkIconButton';

const Index = () => (
    <>
        <Helmet title="Payment Methods" />
        <main className="main-content">
            <Heading semanticLevel="h1">Payment Methods</Heading>
            <Divider isDark={true} />
            <Heading semanticLevel="h2" classLevel="h3" spacing="u-mt-l">
                Manage Your Payment Methods
            </Heading>
            <LinkIconButton
                disabled={false}
                icon={<Plus />}
                iconPosition="start"
                text="Add New Credit/Debit Card"
                variant="blue"
            />
            <LinkIconButton disabled={false} icon={<Plus />} iconPosition="start" text="Add New Bank" variant="blue" />
            {/* Table to go here */}
        </main>
    </>
);

export default Index;
