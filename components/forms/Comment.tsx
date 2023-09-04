"use client";

import React, { ChangeEvent, useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import Image from "next/image";
import { Input } from "../ui/input";
import { CommentValidation } from "@/lib/validations/post";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  postId: string;
  currentUserImg: string;
  currentUserId: string;
}

const Comment = ({ postId, currentUserImg, currentUserId }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      post: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
    // await createPost({
    //   text: values.post,
    //   author: userId,
    //   communityId: null,
    //   path: pathname,
    // });

    router.push("/");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="comment-form">
        <FormField
          control={form.control}
          name="post"
          render={({ field }) => (
            <FormItem className="flex items-center   gap-3 w-full">
              <FormLabel>
                <Image
                  src={currentUserImg}
                  width={48}
                  height={48}
                  alt="current_user"
                  className="rounded-full object-cover"
                />
              </FormLabel>
              <FormControl className="border-none bg-transparent">
                <Input
                  type="text"
                  className="no-focus text-light-1 outline-none"
                  placeholder="Post your reply!"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="bg-[#26a7de] comment-form_btn " type="submit">
          Reply
        </Button>
      </form>
    </Form>
  );
};

export default Comment;
