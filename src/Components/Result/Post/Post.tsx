import { useState } from "react";
import { Link } from "react-router-dom";
import AuthorQuestions from "../DetailInformation/AuthorQuestions";
import PopularTags from "../PopularTags/PopularTags";
import Style from "./Post.module.css";

const Post = ({ post }: any) => {
  const [isVisibleAuthorQusetions, setIsVisibleAuthorQusetions] = useState(false);
  const [isVisiblePopularTags, setIsVisiblePopularTags] = useState(false);

  return (
    <>
    <div className={Style.Post_wrapper}>
      <div className={Style.Post_author}>
        <div className={Style.Author_avatar}><img src={post?.owner.profile_image} /></div>
        <div className={Style.Author_name} onClick={() => {
          setIsVisiblePopularTags(false)
          setIsVisibleAuthorQusetions(!isVisibleAuthorQusetions)
          }}>
            {post?.owner.display_name}
        </div>
      </div>
      
      <div className={Style.Post_title}>
        <Link to='/' >
          {post?.title}
        </Link>
      </div>
      
      <div className={Style.Post_answer_count}>
        <Link to='/' >
        {
          post?.answer_count == 1 ?
            `${post?.answer_count} ответ` :
            post?.answer_count >= 2 && post?.answer_count < 5 ?
              `${post?.answer_count} ответа` :
              `${post?.answer_count} ответов`
        }
        </Link>
      </div>
      
        <div className={Style.Post_tags}>
          Теги : 
            {post?.tags?.map((tag: string) => <div className={Style.Post_tag} onClick={() => {
              setIsVisibleAuthorQusetions(false);
              setIsVisiblePopularTags(!isVisiblePopularTags);
            }}>{tag}</div>)}
        </div>
    </div>
    {isVisibleAuthorQusetions && <AuthorQuestions />}
    {isVisiblePopularTags && <PopularTags />}
    </>
  );
};

export default Post;