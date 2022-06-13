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
        <a href={tag?.link} target='_blank'>
          <div className={Style.Post}>
              <p className={Style.Post_title}>{tag?.title}</p>
          </div>
        </a>
      ))}

    </div>
  );
};

export default PopularTags;

// Компонент для отображения вопросов по тегам