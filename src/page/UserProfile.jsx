import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function UserProfile() {
    const { user, user_token } = useSelector((state) => state.userInfo);
    const { user_id } = useParams();
    const [isAuthMySelf, setIsAuthMySelf] = useState(false);
    const [activeTab, setActiveTab] = useState("basicInfo");

    const checkMySelf = () => {
        if (user_token) {
            if ((Number(user_id) === Number(user.user_id))) {
                setIsAuthMySelf(true);
            }
            else {
                setIsAuthMySelf(false);
            }
        }
        else {
            setIsAuthMySelf(false);
        }
    };

    useEffect(() => {
        checkMySelf();
    }, [user_id]);


    return (
        <>
            {isAuthMySelf ? (
                <div className="container-fluid bg-primary-99">
                    <div className="container-lg ">
                        <div className="row pt-10 ">
                            <ul className="d-flex">
                                <li className="">
                                    <button
                                        className={` border-0 bg-primary-99 fs-h6 ${activeTab === "basicInfo" ? "member-nav-item-active" : ""} p-4`}
                                        onClick={() => setActiveTab("basicInfo")}
                                    >
                                        基本資訊
                                    </button>
                                </li>
                                <li className="">
                                    <button
                                        className={` border-0 bg-primary-99 fs-h6 ${activeTab === "participatingGroup" ? "member-nav-item-active" : ""} p-4`}
                                        onClick={() => setActiveTab("participatingGroup")}
                                    >
                                        參加的揪團
                                    </button>
                                </li>
                                <li className="">
                                    <button
                                        className={`border-0 bg-primary-99 fs-h6  ${activeTab === "myComments" ? "member-nav-item-active" : ""} p-4`}
                                        onClick={() => setActiveTab("myComments")}
                                    >
                                        留下的評論
                                    </button>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="my-md-10 my-sm-0 bg-primary">
                        <div className="container-lg">
                            <div className="row d-flex flex-column flex-md-row g-0">
                                <h1>個人頁面，是{user.user_name}</h1>
                                {/* 內容區塊 */}
                                <div className="mt-3">
                                    {activeTab === "basicInfo" && <div className="p-3 bg-light border">這是區塊 1</div>}
                                    {activeTab === "participatingGroup" && <div className="p-3 bg-light border">這是區塊 2</div>}
                                    {activeTab === "myComments" && <div className="p-3 bg-light border">這是區塊 3</div>}
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            ) :
                (<div className="my-md-10 my-sm-0">
                    <div className="container-lg">
                        <div className="row d-flex flex-column flex-md-row g-0">
                            <p className="h1 text-center" >尚未登入，或此頁面非您的會員ID</p>

                        </div>
                    </div>
                </div >
                )
            }
        </>
    )
};

export default UserProfile;