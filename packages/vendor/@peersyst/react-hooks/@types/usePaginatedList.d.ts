export default function <PageType, ReturnType>(pages: PageType[] | undefined, getItems: (page: PageType) => ReturnType[]): ReturnType[];
