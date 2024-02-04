import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="main-menu menu-active"
              id="lws-alljobs-menu"
            >
              <i className="fa-solid fa-briefcase"></i>
              <span> All Available Jobs</span>
            </Link>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <button className="space-x-1 sub-menu" id="lws-internship-menu">
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                  <span>Internship</span>
                </button>
              </li>
              <li>
                <button className="space-x-1 sub-menu" id="lws-fulltime-menu">
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                  <span>Full Time</span>
                </button>
              </li>
              <li>
                <button className="space-x-1 sub-menu" id="lws-remote-menu">
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                  <span>Remote</span>
                </button>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/job-form"
              className="space-x-1 main-menu"
              id="lws-addJob-menu"
            >
              <i className="fa-solid fa-file-circle-plus"></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
