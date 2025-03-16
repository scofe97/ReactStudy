export type SidebarProps = {
    links: string[];
    onLinkClick: (link: string) => void;
};

const Sidebar = ({ links, onLinkClick }: SidebarProps) => {
    return (
        <aside>
            <ul>
                {links.map((link) => (
                    <li key={link} onClick={() => onLinkClick(link)}>
                        {link}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;