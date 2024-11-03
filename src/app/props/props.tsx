export type TextProps = {
    textContent: string,
    className: string,
    fontFamily: string
}
export type TitleProps ={
    textContent: string,
    className: string,
    fontFamily: string
}
export type ImageProps ={
    url: any;
    alt: string;
    width?: number;
    height?: number;
    classname: string
}
export type LinkMenuProps = {
    url: string;
    name: string
}
export type SearcherProps = {
    placeholder: string,
    classname: string,
    type: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>)=> void
}
export interface ModalProps {
    id: number,
    session: any,
    isOpen: boolean;
    onClose: () => void;
}
export type CourseProps = {
    id: number,
    title: string,
    description: string,
    instructorId: number,
    createdAt: Date,
    updatedAt: Date,
    session: any,
    onClick: () => void
}
export type CourseCreate = {
    title: string,
    description: string,
    instructorId: number,
}
export type DeleteProps = {
    onClick: () => void
}
export type CreateProps = {
    text: string,
    onClick: () => void
}