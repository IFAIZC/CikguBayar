export default function Navbar() {
  return (
    // <div className="navbar bg-primary text-primary-content flex items-center justify-center">
    //   <p className="font-bold text-2xl">CikguPay</p>
    // </div>
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <p className="font-bold text-2xl ml-3">CikguPay</p>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-1 w-52 p-2 shadow">
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}