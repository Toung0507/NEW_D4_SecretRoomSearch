import { useContext, useEffect, useState } from "react";
import { userContext } from "../page/UserProfile";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const baseApi = import.meta.env.VITE_BASE_URL;

const ParticipatingGroup = () => {
    // 共用的資料 - useContext
    const { user } = useContext(userContext); //共用的user資料
    const user_id = user.user_id;

    // 此元件使用 
    const [allGroups, setAllGroups] = useState([]);
    const [nowGroups, setNowGroups] = useState([]);
    const [historyGroups, setHistorysGroups] = useState([]);

    const getAllGroups = async () => {
        let nowG = [];
        let historyG = [];
        try {
            const res = await axios.get(`${baseApi}/usersData/${user_id}/groupsData`);
            setAllGroups(res.data);
            // console.log(res.data);

            res.data.map((data) => {
                if (!data.group_cancel && data.group_isSuccessful === null) {
                    nowG.push(data);
                }
                else if (data.group_cancel && data.group_isSuccessful) {
                    data["status"] = '已遊玩結束';
                    historyG.push(data);
                }
                else if (data.group_cancel && !data.group_isSuccessful) {
                    data["status"] = '已棄團';
                    historyG.push(data);
                }
            })
        } catch (error) {

        }
        setNowGroups(nowG);
        setHistorysGroups(historyG);
    };

    useEffect(() => {
        getAllGroups();
    }, []);

    return (
        <>
            {/* 主畫面 */}
            <div className="col-12 m-0 pt-10 px-0 ">
                <div className="border-nature-90 border rounded-2">
                    <div className="ParticipatingGroupTitle bg-secondary-95 px-6 py-5 text-secondary-50 fw-bold fs-h6" >
                        揪團中
                    </div>
                    <div className="p-6 bg-white">
                        <table className="table">
                            <thead className="table-light px-3" >
                                <tr className="ParticipatingGroupThead ">
                                    <th scope="col" className="text-secondary-40 ps-6 py-3 pe-0">密室名稱</th>
                                    <th scope="col" className="text-secondary-40 py-3 px-0">密室地點</th>
                                    <th scope="col" className="text-secondary-40 py-3 px-0">遊玩日期</th>
                                    <th scope="col" className="text-secondary-40 py-3 px-0">目前人數/人數上限</th>
                                    <th scope="col" className="text-secondary-40 pe-6 py-3 ps-0"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    nowGroups.map((oneGroup) => (
                                        <tr key={oneGroup.group_id} className="ParticipatingGroupThead">
                                            <td className="ps-5 py-2 pe-0">{oneGroup.game_name}</td>
                                            <td className="py-2 px-0">{oneGroup.game_address}</td>
                                            <td className="py-2 px-0">{oneGroup.group_active_date}</td>
                                            <td className="py-2 px-0">{oneGroup.group_participants.length}人/{oneGroup.group_member}人</td>
                                            <td className="pe-5 py-2 ps-0">
                                                <Link to={`/TeamBuyComment/${oneGroup.group_id}`} className="text-black">
                                                    查看詳情 <IoIosArrowForward color="black" />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="border-nature-90 border rounded-2 my-10">
                    <div className="ParticipatingGroupTitle bg-secondary-95 px-6 py-5 text-secondary-50 fw-bold fs-h6" >
                        歷史揪團
                    </div>
                    <div className="p-6 bg-white">
                        <table className="table">
                            <thead className="table-light px-3" >
                                <tr className="ParticipatingGroupThead ">
                                    <th scope="col" className="text-secondary-40 ps-6 py-3 pe-0">密室名稱</th>
                                    <th scope="col" className="text-secondary-40 py-3 px-0">密室地點</th>
                                    <th scope="col" className="text-secondary-40 py-3 px-0">遊玩日期</th>
                                    <th scope="col" className="text-secondary-40 py-3 px-0">參與人數/人數上限</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    historyGroups.map((oneGroup) => (
                                        <tr key={oneGroup.group_id} className="ParticipatingGroupThead">
                                            <td className="ps-5 py-2 pe-0">{oneGroup.game_name}</td>
                                            <td className="py-2 px-0">{oneGroup.game_address}</td>
                                            <td className="py-2 px-0">{oneGroup.group_active_date}</td>
                                            <td className="pe-5 py-2 ps-0">{oneGroup.group_participants.length}人/{oneGroup.group_member}人</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

    )
};

export default ParticipatingGroup;