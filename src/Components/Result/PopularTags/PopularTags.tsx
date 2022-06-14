import { useStore } from 'effector-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { $popularTagsStore, getPopularTagsFx } from '../../../Stores/MainStore';
import Style from '../../../Styles/MainStyle.module.css';

const PopularTags = ({ tag }: any) => {
  const popularTags = useStore($popularTagsStore);
  const [ isLoading ] = useState(popularTags.items ? false : true);
  const [ isDone ] = useState(popularTags?.items.length > 0 ? true : false);
  useEffect(() => {
    getPopularTagsFx(tag);
  }, [isDone])

  return (
    <div className={Style.Wrapper}>

      {popularTags?.items?.map((tag: any) => (
        <div className={Style.Post}>
          <a href={tag?.link} target='_blank'>
            <p className={Style.Post_title}>{tag?.title}</p>
          </a>
        </div>
      ))}

    </div>
  );
};

export default PopularTags;

// Компонент для отображения вопросов по тегам