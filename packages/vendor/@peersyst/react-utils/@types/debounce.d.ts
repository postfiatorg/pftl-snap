export interface Clearable {
    clear(): void;
}
export default function debounce<T extends (...args: any[]) => any>(func: T, wait?: number): ((...args: any[]) => any) & Clearable;
