import { TransferListItem } from '@mantine/core';

export interface AssessFile extends File, TransferListItem {
    label: string;
    value: string;
    name: string;
    size: number;
    path: string;
    email: string;
    version: string;
    lastModified: number;
}