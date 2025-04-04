interface NavSubItem {
    name: string;
    url: string;
    description?: string;
}

export interface NavItem {
    name: string;
    url: string;
    items?: NavSubItem[];
}