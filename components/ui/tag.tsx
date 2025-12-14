interface TagProps {
    tagText?: string;
}
export default function Tag({ tagText }: TagProps) {

    return (
        <div className="flex w-fit h-fit px-2 py-1 text-xs rounded bg-yellow-200">{tagText || "Lorem ipsum"}</div>
    );
}