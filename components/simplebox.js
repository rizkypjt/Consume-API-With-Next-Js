import { map, addIndex, isNil } from "ramda";

const _renderRow = addIndex(map)(({ label, value }, idx) => (
  <tr key={idx}>
    <th>{label}</th>
    <td>{isNil(value) ? "-" : value}</td>
  </tr>
));

const SimpleBox = ({ title, data, renderRow }) =>
  data ? (
    <div className="box">
      {title && (
        <div className="box-header with-border">
          <h3 className="box-title">{title}</h3>
        </div>
      )}
      <div className="box-body">
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>{renderRow ? renderRow(data) : _renderRow(data)}</tbody>
          </table>
        </div>
      </div>
    </div>
  ) : null;

export default SimpleBox;
