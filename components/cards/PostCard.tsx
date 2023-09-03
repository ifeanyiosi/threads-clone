import React from "react";

interface Props {
  id: string;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    id: string;
    name: string;
    
  };
  createdAt;
  comments;
  parentId: string | null;
  key;
  currentUserId: string;
}

const PostCard = ({
  id,
  content,
  author,
  community,
  createdAt,
  comments,
  parentId,
  key,
  currentUserId,
}: Props) => {
  return <div>PostCard</div>;
};

export default PostCard;
