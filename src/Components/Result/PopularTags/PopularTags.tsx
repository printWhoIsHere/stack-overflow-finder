import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { $popularTags, getPopularTagsFx } from '../../../Stores/PopularTagsStore';
import Style from './PopularTags.module.css';

const PopularTags = ({ tag }: any) => {
    const popularTags = useStore($popularTags);
    useEffect(() => {
      getPopularTagsFx(`http://api.stackexchange.com/2.3/tags/${tag}/top-answerers`);
    }, [])
  
    return (
        <div className={Style.Popular_tags_wrapper}>
        </div>
    );
};

export default PopularTags;