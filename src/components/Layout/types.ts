export interface ILayoutProps {
    menu: string;
    onSetMenu: (id: string)=>void;
}

export interface IHeaderProps extends ILayoutProps {
    category: Array<object>;
}
