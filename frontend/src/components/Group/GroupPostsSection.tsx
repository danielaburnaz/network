"use client";

import { useEffect, useState } from "react";
import CreatePost from "../shared/Post/CreatePost";
import PostsSection from "../shared/Post/PostsSection";
import { fetchFromServer } from "@/lib/api";
import { PostProps, CommentProps, ContactsProps } from "@/types/types";
import { Box, Typography } from "@mui/material";
import CreatePostModal from "../shared/Post/CreatePostModal";

interface GroupPostsSectionProps {
  openPostModal: boolean;
  setOpenPostModal: React.Dispatch<boolean>;
  pathName: string | undefined;
}

export default function GroupPostsSection({
  openPostModal,
  setOpenPostModal,
  pathName,
}: GroupPostsSectionProps) {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetchFromServer(`/group/${pathName}/posts`, {
        credentials: "include",
      });
      const data = await response.json();
      const postsWithComments = data.map((post: PostProps) => ({
        ...post,
        comments: post.comments || [],
      }));
      setPosts(postsWithComments);
    };
    fetchPosts();
  }, [pathName]);

  const addNewPost = (newPost: PostProps) => {
    setPosts((prevPosts) => [
      { ...newPost, comments: newPost.comments || [] },
      ...prevPosts,
    ]);
  };

  const addCommentToPost = (postID: number, comment: CommentProps) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.postID === postID
          ? { ...post, comments: [...(post.comments || []), comment] }
          : post
      )
    );
  };

  const addLikeToPost = (postID: number, like: ContactsProps) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.postID === postID
          ? { ...post, likes: [...(post.likes || []), like] }
          : post
      )
    );
  };

  const deletePostFromList = async (postID: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.postID !== postID));
  };

  return (
    <Box
      sx={{
        width: "600px",
        display: "flex",
        flexDirection: "column",
        gap: "23px",
      }}
    >
      <CreatePost setOpenPostModal={setOpenPostModal} />
      {posts.length > 0 ? (
        <PostsSection
          addLikeToPost={addLikeToPost}
          deletePostFromList={deletePostFromList}
          posts={posts}
          addCommentToPost={addCommentToPost}
        />
      ) : (
        <Typography
          sx={{
            mt: "23px",
            fontFamily: "SchoolBell !important",
            fontSize: "32px",
          }}
        >
          This group has no posts yet!
        </Typography>
      )}
      <CreatePostModal
        text="Create Group Post"
        isProfile={false}
        addNewPost={addNewPost}
        openPostModal={openPostModal}
        setOpenPostModal={setOpenPostModal}
      />
    </Box>
  );
}
