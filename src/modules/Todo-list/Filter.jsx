import React from 'react'

function Filter({ stats, filter, setFilter }) {
  const buttons = [
    { name: "All", value: "all", count: stats.total },
    { name: "Active", value: "active", count: stats.active },
    { name: "Completed", value: "completed", count: stats.completed },
  ];

  return (
    <div className="card bg-base-200 shadow">
      <div className="card-body p-4">
        <div className="flex items-center justify-center gap-2">
          {buttons.map(({ name, value, count }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`btn btn-sm ${
                filter === value ? "btn-primary" : "btn-ghost"
              }`}
            >
              {name} ({count})
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Filter