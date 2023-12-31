const NavBar = ({image, profile, name}) => {
  return (
    <nav class="sidebar close">
        <header>
          <div class="image-text">
            <span class="image">
              <img src={image} alt="Profile Picture"></img>
            </span>
            <div class="text logo-text">
              <a class="name link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" href={profile}>{name}</a>
            </div>
          </div>
          <i class='bx bx-chevron-right toggle'></i>
        </header>
        <div class="menu-bar">
          <div class="menu">
            <ul class="menu-links">
              <li class="nav-link">
                <a href="#">
                  <i class='bx bx-home-alt icon' ></i>
                  <span class="text nav-text">Dashboard</span>
                </a>
              </li>
              <li class="nav-link">
                <a href="#">
                  <i class='bx bx-bar-chart-alt-2 icon' ></i>
                  <span class="text nav-text">Revenue</span>
                </a>
              </li>
              <li class="nav-link">
                <a href="#">
                  <i class='bx bx-bell icon'></i>
                  <span class="text nav-text">Notifications</span>
                </a>
              </li>
              <li class="nav-link">
                <a href="#">
                  <i class='bx bx-pie-chart-alt icon' ></i>
                  <span class="text nav-text">Analytics</span>
                </a>
              </li>
              <li class="nav-link">
                <a href="#">
                  <i class='bx bx-heart icon' ></i>
                  <span class="text nav-text">Likes</span>
                </a>
              </li>
              <li class="nav-link">
                <a href="#">
                  <i class='bx bx-wallet icon' ></i>
                  <span class="text nav-text">Wallets</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="bottom-content">
            <li class="">
              <a type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <i class='bx bx-log-out icon' ></i>
                <span class="text nav-text">Logout</span>
              </a>
            </li>
            <li class="mode">
              <div class="sun-moon">
                <i class='bx bx-moon icon moon'></i>
                <i class='bx bx-sun icon sun'></i>
              </div>
              <span class="mode-text text">Dark mode</span>
              <div class="toggle-switch">
                <span class="switch"></span>
              </div>
            </li>

          </div>
        </div>
      </nav>
  )
}   

export default NavBar