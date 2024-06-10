import React from 'react';
import { getPagesArray } from '../../../utils/pages';

import cl from './Pagination.module.css';

// Компонент пагинации
const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className={cl.page__wrapper}>
          {pagesArray.map(p => 
            <span
              onClick={() => changePage(p)}
              key={p}
              className={page === p ? `${cl.page} ${cl.page__current}` : cl.page}
            >
              {p}
            </span>
          )}
      </div>
    )
}

  // метод изменяющий текущую страницу пагинации
  /*
  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  }
  */

export default Pagination;