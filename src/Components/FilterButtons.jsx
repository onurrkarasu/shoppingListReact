export default function FilterButtons({
  filterButton,
  setFilterButtons,
  onClearItems,
}) {
  return (
    <div className="border rounded p-3 m-3 d-flex justify-content-between">
      <div>
        {" "}
        <button
          item-filter="all"
          className={`btn me-1 ${
            filterButton == "all" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => setFilterButtons("all")}
        >
          All
        </button>
        <button
          item-filter="incomplete"
          className={`btn me-1 ${
            filterButton == "incomplete" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => setFilterButtons("incomplete")}
        >
          Incomplete
        </button>
        <button
          item-filter="completed"
          className={`btn me-1 ${
            filterButton == "completed" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => setFilterButtons("completed")}
        >
          Completed
        </button>
      </div>
      <button className="btn btn-danger clear" onClick={onClearItems}>
        Clear
      </button>
    </div>
  );
}
