import { useState, useEffect } from "react";
import { PERIOD_FILTERS } from "../utils/types";

const FireAndPrint = ({
  col,
  title,
  api,
  withInput,
  inputPlaceholder,
  withPeriodFilter,
  withHostFilter,
  withGroupFilter,
  hosts,
  groups,
  onSuccess
}) => {
  const [param, setParam] = useState("");
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);
  const [host, setHost] = useState("");
  const [group, setGroup] = useState("");
  const [periodFilter, setPeriodFilter] = useState("");
  const [res, setRes] = useState("");

  const _onChangeParam = e => setParam(e.target.value);
  const _onChangePeriodFilter = e => setPeriodFilter(e.target.value);
  const _onChangeHostFilter = e => setHost(e.target.value);
  const _onChangeGroupFilter = e => setGroup(e.target.value);

  useEffect(() => {
    if (Array.isArray(hosts) && hosts.length > 0) {
      setHost(hosts[0]);
    }
  }, [hosts]);

  useEffect(() => {
    if (Array.isArray(groups) && groups.length > 0) {
      setGroup(groups[0]);
    }
  }, [groups]);

  const _onClick = async () => {
    if (!isLoading) {
      setError(undefined);
      setLoading(true);
      try {
        const _param = withHostFilter ? host : withGroupFilter ? group : param;
        const res = await api(_param, periodFilter);

        onSuccess && onSuccess(res);
        setRes(JSON.stringify(res, null, 2));
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    }
  };

  const isDisabled = withHostFilter
    ? (hosts || []).length < 1
    : withGroupFilter
    ? (groups || []).length < 1
    : false;

  return (
    <div className={`col-md-${col ? col : "12"}`}>
      <div className="box box-primary">
        <div className="box-header with-border">
          <h3 className="box-title">{title}</h3>
          <div className="box-tools pull-right">
            <button
              type="button"
              className="btn btn-box-tool"
              data-widget="collapse"
            >
              <i className="fa fa-minus"></i>
            </button>
            <button
              type="button"
              className="btn btn-box-tool"
              data-widget="remove"
            >
              <i className="fa fa-times"></i>
            </button>
          </div>
        </div>

        <div className="box-body">
          {withInput && (
            <div className="form-group">
              <label>{inputPlaceholder || "Input"}</label>
              <input
                className="form-control"
                value={param}
                onChange={_onChangeParam}
              />
            </div>
          )}
          {withHostFilter && (
            <div className="form-group">
              <label>Select Host</label>
              <select className="form-control" onChange={_onChangeHostFilter}>
                {(hosts || []).map(item => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          )}
          {withGroupFilter && (
            <div className="form-group">
              <label>Select Group</label>
              <select className="form-control" onChange={_onChangeGroupFilter}>
                {(groups || []).map(item => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          )}
          {withPeriodFilter && (
            <div className="form-group">
              <label>Select Period</label>
              <select className="form-control" onChange={_onChangePeriodFilter}>
                {PERIOD_FILTERS.map(item => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className={`form-group ${error ? "has-error" : ""}`}>
            <label>Result</label>
            <pre>{res}</pre>
            {error && <span className="help-block">{error.message}</span>}
          </div>
        </div>
        <div className="box-footer">
          <button
            className="btn btn-primary pull-right"
            disabled={isDisabled}
            onClick={_onClick}
          >
            {isLoading ? (
              <i className="fa fa-spinner fa-pulse fa-lg" />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FireAndPrint;
