interface ContactsTabsProps {
    title: string;
    info: string;
    icon: JSX.Element; // Assuming your icon is a JSX element
}

export function ContactsTabs({ title, info, icon }: ContactsTabsProps) {
    return <div className='flex gap-3'>
        <div className='shadow-md shadow-yellow-500/40 px-3 p-3 border-2 rounded-lg'>
            {icon}
        </div>
        <div className='flex flex-col justify-center w-full'>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{title}</p>
            <p className="font-medium leading-none text-md text-ellipsis overflow-hidden">{info}</p>
        </div>
    </div>;
}