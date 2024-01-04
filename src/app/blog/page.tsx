import getPostMetadata from "@/lib/postMetaData";
import PostPreview from "@/components/post/postPreview";

const HomePage = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.content} {...post} />
    ));

    return (
        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
    );
};

export default HomePage;