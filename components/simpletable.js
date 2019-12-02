import { useState, useRef, forwardRef, useEffect } from "react";

const _isCurrentPage = (current, pageIndex) => current === pageIndex;

const range = (start, end) =>
  Array.from({ length: end - start }, (v, k) => k + start);

// https://gist.github.com/kottenator/9d936eb3e4e3c3e02598#gistcomment-2664601
// with little tweak
const _calculate = (currentPage, pageCount) => {
  if (pageCount === undefined || pageCount === 0 || pageCount === 1) {
    return [1];
  }

  const delta = 2;

  let _range = range(
    Math.max(2, currentPage - delta),
    Math.min(pageCount - 1, currentPage + delta) + 1
  );

  if (currentPage - delta > 2) {
    _range.unshift("...");
  }
  if (currentPage + delta < pageCount - 1) {
    _range.push("...");
  }

  _range.unshift(1);
  _range.push(pageCount);

  return _range;
};

const _Pagination = ({
  pageIndex,
  // eslint-disable-next-line
  pageSize,
  // eslint-disable-next-line
  totalCount,
  totalPageCount,
  // eslint-disable-next-line
  startingNumber,
  hasPreviousPage,
  hasNextPage,
  setPageIndex
}) => (
  <div className="box-footer clearfix">
    <ul className="pagination pagination-sm no-margin pull-right">
      {hasPreviousPage ? (
        <li>
          <a onClick={() => setPageIndex(pageIndex - 1)}>«</a>
        </li>
      ) : null}
      {_calculate(pageIndex, totalPageCount).map((i, idx) => (
        <li
          className={_isCurrentPage(i, pageIndex) ? "active" : undefined}
          key={idx}
        >
          {i === "..." || _isCurrentPage(i, pageIndex) ? (
            <a>{i}</a>
          ) : (
            <a onClick={() => setPageIndex(i)}>{i}</a>
          )}
        </li>
      ))}
      {hasNextPage ? (
        <li>
          <a onClick={() => setPageIndex(pageIndex + 1)}>»</a>
        </li>
      ) : null}
    </ul>
  </div>
);

const PAGE_SIZE = 10;

const Table = ({ items, title, header }, ref) => {
  const [page, setPage] = useState({
    pageIndex: 1,
    pageSize: PAGE_SIZE,
    totalCount: 0,
    totalPageCount: 1,
    startingNumber: 1,
    hasPreviousPage: false,
    hasNextPage: false
  });

  const setPageIndex = idx =>
    setPage({
      ...page,
      pageIndex: idx,
      startingNumber: (idx - 1) * PAGE_SIZE + 1,
      hasPreviousPage: idx > 1,
      hasNextPage: idx < Math.ceil(items.length / PAGE_SIZE)
    });

  useEffect(() => {
    setPage({
      pageIndex: page.pageIndex,
      pageSize: PAGE_SIZE,
      totalCount: items.length,
      totalPageCount: Math.ceil(items.length / PAGE_SIZE),
      startingNumber: (page.pageIndex - 1) * PAGE_SIZE + 1,
      hasPreviousPage: page.pageIndex > 1,
      hasNextPage: page.pageIndex < Math.ceil(items.length / PAGE_SIZE)
    });
  }, [items]);

  return (
    <div className="box">
      <div className="box-header with-border">
        <h3 className="box-title">{title}</h3>
      </div>
      <div className="box-body">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th style={{ width: 10 }}>#</th>
              <th>{header}</th>
            </tr>
            {(items || [])
              .slice(page.startingNumber - 1, page.pageIndex * PAGE_SIZE)
              .map((item, idx) => (
                <tr key={idx}>
                  <td>{page.startingNumber + idx}</td>
                  <td>{item}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <_Pagination {...page} setPageIndex={setPageIndex} />
    </div>
  );
};

export default forwardRef(Table);
