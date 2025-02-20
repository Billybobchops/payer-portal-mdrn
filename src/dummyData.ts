export const dummyData = {
    navLinks: [
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
                { label: 'Contact Us', href: '/support/contactus' },
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
    ],
};
