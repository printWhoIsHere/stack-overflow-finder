import { useStore } from 'effector-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { $popularTagsStore, getPopularTagsFx } from '../../../Stores/MainStore';
import Style from '../../../Styles/MainStyle.module.css';

const PopularTags = ({ tag }: any) => {
  const popularTags = useStore($popularTagsStore);
  const [ isLoading ] = useState(getPopularTagsFx.pending);
  useEffect(() => {
    getPopularTagsFx(tag);
  }, [isLoading])

  return (
    <div className={Style.Wrapper}>

      {popularTags?.items?.map((tag: any) => (
        <div className={Style.Post}>
          <Link to={tag?.link}>
            <p className={Style.Post_title}>{tag?.title}</p>
          </Link>
        </div>
      ))}
      
    </div>
  );
};

export default PopularTags;

// Компонент для отображения вопросов по тегам