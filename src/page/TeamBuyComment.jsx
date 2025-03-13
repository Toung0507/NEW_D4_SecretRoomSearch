import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function TeamBuyComment() {
  const [group, setGroup] = useState(null);
  const [games, setGames] = useState(null);
  const [users, setUsers] = useState([]);
  const [price, setPrice] = useState(null);
  const [infoMessage, setInfoMessage] = useState(""); // 用來顯示訊息

  const { group_id } = useParams();

  const { user, user_token } = useSelector((state) => state.userInfo);

  // 初始載入群組資料
  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/groupsData/${group_id}`);
        setGroup(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGroup();
  }, []);

  const changeGroup = async () => {
    // 檢查是否登入
    if (!user || !user_token) {
      setInfoMessage("請先登入");
      return;
    }

    // 如果群組資料還沒抓到就不做任何操作
    if (!group) {
      setInfoMessage("群組資料讀取中，請稍後再試");
      return;
    }

    // 檢查群組中是否已存在該 user_id
    if (
      group.group_participants &&
      group.group_participants.map(String).includes(String(user.user_id))
    ) {
      setInfoMessage("已重複加入");
      return;
    }

    // if (
    //   group &&
    //   group.group_participants &&
    //   group.group_participants.includes(user.user_id)
    // ) {
    //   setInfoMessage("已重複加入");
    //   return;
    // }
    // 若未重複，則將 user.user_id 加入群組 participants 陣列中
    try {
      const newParticipants =
        group.group_participants && Array.isArray(group.group_participants)
          ? [...group.group_participants, user.user_id]
          : [user.user_id];

      // const newParticipants =
      //   group && group.group_participants
      //     ? [...group.group_participants, user.user_id]
      //     : [user.user_id];

      const res = await axios.patch(`${BASE_URL}/groupsData/${group_id}`, {
        group_participants: newParticipants,
      });
      // 若 API PATCH 回傳資料有問題，也可呼叫 getGroup() 重新取得最新資料
      if (res.data) {
        setGroup(res.data);
      } else {
        // 重新取得最新群組資料
        const refreshed = await axios.get(`${BASE_URL}/groupsData/${group_id}`);
        setGroup(refreshed.data);
      }
      setInfoMessage("報名完成");

      // console.log(res.data);
      // setGroup(res.data);
      // setInfoMessage("報名完成");
    } catch (error) {
      console.error(error);
      setInfoMessage("報名失敗，請稍後再試");
    }
  };

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
  if (!games?.length) return <div>Loading games data...</div>;
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
                        <span
                          className="d-inline-block"
                          tabIndex="0"
                          data-bs-toggle="tooltip"
                          data-bs-placement="right"
                          title="請先登入"
                        >
                          <button
                            type="button"
                            className="btn btn-secondary-60 text-white px-17 py-2"
                            onClick={changeGroup}
                            disabled={!user || !user_token}
                          >
                            我要參加
                          </button>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {infoMessage && (
              <div className="container-fluid container-lg">
                <div className="row d-flex justify-content-center">
                  <div className="col-xl-10">
                    <div className="pb-10">
                      <h2 className="text-center">{infoMessage}</h2>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default TeamBuyComment;
