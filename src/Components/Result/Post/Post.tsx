import { Link } from "react-router-dom";
import Style from "./Post.module.css";

const Post = ({ post }: any) => {

  return (
    <div className={Style.Post_wrapper}>
        <div className={Style.Post_author}>
          <div className={Style.Author_avatar}><img src={post?.owner.profile_image} /></div>
          <div className={Style.Author_name}>{post?.owner.display_name}</div>
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
            {post?.tags?.map((tag: string) => <div className={Style.Post_tag} onClick={() => console.log(tag)}>{tag}</div>)}
        </div>
    </div>
  );
};

export default Post;