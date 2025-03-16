export type MainProps = {
    isLoading: boolean;
    content: React.ReactNode;
};

const Main = ({ isLoading, content }: MainProps) => {
    return !isLoading ? <main>{content}</main> : null;
};

export default Main;