import { useState } from "react";
import { Link } from "react-router-dom";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";

function AdminIndex() {
  // TODO 使用真實資料，目前因為資料沒有審核狀態與建立時間，所以先用假資料
  const [data, setData] = useState([
    {
      id: 1,
      name: "笨蛋工作室密室逃脫",
      contact: "張碩家",
      phone: "0912345678",
      status: "處理中",
      createdAt: "2024-09-26 10:10:02",
    },
    {
      id: 2,
      name: "FunkLock 放樂工作室",
      contact: "李珮謙",
      phone: "0912345678",
      status: "通過",
      createdAt: "2024-09-30 23:02:55",
    },
    {
      id: 3,
      name: "神不在場實境遊戲",
      contact: "張碩家",
      phone: "0912345678",
      status: "已退回",
      createdAt: "2024-11-13 10:10:02",
    },
    {
      id: 4,
      name: "LoGin密室逃脫",
      contact: "李珮謙",
      phone: "0912345678",
      status: "處理中",
      createdAt: "2024-11-26 13:20:55",
    },
    {
      id: 5,
      name: "智慧獵人",
      contact: "張碩家",
      phone: "0912345678",
      status: "通過",
      createdAt: "2024-12-03 01:10:02",
    },
    {
      id: 6,
      name: "頂級豬排遊戲工作室",
      contact: "李珮謙",
      phone: "0912345678",
      status: "通過",
      createdAt: "2024-12-12 23:02:55",
    },
    {
      id: 7,
      name: "頂級豬排遊戲工作室",
      contact: "李珮謙",
      phone: "0912345678",
      status: "通過",
      createdAt: "2024-12-12 23:02:55",
    },
    {
      id: 8,
      name: "頂級豬排遊戲工作室",
      contact: "李珮謙",
      phone: "0912345678",
      status: "通過",
      createdAt: "2024-12-12 23:02:55",
    },
    {
      id: 9,
      name: "頂級豬排遊戲工作室",
      contact: "李珮謙",
      phone: "0912345678",
      status: "通過",
      createdAt: "2024-12-12 23:02:55",
    },
    {
      id: 10,
      name: "頂級豬排遊戲工作室",
      contact: "李珮謙",
      phone: "0912345678",
      status: "通過",
      createdAt: "2024-12-12 23:02:55",
    },
    {
      id: 11,
      name: "笨蛋工作室密室逃脫",
      contact: "張碩家",
      phone: "0912345678",
      status: "處理中",
      createdAt: "2024-09-26 10:10:02",
    },
    {
      id: 12,
      name: "FunkLock 放樂工作室",
      contact: "李珮謙",
      phone: "0912345678",
      status: "通過",
      createdAt: "2024-09-30 23:02:55",
    },
    {
      id: 13,
      name: "神不在場實境遊戲",
      contact: "張碩家",
      phone: "0912345678",
      status: "已退回",
      createdAt: "2024-11-13 10:10:02",
    },
    {
      id: 14,
      name: "LoGin密室逃脫",
      contact: "李珮謙",
      phone: "0912345678",
      status: "處理中",
      createdAt: "2024-11-26 13:20:55",
    },
    {
      id: 15,
      name: "智慧獵人",
      contact: "張碩家",
      phone: "0912345678",
      status: "通過",
      createdAt: "2024-12-03 01:10:02",
    },
    {
      id: 16,
      name: "頂級豬排遊戲工作室",
      contact: "李珮謙",
      phone: "0912345678",
      status: "通過",
      createdAt: "2024-12-12 23:02:55",
    },
    {
      id: 17,
      name: "頂級豬排遊戲工作室",
      contact: "李珮謙",
      phone: "0912345678",
      status: "通過",
      createdAt: "2024-12-12 23:02:55",
    },
    {
      id: 18,
      name: "頂級豬排遊戲工作室",
      contact: "李珮謙",
      phone: "0912345678",
      status: "通過",
      createdAt: "2024-12-12 23:02:55",
    },
    {
      id: 19,
      name: "頂級豬排遊戲工作室",
      contact: "李珮謙",
      phone: "0912345678",
      status: "通過",
      createdAt: "2024-12-12 23:02:55",
    },
    {
      id: 20,
      name: "頂級豬排遊戲工作室",
      contact: "李珮謙",
      phone: "0912345678",
      status: "通過",
      createdAt: "2024-12-12 23:02:55",
    },
  ]);

  return (
    <div className="admin-bg">
      <div className="adminIndex container pt-11 pb-6">
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
        <div className="table container-fluid overflow-auto bg-white p-6 border rounded-2 border-nature-90">
          <table className="storeTable w-100">
            <thead>
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">店家名稱</th>
                <th className="px-4 py-3">聯絡人</th>
                <th className="px-4 py-3">聯絡電話</th>
                <th className="px-4 py-3">審核狀態</th>
                <th className="px-4 py-3">建立時間</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <td className="py-2 px-4">{row.id}</td>
                  <td className="py-2 px-4">{row.name}</td>
                  <td className="py-2 px-4">{row.contact}</td>
                  <td className="py-2 px-4">{row.phone}</td>
                  <td className="py-2 px-4 text-sm">
                    <div
                      className={`px-3 py-1 rounded-full text-black ${getStatusBadgeStyle(
                        row.status
                      )}`}
                    >
                      {row.status}
                    </div>
                  </td>
                  <td className="py-2 px-4">{row.createdAt}</td>
                  <td className="py-2 px-4">
                    <button className="edit-btn d-flex justify-content-center align-items-center">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Function to get the status badge style based on status
const getStatusBadgeStyle = (status) => {
  switch (status) {
    case "處理中":
      return "bg-secondary-95";
    case "通過":
      return "bg-green-100 text-green-700";
    case "已退回":
      return "bg-pink-100 text-pink-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const columns = [
  {
    width: 100,
    label: "ID",
    dataKey: "ID",
  },
  {
    width: 100,
    label: "店家名稱",
    dataKey: "storeName",
  },
  {
    width: 50,
    label: "聯絡人",
    dataKey: "contact",
    numeric: true,
  },
  {
    width: 110,
    label: "聯絡電話",
    dataKey: "phone",
  },
  {
    width: 130,
    label: "審核狀態",
    dataKey: "status",
  },
  {
    width: 130,
    label: "建立時間",
    dataKey: "createdAt",
  },
  {
    width: 50,
    label: "",
    dataKey: "action",
  },
];

export default AdminIndex;
