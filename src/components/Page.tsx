type PageProps = {
    header: React.ReactNode;
    sidebar: React.ReactNode;
    main: React.ReactNode;
};

function Page({ header, sidebar, main }: PageProps) {
    return (
        <div>
            {header}
            {sidebar}
            {main}
        </div>
    );
}

export default Page;