import { useState } from "react";
import { Link } from "react-router-dom";

import SideBar from "../../layout/SideBar";

export const AdminIndex = () => {
  return (
    <>
      {/* <SideBar /> */}
      <div className="adminIndex container pt-11">
        <nav
          style={{ "--bs-breadcrumb-divider": "'>'" }}
          aria-label="breadcrumb"
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="fs-Body-2 fw-bold text-nature-50">會員管理</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <span className="fs-Body-2 fw-bold text-nature-70">店家</span>
            </li>
          </ol>
        </nav>
        <div className="searchBar mt-5 mb-6 row">
          <div className="col-2">
            <label
              htmlFor="workName"
              className="form-label fs-Caption text-black"
            >
              工作家名稱
            </label>
            <input
              type="text"
              className="form-control bg-transparent border-black"
              id="workName"
              placeholder="請輸入內容"
            />
          </div>
          <div className="col-2">
            <label
              htmlFor="contact"
              className="form-label fs-Caption text-black"
            >
              關係人
            </label>
            <input
              type="text"
              className="form-control bg-transparent border-black"
              id="contact"
              placeholder="請輸入內容"
            />
          </div>
          <div className="col-2">
            <label
              htmlFor="status"
              className="form-label fs-Caption text-black"
            >
              審核狀態
            </label>
            <select
              className="form-select border-black"
              style={{ color: "#C6C6CA" }}
              id="status"
            >
              <option defaultValue>請選擇</option>
              <option value="processing">處理中</option>
              <option value="pass">通過</option>
              <option value="rejected">已退回</option>
            </select>
          </div>
          <div className="col-2">
            <label className="form-label">&nbsp;</label>
            <button className="btn btn-primary-50 text-white disabled form-control">
              搜尋
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminIndex;
