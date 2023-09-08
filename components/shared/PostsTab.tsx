import { fetchUserPosts } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import PostCard from "../cards/PostCard";
import { fetchCommunityPosts } from "@/lib/actions/community.actions";

interface Props {
  currentUserId: string;
  accountId: string;
  accountType: string;
}

const PostsTab = async ({ currentUserId, accountId, accountType }: Props) => {
  let result: any;
  if (accountType === "Community") {
    result = await fetchCommunityPosts(accountId);
  } else {
    result = await fetchUserPosts(accountId);
  }

  if (!result) redirect("/");

  return (
    <section className="mt-9 flex flex-col gap-10">
      {result.posts.map((post: any) => (
        <PostCard
          key={post._id}
          content={post.text}
          author={
            accountType === "User"
              ? {
                  username: result.username,
                  image: result.image,
                  id: result.id,
                }
              : {
                  username: post.author.username,
                  image: post.author.image,
                  id: post.author.id,
                }
          }
          community={
            accountType === "Community"
              ? { name: result.name, id: result.id, image: result.image }
              : post.community
          }
          createdAt={post.createdAT}
          comments={post.children}
          parentId={post.parentId}
          id={post._id}
          currentUserId={currentUserId}
        />
      ))}
    </section>
  );
};

export default PostsTab;
