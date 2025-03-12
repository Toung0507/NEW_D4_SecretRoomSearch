import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function TeamBuyComment() {
  const [group, setGroup] = useState([]);
  const [games, setGames] = useState([]);
  const [users, setUsers] = useState([]);
  const [price, setPrice] = useState(null);

  const { group_id } = useParams();

  const getGroup = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/groupsData/${group_id}`);
      setGroup(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getGames = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/gamesData`);
      setGames(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getUsers = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/usersData`);
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getPriceData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/pricesData`);
      setPrice(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGroup();
    getGames();
    getUsers();
    getPriceData();
  }, [group_id]);

  // 資料尚未載入時，顯示 Loading
  if (!group) return <div>Loading...</div>;
  if (!games.length) return <div>Loading games data...</div>;
  if (!price) return <div>Loading...</div>;

  const gameInfo = games.find((game) => game.game_id === group.game_id);
  const userInfo = users.find((user) => user.user_id === group.user_id);
  const priceInfo = price.filter((price) => price.game_id === group.game_id);

  return (
    <>
      <div className="container-fluid container-lg">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-10">
            <div className="mt-9 mb-6">
              <h2 className="fs-h2 fw-bold">
                {`${group.group_active_date}`}
                {group.game_address?.slice(0, 3)}
                {`${group.game_name}`}
              </h2>
            </div>
            <div className="border border-nature-90 rounded-xl">
              <picture className="ratio ratio-16x9">
                <source
                  media="(min-width: 992px)"
                  src={gameInfo?.game_img[0]}
                />
                <img
                  src={gameInfo?.game_img[0]}
                  alt="banner"
                  className="w-100 img-fluid rounded-3"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </picture>
              <div className="px-6 py-5">
                <div className="row">
                  <div className="col-6">
                    <img
                      src="./icon/woman.png"
                      alt={userInfo?.user_name}
                      className="rounded-circle"
                      style={{
                        width: "10%",
                        objectFit: "cover",
                        aspectRatio: "1/1",
                      }}
                    />
                  </div>
                  <h6 className="col-6 mb-1 mb-md-2 text-primary-black fs-Body-1 fw-bold lh-base">
                    {userInfo?.user_name}
                  </h6>
                </div>
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
                      <td>{group.game_name}</td>
                      <td>{group.group_end_at}</td>
                      <td>{group.group_active_date}</td>
                    </tr>
                    <tr>
                      <th scope="col" colSpan="3" className="text-primary-50">
                        密室地址
                      </th>
                    </tr>
                    <tr>
                      <td colSpan="3">{group.game_address}</td>
                    </tr>
                    <tr>
                      <th scope="col" className="text-primary-50">
                        需求人數
                      </th>
                      <th scope="col" colSpan="2" className="text-primary-50">
                        價格
                      </th>
                    </tr>
                    <tr>
                      <td>{group.group_member}人</td>
                      <td colSpan="2">
                        <ul className="d-flex flex-column gap-2">
                          {priceInfo.length === 2 ? (
                            // 當有兩筆價格資料，顯示平日與假日
                            <li className="fs-Body-2">
                              {(() => {
                                const weekdayPrice = priceInfo.find(
                                  (item) => item.price_day_type === "weekday"
                                );
                                const weekendPrice = priceInfo.find(
                                  (item) => item.price_day_type === "weekend"
                                );
                                return (
                                  <>
                                    {weekdayPrice && (
                                      <span>
                                        平日 {weekdayPrice.price_people}：$
                                        {weekdayPrice.price_mix}
                                      </span>
                                    )}
                                    <br />
                                    {weekendPrice && (
                                      <span>
                                        假日 {weekendPrice.price_people}：$
                                        {weekendPrice.price_mix}
                                      </span>
                                    )}
                                  </>
                                );
                              })()}
                            </li>
                          ) : (
                            // 當只有一筆資料時，直接顯示價格，不顯示 price_day_type 文字
                            priceInfo.map((item) => (
                              <li key={item.price_id} className="fs-Body-2">
                                {item.price_people}：${item.price_mix}
                              </li>
                            ))
                          )}
                        </ul>
                      </td>
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
                      <td>{group.group_noob ? "是" : "否"}</td>
                      <td colSpan="2">{group.group_channel}</td>
                    </tr>
                    <tr>
                      <th scope="col" colSpan="3" className="text-primary-50">
                        揪團理念
                      </th>
                    </tr>
                    <tr>
                      <td colSpan="3">{group.group_philosophy}</td>
                    </tr>
                    <tr>
                      <th scope="col" colSpan="3" className="text-primary-50">
                        報名者
                      </th>
                    </tr>
                    <tr>
                      <td colSpan="3">{group.group_participants}</td>
                    </tr>
                    <tr>
                      <td colSpan="3">
                        <div className="tags d-flex flex-wrap fs-Body-2 gap-2 mt-3 ">
                          <span className=" bg-nature-95 px-1 py-1 rounded-3  text-nowrap">
                            {gameInfo?.game_dif_tagname}
                          </span>
                          <span className=" bg-nature-95 px-1 py-1 rounded-3 text-nowrap">
                            {gameInfo?.game_main_tag1name}
                          </span>
                          <span className=" bg-nature-95 px-1 py-1 rounded-3  text-nowrap">
                            {gameInfo?.game_main_tag2name}
                          </span>
                        </div>
                      </td>
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
