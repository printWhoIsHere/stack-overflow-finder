import { useStore } from 'effector-react';
import { useEffect, useState } from 'react';
import { $store, fetchDataFx } from '../../Stores/MainStore';
import Post from './Post/Post';
import Style from './Result.module.css';

const Result = ({searchValue}: any) => {
  const searchResults = useStore($store);
  
  // useEffect(() => {
  //   fetchDataFx(`http://api.stackexchange.com/2.3/search?site=stackoverflow&intitle=${searchValue}`);
  // }, [])

  const [ isLoaded ] = useState(searchResults.items.length > 0 ? true : false)

  const posts = [
    {
      owner: {
        profile_image: '',
        display_name: 'Alex'
      },
      title: 'Первое название',
      answer_count: 6,
      tags: ['me', 'you', 'tags']
    },
    {
      owner: {
        profile_image: '',
        display_name: 'Великий маг'
      },
      title: 'Второе название',
      answer_count: 6,
      tags: ['me', 'you', 'tags']
    },
    {
      owner: {
        profile_image: '',
        display_name: 'Древо "Эгдрасиль"'
      },
      title: 'Третье название',
      answer_count: 6,
      tags: ['me', 'you', 'tags']
    },
    {
      owner: {
        profile_image: '',
        display_name: 'Стрёмный ник'
      },
      title: 'Мне надоело',
      answer_count: 6,
      tags: ['me', 'you', 'tags']
    },
    {
      owner: {
        profile_image: '',
        display_name: 'Alex'
      },
      title: 'Я устал и хочу кофе',
      answer_count: 6,
      tags: ['me', 'you', 'tags']
    },
    {
      owner: {
        profile_image: '',
        display_name: 'Alex'
      },
      title: 'Пожалуйста, прекратите это',
      answer_count: 6,
      tags: ['me', 'you', 'tags']
    }
  ]

  return (
    <div className={Style.Result_page_wrapper}>
      {/* { isLoaded ? searchResults?.items?.map( post => <Post post={ post } />) : (
        <div>Загрузка ...</div>
      )} */}
      {posts.map(post => <Post post={post}/>)}
    </div>
  )
};

export default Result;