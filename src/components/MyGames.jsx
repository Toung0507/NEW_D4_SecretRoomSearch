import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { userStoreContext } from "../page/StoreProfile";

const baseApi = import.meta.env.VITE_BASE_URL;

const MyGames = () => {
    // 共用的資料 - useContext
    const { user, store } = useContext(userStoreContext);
    const store_id = store.store_id;

    // 此元件使用 
    const [allGames, setAllGames] = useState([]);
    const [upGames, setUpGames] = useState([]);
    const [dowmGames, setDownGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllGames = async () => {
        let upG = [];
        let downG = [];
        try {
            const res = await axios.get(`${baseApi}/storesData/${store_id}/gamesData`);
            setAllGames(res.data);
            res.data.map((data) => {
                if (data.game_isStock === 1) {
                    upG.push(data);
                }
                else {
                    downG.push(data);
                }
            })
        } catch (error) {

        }
        setUpGames(upG);
        setDownGames(downG);
        setIsLoading(false);
    };

    useEffect(() => {
        getAllGames();
    }, []);

    return (

        <>
            {isLoading ? (<>載入中</>) : (
                <>
                    {/* 主畫面 */}
                    <div className="col-12 m-0 pt-10 px-0 ">
                        <div className="border-nature-90 border rounded-2">
                            <div className="ParticipatingGroupTitle bg-secondary-95 px-6 py-5 text-secondary-50 fw-bold fs-h6" >
                                已上架
                            </div>
                            <div className="p-6 bg-white">
                                <table className="table">
                                    <thead className="table-light px-3" >
                                        <tr className="ParticipatingGroupThead ">
                                            <th scope="col" className="text-secondary-40 ps-6 py-3 pe-0">密室名稱</th>
                                            <th scope="col" className="text-secondary-40 py-3 px-0">密室地點</th>
                                            <th scope="col" className="text-secondary-40 py-3 px-0">開幕日期</th>
                                            <th scope="col" className="text-secondary-40 py-3 px-0">最低價格</th>
                                            <th scope="col" className="text-secondary-40 pe-6 py-3 ps-0">人數上限</th>
                                            <th scope="col" className="text-secondary-40 pe-6 py-3 ps-0"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {upGames.map((game) => (
                                            <tr key={game.game_id} className="ParticipatingGroupThead">
                                                <td className="ps-5 py-2 pe-0">{game.game_name}</td>
                                                <td className="py-2 px-0">{game.game_address}</td>
                                                <td className="py-2 px-0">{game.game_start_date}</td>
                                                <td className="py-2 px-0">{game.game_min_price}元起</td>
                                                <td className="py-2 px-0">{game.game_maxNum_Players}人</td>
                                                <td className="pe-5 py-2 ps-0">
                                                    <Link to={`/Game_content/${game.game_id}`} className="text-black">
                                                        查看詳情 <IoIosArrowForward color="black" />
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="border-nature-90 border rounded-2 my-10">
                            <div className="ParticipatingGroupTitle bg-secondary-95 px-6 py-5 text-secondary-50 fw-bold fs-h6" >
                                等待上架
                            </div>
                            <div className="p-6 bg-white">
                                <table className="table">
                                    <thead className="table-light px-3" >
                                        <tr className="ParticipatingGroupThead ">
                                            <th scope="col" className="text-secondary-40 ps-6 py-3 pe-0">密室名稱</th>
                                            <th scope="col" className="text-secondary-40 py-3 px-0">密室地點</th>
                                            <th scope="col" className="text-secondary-40 py-3 px-0">開幕日期</th>
                                            <th scope="col" className="text-secondary-40 py-3 px-0">最低價格</th>
                                            <th scope="col" className="text-secondary-40 pe-6 py-3 ps-0">人數上限</th>
                                            <th scope="col" className="text-secondary-40 pe-6 py-3 ps-0"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dowmGames.map((game) => (
                                            <tr key={game.game_id} className="ParticipatingGroupThead">
                                                <td className="ps-5 py-2 pe-0">{game.game_name}</td>
                                                <td className="py-2 px-0">{game.game_address}</td>
                                                <td className="py-2 px-0">{game.game_start_date}</td>
                                                <td className="py-2 px-0">{game.game_min_price}元起</td>
                                                <td className="py-2 px-0">{game.game_maxNum_Players}人</td>
                                                <td className="pe-5 py-2 ps-0">
                                                    <Link to={`/StoreGameInfo/${game.game_id}`} className="text-black">
                                                        查看詳情 <IoIosArrowForward color="black" />
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
};

export default MyGames;