import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { userContext } from "../page/UserProfile";
import { Modal } from "bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUserInfoAsyncThunk, updateUser } from "../redux/slices/userInfoSlice";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { pushMessage } from "../redux/slices/toastSlice";
import Toast from "../layout/Toast";

const baseApi = import.meta.env.VITE_BASE_URL;

const ParticipatingGroup = () => {
    const dispatch = useDispatch();

    // FROM 表單驗證相關 - useForm
    const { register: userInfo, handleSubmit: handleSubmitUser, formState: { errors: userErrors } } = useForm();  // 處理user

    // 共用的資料 - useContext
    const { user } = useContext(userContext); //共用的user資料

    // 此元件使用 
    const [formData, setFormData] = useState(user); //是否資料有變動 > 儲存(有/無)變動過的資料
    const [isFormChanged, setIsFormChanged] = useState(false);  // 是否資料有變動 > 布林值
    const [passwordError, setPasswordError] = useState("尚未驗證");

    // modal ref
    const updatePawwordModalRef = useRef(null); //驗證密碼
    const updateInputPawwordModalRef = useRef(null); //修改密碼
    const authpasswordRef = useRef(null); //
    const inputpasswordRef = useRef(null); //

    // 按下儲存變更後的處理 - 更新user資料
    const onSubmitUser = handleSubmitUser((data) => {
        const user_id = user.user_id;
        const updateUser2 = async (data) => {
            data["user_update_at"] = dayjs().format("YYYY-MM-DD HH:mm:ss");
            try {
                await axios.patch(`${baseApi}/usersData/${user_id}`, data);
                try {
                    const res = await axios.get(`${baseApi}/usersData/${user_id}`);
                    dispatch(updateUser(res.data));

                    setIsFormChanged(false);
                } catch (error) {
                    const message = error.response.data;
                    dispatch(pushMessage({
                        text: message,
                        status: 'failed'
                    }));
                }
            } catch (error) {
                const message = error.response.data;
                dispatch(pushMessage({
                    text: message,
                    status: 'failed'
                }));
            }
        }
        //確保有變動在更新，不包含更新密碼的部分
        if (isFormChanged) {
            updateUser2(data);
        }
    });




    return (
        <>
            {/* 主畫面 */}
            <div className="col-12 m-0 pt-10 px-0 ">
                <div className=" border-nature-90 border-1 border">
                    <div className="basicInfoTitle fs-h6 lh-sm bg-secondary-95 fw-bold px-5 py-6 text-secondary-50" >
                        會員資料
                    </div>
                    <div className="user-info bg-white ">
                        <div className="user_name d-flex px-6 py-sm-5 py-4 align-items-center border-nature-90 border-1 border-top border-bottom" >
                            <img
                                src={user.user_sex === '男' ? './icon/man.png' : user.user_sex === '女' ? './icon/woman.png' : './icon/user.png'}
                                alt={user.user_name}
                                className="rounded-circle"
                                style={{
                                    width: "14%",
                                    objectFit: "cover",
                                    aspectRatio: "1/1",
                                }}
                            />
                            <h5 className="ps-5 fw-bold">{user.user_name}</h5>
                        </div>

                    </div>
                </div>

                <div className=" border-nature-90 border-1 border">
                    <div className="basicInfoTitle fs-h6 lh-sm bg-secondary-95 fw-bold px-5 py-6 text-secondary-50" >
                        會員資料
                    </div>
                    <div className="user-info bg-white ">
                        <div className="user_name d-flex px-6 py-sm-5 py-4 align-items-center border-nature-90 border-1 border-top border-bottom" >
                            <img
                                src={user.user_sex === '男' ? './icon/man.png' : user.user_sex === '女' ? './icon/woman.png' : './icon/user.png'}
                                alt={user.user_name}
                                className="rounded-circle"
                                style={{
                                    width: "14%",
                                    objectFit: "cover",
                                    aspectRatio: "1/1",
                                }}
                            />
                            <h5 className="ps-5 fw-bold">{user.user_name}</h5>
                        </div>

                    </div>
                </div>
            </div>

            <Toast />
        </>

    )
};

export default ParticipatingGroup;