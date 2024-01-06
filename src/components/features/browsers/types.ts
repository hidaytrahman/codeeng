export type BrowserExtension = {
    id: string,
    title: string,
    avatar: string,
    type: string,
    link: string,
    text: string
}

export type BrowserTypes = {
    id: string,
    title: string,
    icon: string,
    avatar: string,
    type: string,
    link: string,
    text: string
    extensions: BrowserExtension[]
}