import Tag from '../ui/tag';

export default function EnrolmentCard() {
    return(
        <div className="w-100 hover:bg-yellow-100 p-4 flex flex-col gap-4 group cursor-pointer">
            <h1 className="font-sans text-xl font-medium text-gray-600 group-hover:underline">Lorem ipsum dolor sit amet dolor consectetur adipiscing elit</h1>
            <p className="line-clamp-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="flex gap-2 justify-end">
                <Tag tagText="Tag 1" />
                <Tag tagText="Tag 2" />
                <Tag tagText="Tag 3" />
            </div>
        </div>
    );
}