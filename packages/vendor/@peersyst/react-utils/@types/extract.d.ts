export default function extract<T extends object, K extends (keyof T)[]>(obj: T, ...keys: K): [Pick<T, K[number]>, Omit<T, K[number]>];
