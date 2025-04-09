export const dummyData = {
    navLinks: [
        {
            label: 'My Account',
            href: '/account',
            subMenu: [
                { label: 'Open Invoices', href: '/account/openinvoices' },
                { label: 'Closed Invoices', href: '/account/closedinvoices' },
                { label: 'Scheduled Payments', href: '/account/scheduledpayments' },
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
                        { label: 'Account Linking', href: 'https://www.google.com' },
                        { label: 'Managing Your InvoiceCloud Account', href: 'https://www.google.com' },
                        {
                            label: 'How to Update Your AutoPay Payment Method',
                            href: 'https://www.google.com',
                        },
                        { label: 'How to Register for Pay by Text', href: 'https://www.google.com' },
                        { label: 'Making a Payment using Pay by Text', href: 'https://www.google.com' },
                        { label: 'Make Payments using PayPal', href: 'https://www.google.com' },
                        { label: 'Make Payments using Venmo', href: 'https://www.google.com' },
                        { label: 'Make Payments using Google Pay', href: 'https://www.google.com' },
                        { label: 'Make Payments using Apple Pay', href: 'https://www.google.com' },
                    ],
                },
            ],
        },
        { label: 'Sign Out', href: '/signout' },
    ],
    accountLinks: [
        {
            text: '#UTIL-1001 Deana Ada',
            href: '/',
        },
        {
            text: '#UTIL-1004 Nikephoros Botaneiates',
            href: '/',
        },
    ],
};
