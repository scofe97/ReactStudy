export type HeaderProps = {
    title: string;
    subtitle: string;
    onClick: () => void;
};

const Header = ({ title, subtitle, onClick }: HeaderProps) => {
    return (
        <header onClick={onClick}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </header>
    );
};

export default Header;