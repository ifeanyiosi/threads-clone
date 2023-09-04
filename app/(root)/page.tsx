import PostCard from "@/components/cards/PostCard";
import { fetchPosts } from "@/lib/actions/post.actions";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const result = await fetchPosts(1, 30);
  const user = await currentUser();

  console.log(user);

  return (
    <>
      <h1 className="head-text text-left">Home</h1>

      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full h-fit mt-10 gap-2">
            <h1 className="text-white font-bold">Nothing to see here..yet</h1>
            <p className="no-result">
              When they post, their posts will show up here..
            </p>
          </div>
        ) : (
          <>
            {result.posts.map((post) => (
              <PostCard
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAT}
                comments={post.children}
                parentId={post.parentId}
                id={post._id}
                currentUserId={post.user?.id || ""}
              />
            ))}
          </>
        )}
      </section>
    </>
  );
}
