import { useFetchPosts } from "@/hooks/useFetchPosts";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { messageRepository } from "../../modules/message/message.repository";

export const ThreadPage = (): JSX.Element => {
  const { posts } = useFetchPosts();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    await messageRepository.post(data.userName, data.message);
  };

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" placeholder="user名" {...register("userName")} />
        </div>
        <div>
          <input
            type="text"
            placeholder="メッセージ"
            {...register("message")}
          />
        </div>
        <button type="submit">送信</button>
      </form>
      {posts?.map((post) => (
        <Fragment key={post.key}>
          <div>{post?.userName}</div>
          <div>{post?.message}</div>
        </Fragment>
      ))}
    </>
  );
};
