export type EditorExtension = {
    id: string,
    title: string,
    avatar: string,
    type: string,
    link: string,
    text: string
}

export type EditorTypes = {
    id: string,
    title: string,
    icon: string,
    avatar: string,
    type: string,
    link: string,
    text: string
    extensions: EditorExtension[]
}