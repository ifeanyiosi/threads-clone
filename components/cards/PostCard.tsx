import { formatDateString } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  id: string;
  currentUserId: string;
  parentId: string | null;
  content: string;
  author: {
    username: string;
    image: string;
    id: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  comments: {
    author: {
      image: string;
    };
  }[];
  createdAt: string;
  isComment?: boolean;
}

const PostCard = ({
  id,
  content,
  author,
  community,
  createdAt,
  comments,
  parentId,
  currentUserId,
  isComment,
}: Props) => {
  console.log({ author });
  return (
    <article
      className={`flex w-full flex-col rounded-xl hover:bg-dark-2 cursor-pointer bg-dark-1 border border-dark-3 p-7 ${
        isComment ? "px-0 xs:px-7" : "bg-dark-1 p-7"
      } `}
    >
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link href={`/profile/${author.id}`} className="relative h-11 w-11">
              <Image
                className="cursor-pointer rounded-full"
                src={author.image}
                fill
                alt="profile_image"
              />
            </Link>

            <div className="thread-card_bar" />
          </div>

          <div className="flex w-full flex-col">
            <Link className="w-fit" href={`/profile/${author.id}`}>
              <h4 className="cursor-pointer text-base-semibold text-light-1">
                {author.username}
              </h4>
            </Link>

            <p className="mt-2 text-small-regular text-light-2">{content}</p>

            <div
              className={` ${isComment && "mb-10"}  mt-5 flex flex-col gap-3`}
            >
              <div className="flex gap-3.5">
                <Image
                  className="cursor-pointer object-contain"
                  src="/heart-gray.svg"
                  alt="heart"
                  width={24}
                  height={24}
                />
                <Link href={`/post/${id}`}>
                  <Image
                    className="cursor-pointer object-contain"
                    src="/reply.svg"
                    alt="reply"
                    width={24}
                    height={24}
                  />
                </Link>

                <Image
                  className="cursor-pointer object-contain"
                  src="/repost.svg"
                  alt="heart"
                  width={24}
                  height={24}
                />
                <Image
                  className="cursor-pointer object-contain"
                  src="/share.svg"
                  alt="heart"
                  width={24}
                  height={24}
                />
              </div>

              {isComment && comments.length > 0 && (
                <Link href={`/post/${id}`}>
                  <p className="mt-1 text-subtle-medium text-gray-1">
                    {comments.length} replies
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* delete post */}
        {/* show comment logos */}

        {!isComment && community && (
          <Link
            className="mt-5 flex items-center"
            href={`/communities/${community.id}`}
          >
            <p className="text-subtle-medium text-gray-1">
              {formatDateString(createdAt)} - {community.name} Community
            </p>

            <Image
              src={community.image}
              width={14}
              height={14}
              alt={community.name}
            />
          </Link>
        )}
      </div>
    </article>
  );
};

export default PostCard;
