import logo from '@/assets/example-logo.png';
import Footer from '@components/Footer';
import Sidebar from '@components/Sidebar';
import { Outlet } from '@modern-js/runtime/router';
import Header from 'remoteDesignSystem/Header';
import Heading from 'remoteDesignSystem/Heading';
import InlineLink from 'remoteDesignSystem/InlineLink';
import Paragraph from 'remoteDesignSystem/Paragraph';
import SecondaryButton from 'remoteDesignSystem/SecondaryButton';

export default function Layout() {
    const navLinks = [
        {
            label: 'My Account',
            href: '/account',
            subMenu: [
                { label: 'View or Pay Open Invoices', href: '/account/openinvoices' },
                { label: 'View or Pay Closed Invoices', href: '/account/closedinvoices' },
                { label: 'View Scheduled Payments', href: '/account/scheduledpayments' },
                { label: 'Payment History', href: '/account/paymenthistory' },
            ],
        },
        {
            label: 'My Profile',
            href: '/profile',
            subMenu: [
                { label: 'AutoPay', href: '/profile/autopay' },
                { label: 'Change Password', href: '/profile/changepassword' },
                { label: 'Manage Accounts', href: '/profile/manageaccounts' },
                { label: 'Manage Users', href: '/profile/manageusers' },
                { label: 'Paperless', href: '/profile/paperless' },
                { label: 'Payment Methods', href: '/profile/paymentmethods' },
                { label: 'Pay by Text', href: '/profile/paybytext' },
                { label: 'Recurring Scheduled Payments', href: '/profile/recurringscheduledpayments' },
                { label: 'Update Account Info', href: '/profile/updateaccountinfo' },
                { label: 'Update My User Info', href: '/profile/updateuserinfo' },
            ],
        },
        {
            label: 'Support',
            href: '/support',
            subMenu: [
                {
                    label: 'Help - User Videos',
                    href: '/support/uservideos',
                    subMenu: [
                        { label: 'Account Linking', href: '/support/uservideos/accountlinking' },
                        { label: 'Managing Your InvoiceCloud Account', href: '/support/uservideos/accountmanagement' },
                        {
                            label: 'How to Update Your AutoPay Payment Method',
                            href: '/support/uservideos/autopayupdate',
                        },
                        { label: 'How to Register for Pay by Text', href: '/support/uservideos/registerpaybytext' },
                        { label: 'Making a Payment using Pay by Text', href: '/support/uservideos/paymentpaybytext' },
                        { label: 'Make Payments using PayPal', href: '/support/uservideos/paymentpaypal' },
                        { label: 'Make Payments using Venmo', href: '/support/uservideos/paymentvenmo' },
                        { label: 'Make Payments using Google Pay', href: '/support/uservideos/paymentgooglepay' },
                        { label: 'Make Payments using Apple Pay', href: '/support/uservideos/paymentapplepay' },
                    ],
                },
            ],
        },
        { label: 'Sign Out', href: '/signout' },
    ];

    // To Do: I believe this is custom CRM content... we may need to build a utility function to convert it to our components
    // We may want to look at generating the content in the component file somehow while still conditionally rendering it here
    const sidebarContent = (
        <>
            <Heading level="h3">Need Help?</Heading>
            <Paragraph>
                You may reach us at <InlineLink href="tel:1-800-555-1234">(800) 555-1234.</InlineLink>
            </Paragraph>
            <Paragraph>
                You may email your questions to{' '}
                <InlineLink href="mailto:test@invoicecloud.com">test@invoicecloud.com</InlineLink>
            </Paragraph>
            <SecondaryButton text="Email Us" disabled={false} />
        </>
    );
    // demo full width page by setting this to null :)
    // const sidebarContent = null;

    return (
        <>
            <Header homeLink={'/home'} logoAltText="Invoice Cloud logo" logoSrc={logo} navLinks={navLinks} />
            <div className="layout">
                <div className="content">
                    <Outlet />
                    {sidebarContent && <Sidebar>{sidebarContent}</Sidebar>}
                </div>
                <Footer />
            </div>
        </>
    );
}
