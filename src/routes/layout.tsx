import logo from '@/assets/example-logo.png';
import { dummyData } from '@/dummyData';
import Footer from '@components/Footer';
import Sidebar from '@components/Sidebar';
import { Outlet } from '@modern-js/runtime/router';
import Header from 'remoteDesignSystem/Header';
import Heading from 'remoteDesignSystem/Heading';
import InlineLink from 'remoteDesignSystem/InlineLink';
import Paragraph from 'remoteDesignSystem/Paragraph';
import SecondaryButton from 'remoteDesignSystem/SecondaryButton';

export default function Layout() {
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
            <Header homeLink={'/home'} logoAltText="Invoice Cloud logo" logoSrc={logo} navLinks={dummyData.navLinks} />
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
