import { Link } from "react-router-dom";
import Style from "./Post.module.css";

const Post = ({ post }: any) => {
  const questions = [
    {
      title: 'Вопрос 1',
      id: 1,
      link: '/'
    },
    {
      title: 'Вопрос 2',
      id: 2,
      link: '/'
    },
    {
      title: 'Вопрос 3',
      id: 3,
      link: '/'
    },
    {
      title: 'Вопрос 4',
      id: 4,
      link: '/'
    },
    {
      title: 'Вопрос 5',
      id: 5,
      link: '/'
    }
  ]

  return (
    <div className={Style.Post_wrapper} key={post?.id}>
      <div className={Style.Post_author}>
        <div className={Style.Author_avatar}><img src={post?.owner.profile_image} alt=''/></div>
        <div className={Style.Author_name} >
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
          post?.answer_count === 0 ? 'Нет ответов' :
            post?.answer_count === 1 ? `${post?.answer_count} ответ` : 
              post?.answer_count >= 2 && post?.answer_count < 5 ? `${post?.answer_count} ответа` : 
                `${post?.answer_count} ответов`
        }
        </Link>
      </div>
      
      <div className={Style.Post_tags}>
        Теги:
          <ul>
            {post?.tags?.map((tag: any) => (
              <li className={Style.Post_tag} >
                {tag}
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default Post;