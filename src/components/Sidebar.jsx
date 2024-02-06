import React from "react";
import { LinkComponent, SocialComponent } from "../utils/links";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { useGlobalContext } from "../context";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}  >
    <div className="sidebar-content">
      <header className="nav-header container mx-auto">
        <div className="nav-brand">
          <h3>Wiki drinks</h3>
        </div>
        <button className="btn icon-btn nav-toggler" onClick={closeSidebar}>
          <VscArrowSmallLeft className="nav-icon" />
        </button>
      </header>
      <div className="container">
        <LinkComponent classLink='sidebar-links' />
      </div>
      <SocialComponent classSocial='sidebar-social' />
    </div>
  </aside >;
};

export default Sidebar;
