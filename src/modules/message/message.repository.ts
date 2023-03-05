import { db } from "@/lib/firebase";
import { Post } from "@/types/Post";
import { onValue, push, ref, set } from "firebase/database";
import { Dispatch, SetStateAction } from "react";

export class messageRepository {
  static get(setState: Dispatch<SetStateAction<Post[] | undefined>>) {
    onValue(ref(db, "posts"), (snapShot) => {
      const posts: any[] = [];
      snapShot.forEach((childSnapShot) => {
        const key = childSnapShot.key;
        const post = childSnapShot.val();
        posts.push({ ...post, key });
      });
      setState(posts);
    });
  }

  static async post(userName: string, message: string) {
    const postListRef = ref(db, "posts");
    const newPostRef = push(postListRef);
    await set(newPostRef, {
      userName,
      message,
    });
  }
}
