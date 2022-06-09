import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { $popularTagsStore, getPopularTagsFx } from '../../../Stores/MainStore';
import Style from './PopularTags.module.css';

const PopularTags = ({ tag }: any) => {
  const popularTags = useStore($popularTagsStore);
  useEffect(() => {
    getPopularTagsFx(tag);
  }, [popularTags.items.length])

  return (
    <div className={Style.Popular_tags_wrapper}>
    </div>
  );
};

export default PopularTags;

// Компонент для отображения вопросов по тегам