import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { $popularTagsStore, getPopularTagsFx } from '../../../Stores/MainStore';
import Style from './PopularTags.module.css';

const PopularTags = ({ tag }: any) => {
  const popularTags = useStore($popularTagsStore);
  useEffect(() => {
    getPopularTagsFx(tag);
  }, [])

  return (
    <div className={Style.Popular_tags_wrapper}>

      {popularTags?.items?.map((tag: any) => (
        <div className={Style.Tag_post}>
          <Link to={tag?.link}>
            <p className={Style.Tag_post_title}>{tag?.title}</p>
          </Link>
        </div>
      ))}

    </div>
  );
};

export default PopularTags;

// Компонент для отображения вопросов по тегам