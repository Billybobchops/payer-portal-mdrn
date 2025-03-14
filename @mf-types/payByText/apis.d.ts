
    export type RemoteKeys = 'payByText/PayByText';
    type PackageType<T> = T extends 'payByText/PayByText' ? typeof import('payByText/PayByText') :any;