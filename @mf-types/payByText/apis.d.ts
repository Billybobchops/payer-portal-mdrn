
    export type RemoteKeys = 'payByText/PayByTextPage';
    type PackageType<T> = T extends 'payByText/PayByTextPage' ? typeof import('payByText/PayByTextPage') :any;