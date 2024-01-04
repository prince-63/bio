import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/lib/postMetaData";
import { Metadata } from "next";

const getPostContent = (content: string) => {
    const folder = "posts/";
    const file = `${folder}${content}.md`;
    const readContent = fs.readFileSync(file, "utf8");
    const matterResult = matter(readContent);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        content: post.content,
    }));
};

export const metadata: Metadata = {
    title: "blog"
}

const PostPage = (props: any) => {
    const postParam = props.params.post;
    const post = getPostContent(postParam);
    metadata['title'] = post.data.title;
    const code = `
    function helloWorld() {
      console.log('Hello, world!');
    }
  `;

    return (
        <div>
            <div className="my-12 text-center">
                <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
                <p className="text-slate-400 mt-2">{post.data.date}</p>
            </div>

            <article className="prose prose-neutral">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default PostPage;

