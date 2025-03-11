import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function TeamBuyComment() {
  const [group, setGroup] = useState([]);

  const { group_id } = useParams();

  const getGroup = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/groupsData/${group_id}`);
      setGroup(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGroup();
  }, [group_id]);

  return (
    <>
      <div className="container-fluid container-lg">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-10">
            <div className="mt-9 mb-6">
              <h2 className="fs-h2 fw-bold">
                {`${group.group_active_date}`}
                {`${group.game_address.slice(0, 3)}`}
                {`${group.game_name}`}
              </h2>
            </div>
            <div className="border border-nature-90 rounded-xl">
              <img src="" alt="遊戲圖" className="img-fluid" />
              <div className="px-6 py-5">
                <div></div>
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th scope="col" className="text-primary-50">
                        密室名稱
                      </th>
                      <th scope="col" className="text-primary-50">
                        揪團截止日期
                      </th>
                      <th scope="col" className="text-primary-50">
                        活動日期
                      </th>
                    </tr>
                    <tr>
                      <td>遊戲名</td>
                      <td>日期</td>
                      <td>日期</td>
                    </tr>
                    <tr>
                      <th scope="col" colSpan="3" className="text-primary-50">
                        密室地址
                      </th>
                    </tr>
                    <tr>
                      <td colSpan="3">地址</td>
                    </tr>
                    <tr>
                      <th scope="col" className="text-primary-50">
                        人數
                      </th>
                      <th scope="col" colSpan="2" className="text-primary-50">
                        價格
                      </th>
                    </tr>
                    <tr>
                      <td>人數</td>
                      <td colSpan="2">價格</td>
                    </tr>
                    <tr>
                      <th scope="col" className="text-primary-50">
                        是否歡迎新手
                      </th>
                      <th scope="col" colSpan="2" className="text-primary-50">
                        聯絡方式
                      </th>
                    </tr>
                    <tr>
                      <td>資訊</td>
                      <td colSpan="2">資訊</td>
                    </tr>
                    <tr>
                      <th scope="col" colSpan="3" className="text-primary-50">
                        揪團理念
                      </th>
                    </tr>
                    <tr>
                      <td colSpan="3">理念</td>
                    </tr>
                    <tr>
                      <th scope="col" colSpan="3" className="text-primary-50">
                        報名者
                      </th>
                    </tr>
                    <tr>
                      <td colSpan="3">報名者</td>
                    </tr>
                    <tr>
                      <td colSpan="3">標籤</td>
                    </tr>
                    <tr>
                      <td className="my-5" colSpan="3">
                        <button className="btn btn-secondary-60 text-white px-17 py-2">
                          我要參加
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TeamBuyComment;
