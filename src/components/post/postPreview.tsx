import Link from "next/link";
import { PostMetadata } from "@/lib/types";

const PostPreview = (props: PostMetadata) => {
    return (
        <div
            className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white"
        >
            <p className="text-bold mb-3 text-slate-400">{props.date}</p>

            <Link href={`blog/posts/${props.content}`}>
                <h2 className=" font-medium text-violet-600 hover:underline mb-1">{props.title}</h2>
            </Link>
            <p className="text-slate-700">{props.subtitle}</p>
        </div>
    );
};

export default PostPreview;