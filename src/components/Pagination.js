import React, { useState, useEffect } from "react";

import ReactPaginate from "react-paginate";
import Coins from "./Coins";

const itemsPerPage = 10;

const Pagination = ({ coins }) => {
  const [currentItems, setCurrentItems] = useState();
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(coins.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(coins.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, coins]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % coins.length;

    setItemOffset(newOffset);
  };

  return (
    <div className="flex flex-col gap-6 pb-10">
      <Coins currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center gap-4 font-semibold transition-all "
        nextLinkClassName="bg-green-500 rounded px-2 py-1  dark:text-gray-700 dark:hover:text-black"
        previousLinkClassName="bg-green-500 rounded px-2 py-1  dark:text-gray-700 dark:hover:text-black"
        activeLinkClassName="py-1 rounded px-2 bg-green-400"
        pageLinkClassName="px-2 py-1 hover:bg-gray-100 rounded dark:text-gray-700 dark:hover:text-black"
      />
    </div>
  );
};

export default Pagination;
