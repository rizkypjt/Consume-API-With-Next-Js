import { withRouter } from "next/router";
import Link from "next/link";
import { map, range, max, min, prepend, append, addIndex } from "ramda";

// https://gist.github.com/kottenator/9d936eb3e4e3c3e02598#gistcomment-2664601
// with little tweak
const calculate = (currentPage, pageCount) => {
  if (pageCount === undefined || pageCount === 0 || pageCount === 1) {
    return [1];
  }

  const delta = 2;

  let _range = range(
    max(2, currentPage - delta),
    min(pageCount - 1, currentPage + delta) + 1
  );

  if (currentPage - delta > 2) {
    _range = prepend("...", _range);
  }
  if (currentPage + delta < pageCount - 1) {
    _range = append("...", _range);
  }

  _range = prepend(1, _range);
  _range = append(pageCount, _range);

  return _range;
};

const isCurrentPage = (current, pageIndex) => current === pageIndex;

const Pagination = ({
  router,
  pageIndex,
  // eslint-disable-next-line
  pageSize,
  // eslint-disable-next-line
  totalCount,
  totalPageCount,
  // eslint-disable-next-line
  startingNumber,
  hasPreviousPage,
  hasNextPage
}) => (
  <div className="box-footer clearfix">
    <ul className="pagination pagination-sm no-margin pull-right">
      {hasPreviousPage ? (
        <li>
          <Link
            href={{ query: { ...router.query, pageNumber: pageIndex - 1 } }}
          >
            <a>«</a>
          </Link>
        </li>
      ) : null}
      {addIndex(map)((i, idx) => (
        <li
          className={isCurrentPage(i, pageIndex) ? "active" : undefined}
          key={idx}
        >
          {i === "..." || isCurrentPage(i, pageIndex) ? (
            <a>{i}</a>
          ) : (
            <Link href={{ query: { ...router.query, pageNumber: i } }}>
              <a>{i}</a>
            </Link>
          )}
        </li>
      ))(calculate(pageIndex, totalPageCount))}
      {hasNextPage ? (
        <li>
          <Link
            href={{ query: { ...router.query, pageNumber: pageIndex + 1 } }}
          >
            <a>»</a>
          </Link>
        </li>
      ) : null}
    </ul>
  </div>
);

export default withRouter(Pagination);
