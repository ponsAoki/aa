import { messageRepository } from "@/modules/message/message.repository";
import { Post } from "@/types/Post";
import { useEffect, useState } from "react";

export const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    (() => {
      messageRepository.get(setPosts);
    })();
  }, []);

  return { posts };
};
