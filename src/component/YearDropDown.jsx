import { useState } from "react";

export default function YearDropDown() {
  const thisYear = new Date().getFullYear();
  const [currentYear, setCurrentYear] = useState(thisYear);

  // Generate years: 3 past, current, 3 future
  const years = Array.from({ length: 7 }, (_, i) => thisYear - 3 + i);

  function selectYear(year) {
    setCurrentYear(year);
    console.log(`You selected ${year}!`) //to check if it works.
  }

  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn btn-success min-w-25 ">
        {currentYear}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
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
