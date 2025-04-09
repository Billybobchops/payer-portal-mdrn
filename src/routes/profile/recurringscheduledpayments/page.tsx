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
            <Helmet title="Recurring Scheduled Payments" />
            <main className="main-content">
                <Heading semanticLevel="h1">Recurring Scheduled Payments</Heading>
                <Divider isDark={true} />
                <Heading semanticLevel="h2" classLevel="h3" spacing="u-mt-l">
                    Manage
                </Heading>
                <LinkIconButton
                    disabled={false}
                    icon={<Plus />}
                    iconPosition="start"
                    text="New Recurring Scheduled Payment"
                    variant="blue"
                />
                <Paragraph>
                    Our Recurring Scheduled Payments feature allows you to schedule a monthly payment once and then
                    forget about it.
                </Paragraph>
                <InlineLink target="_self" onClick={() => setShowAlert(!showAlert)}>
                    Click to learn more about this feature.
                </InlineLink>
                {showAlert && (
                    <Alert isDismissable={false} spacing={['u-mt-s', 'u-mb-l']} variant="default">
                        You may choose to pay a fixed payment amount or have our system automatically change the payment
                        amount to the Balance Due of the invoice. You may also choose when you would like this payment
                        to occur. You can choose to have it paid on a specific day every month, or on the date your
                        invoice is due. Payment is first applied to the oldest outstanding invoice. Paying in full will
                        pay all outstanding invoices.
                    </Alert>
                )}
                {/* Table to go here */}
            </main>
        </>
    );
};

export default Index;
