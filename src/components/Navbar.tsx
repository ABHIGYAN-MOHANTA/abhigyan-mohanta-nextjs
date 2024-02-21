import Image from "next/image";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            <a className="btn btn-ghost text-xl">Abhigyan Mohanta</a>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>I have built everything from:</a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.thunderdome6602.UnbreakableMe"
                target="_blank"
              >
                * Mobile Apps
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=Q0Yls0L_T8g"
                target="_blank"
              >
                * Web Apps
              </a>
            </li>
            <li>
              <a
                href="https://chromewebstore.google.com/detail/select-threader/dfljolnkhcfkgiikhhkejmcknflcogkf"
                target="_blank"
              >
                * Chrome Extensions
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ABHIGYAN-MOHANTA/Focus-Jutsu-Desktop-App/releases"
                target="_blank"
              >
                * Desktop Apps
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                src="/abhigyan2.jpg"
                alt="Abhigyan Mohanta"
                width={384}
                height={384}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                className="justify-between"
                href="https://twitter.com/MohantaAbhigyan"
              >
                Twitter
                <span className="badge">#journey</span>
              </a>
            </li>
            <li>
              <a
                className="justify-between"
                href="https://github.com/ABHIGYAN-MOHANTA"
              >
                Github
                <span className="badge">#works</span>
              </a>
            </li>
            <li>
              <a
                className="justify-between"
                href="https://www.linkedin.com/in/abhigyan-mohanta/"
              >
                LinkedIn
                <span className="badge">#professional</span>
              </a>
            </li>
            <li>
              <a
                className="justify-between"
                href="https://www.youtube.com/@abhigyanmohanta8861"
              >
                Youtube
                <span className="badge">#fun</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
