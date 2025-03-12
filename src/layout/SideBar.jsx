import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";

const MenuBookIcon = () => (
  <span className="material-symbols-outlined">menu_book</span>
);

const AccountCircle = () => (
  <span className="material-symbols-outlined">account_circle</span>
);

const StoreFront = () => (
  <span className="material-symbols-outlined">storefront</span>
);

const SportsEsports = () => (
  <span className="material-symbols-outlined">sports_esports</span>
);

const Groups = () => <span className="material-symbols-outlined">groups</span>;

const CustomSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItemStyles = {
    root: {
      fontSize: "16px",
      color: "white",
      fontWeight: 700,
    },
    icon: {
      color: "white",
      fontSize: "20px",
    },
    SubMenuExpandIcon: {
      color: "white",
    },
    subMenuContent: {
      backgroundColor: "#1d586c",
    },
    button: {
      "&:hover": {
        backgroundColor: "#1d586c",
      },
    },
    label: ({ open, active }) => ({
      fontWeight: active ? "bold" : undefined,
    }),
  };

  return (
    <div className="sidebar">
      <Sidebar
        collapsed={collapsed}
        backgroundColor="#006684"
        width="250px"
        collapsedWidth="80px"
        marginTop="56px"
      >
        <div
          className={`sidebar-toggle ${collapsed ? "collapsed" : ""}`}
          onClick={() => setCollapsed(!collapsed)}
        >
          <FaChevronLeft />
        </div>

        <Menu menuItemStyles={menuItemStyles}>
          <SubMenu icon={<MenuBookIcon />} label="會員管理">
            <MenuItem icon={<AccountCircle />}>會員</MenuItem>
            <MenuItem icon={<StoreFront />} active={true}>
              店家
            </MenuItem>
          </SubMenu>
          <MenuItem icon={<SportsEsports />}>密室資料</MenuItem>
          <MenuItem icon={<Groups />}>揪團資料</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default CustomSidebar;
