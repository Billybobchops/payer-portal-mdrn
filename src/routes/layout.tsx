import 'remoteDesignSystem/DesignSystemRootStyles';
import './index.scss';
import logo from '@/assets/example-logo.png';
import trustwave from '@/assets/trustwave.png';
import Sidebar from '@components/Sidebar';
import { Outlet } from '@modern-js/runtime/router';
import Footer from 'remoteDesignSystem/Footer';
import type { Link } from 'remoteDesignSystem/Footer';
import Header from 'remoteDesignSystem/Header';
import Heading from 'remoteDesignSystem/Heading';
import { ICFooterLogo } from 'remoteDesignSystem/Icon';
import { Home } from 'remoteDesignSystem/Icon';
import InlineLink from 'remoteDesignSystem/InlineLink';
import Paragraph from 'remoteDesignSystem/Paragraph';
import SecondaryButton from 'remoteDesignSystem/SecondaryButton';

export default function Layout() {
    const navLinks = [
        { label: 'Home', href: '/', icon: <Home fill="var(--nav-link-color)" />, mobileOnlyText: true },
        {
            label: 'My Account',
            subMenu: [
                { label: 'View or Pay Open Invoices', href: '/account/openinvoices' },
                { label: 'View or Pay Closed Invoices', href: '/account/closedinvoices' },
                { label: 'View Scheduled Payments', href: '/account/scheduledpayments' },
                { label: 'Payment History', href: '/account/paymenthistory' },
            ],
        },
        {
            label: 'My Profile',
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
            subMenu: [
                {
                    label: 'Customer Service',
                    href: '/support/customerservice',
                },
                {
                    label: 'Help - User Videos',
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

    const dummyFooterData: Link[] = [
        {
            label: 'Privacy Policy',
            href: 'https://www.invoicecloud.net/privacy-policy',
            variant: 'grey',
        },
        {
            label: 'Accessibility',
            href: 'https://invoicecloud.net/accessibility-statement',
            variant: 'grey',
        },
        {
            label: 'Secure Site',
            href: 'https://sealserver.trustwave.com/cert.php?customerId=e6fe5831b6ba46ef83d7c7330126e94d',
            variant: 'grey',
            imageSrc: trustwave,
            imageAlt: "This site protected by Trustwave's Trust Commerce Program. You may click on seal to validate.",
        },
    ];

    // To Do: I believe this is custom CRM content... we may need to build a utility function to convert it to our components
    // We may want to look at generating the content in the component file somehow while still conditionally rendering it here
    const sidebarContent = (
        <>
            <Heading semanticLevel="h3">Need Help?</Heading>
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
            <Header homeLink={'/'} logoAltText="Invoice Cloud logo" logoSrc={logo} navLinks={navLinks} />
            <div className="layout">
                <div className="content">
                    <Outlet />
                    {sidebarContent && <Sidebar>{sidebarContent}</Sidebar>}
                </div>
                <Footer logo={<ICFooterLogo />} links={dummyFooterData} />
            </div>
        </>
    );
}
