import PostCard from "@/components/cards/PostCard";
import Comment from "@/components/forms/Comment";
import { fetchPostById } from "@/lib/actions/post.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  if (!params.id) return null;
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo.onboarded) redirect("/onboadring");

  const post = await fetchPostById(params.id);

  return (
    <section className="relative">
      <div>
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
      </div>

      <div className="mt-7 ">
        <Comment
          postId={post.id}
          currentUserImg={userInfo.image}
          currentUserId={JSON.stringify(userInfo._id)}
        />
      </div>

      <div className="mt-10">
        {post.children.map((childItem: any) => (
          <PostCard
            content={childItem.text}
            author={childItem.author}
            community={childItem.community}
            createdAt={childItem.createdAT}
            comments={childItem.children}
            parentId={childItem.parentId}
            id={childItem._id}
            currentUserId={childItem.user?.id || ""}
            isComment
          />
        ))}
      </div>
    </section>
  );
};

export default page;
