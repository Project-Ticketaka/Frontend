export interface ILayoutProps {
    menu: string;
    onSetMenu: (id: string)=>void;
}

export interface IHeaderProps extends ILayoutProps {
    category: Array<object>;
    goMyPage: () => void;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void;

}
