import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from '..//Search.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { selectedQuery } from 'redux/search/searchSelector';

import {
  fetchAllSearchedIngredient,
  fetchAllSearchedTitle,
} from 'redux/search/searchThunks';
import { useState } from 'react';

const SearchForm = () => {
  const [wordQuery, setWordQuery] = useState('');
  const dispatch = useDispatch();
  const query = useSelector(selectedQuery);

  const fetchSearchData = () => {
    if (query === 'query') {
      dispatch(fetchAllSearchedTitle(wordQuery));
    } else if (query === 'ingredients') {
      dispatch(fetchAllSearchedIngredient(wordQuery));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (wordQuery.trim() === '') {
      toast.warn('Enter your query');
      return;
    }

    fetchSearchData();
  };

  const handleInputChange = e => {
    setWordQuery(e.target.value);
  };

  return (
    <form className={style.searchBox} onSubmit={handleSubmit}>
      <ToastContainer />
      <input
        className={style.searchInput}
        type="text"
        placeholder="Search recipes..."
        value={wordQuery}
        name="searchInput"
        onChange={handleInputChange}
      />
      <button className={style.searchBtn} type='submit'>Search</button>
    </form>
  );
};

export default SearchForm;
