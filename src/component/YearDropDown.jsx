export default function YearDropDown({selectedYear, onYearChange}) {
  const thisYear = new Date().getFullYear();

  // Generate years from 2000 to current year + 1
  const years = Array.from(
    { length: (thisYear + 1) - 2018 + 1 },
    (_, i) => 2018 + i
  );

  function selectYear(year) {
    onYearChange(year); //
    console.log(`You selected ${year}!`);
  }

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-success min-w-25">
        {selectedYear}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        {years.map((year) => (
          <li key={year} onClick={() => selectYear(year)}>
            <a>{year}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
