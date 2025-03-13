import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { userContext } from "../page/UserProfile";
import { Modal } from "bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/slices/userInfoSlice";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const baseApi = import.meta.env.VITE_BASE_URL;

const BasicInfo = () => {
    const { register: userInfo, handleSubmit: handleSubmitUser, formState: { errors: userErrors } } = useForm();  // 處理user
    const { user } = useContext(userContext); //共用的user資料
    const [formData, setFormData] = useState(user); //放在此張內追蹤用
    const [isFormChanged, setIsFormChanged] = useState(false);  // 用來追蹤是否有更動
    const updatePawwordModalRef = useRef(null); //驗證密碼
    const updateInputPawwordModalRef = useRef(null); //修改密碼
    const authpasswordRef = useRef(null); //
    const dispatch = useDispatch();

    const onSubmitUser = handleSubmitUser((data) => {
        const user_id = user.user_id;
        const updateUser2 = async (data) => {
            data["user_update_at"] = dayjs().format("YYYY-MM-DD HH:mm:ss");
            try {
                await axios.patch(`${baseApi}/usersData/${user_id}`, data);
                try {
                    const res = await axios.get(`${baseApi}/usersData/${user_id}`);
                    console.log(res.data);
                    dispatch(updateUser(res.data));
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
        if (isFormChanged) {
            updateUser2(data);
        }
    });

    // 當表單數據更動時檢查
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            const updatedData = {
                ...prevData, [name]: value
            };
            setIsFormChanged(JSON.stringify(updatedData) !== JSON.stringify(formData));
            return updatedData;
        });
    };


    const handleAuthPassword = async () => {
        const user_email = user.user_email;
        const user_password = authpasswordRef.current.value;
        const data = {
            user_email,
            user_password
        }
        try {
            await axios.post(`${baseApi}/login`, data);
            openupdateInputPawword();
        } catch (error) {
            console.error(error);
        }

    };

    // 顯示Modal - 刪除
    const openUpdatePassword = () => {
        const modalInstance = Modal.getInstance(updatePawwordModalRef.current);
        modalInstance.show();
    };

    // 隱藏Modal - 刪除
    const handleHideUpdatePasswordtModal = () => {
        const modalInstance = Modal.getInstance(updatePawwordModalRef.current);
        modalInstance.hide();
    };

    // 顯示Modal - 刪除
    const openupdateInputPawword = () => {
        const modalInstance = Modal.getInstance(updateInputPawwordModalRef.current);
        modalInstance.show();
    };

    // 隱藏Modal - 刪除
    const handleHideupdateInputPawwordtModal = () => {
        const modalInstance = Modal.getInstance(updateInputPawwordModalRef.current);
        modalInstance.hide();
    };



    useEffect(() => {
        new Modal(updatePawwordModalRef.current, {
            backdrop: false
        }); //從boostrap裡面來的

        new Modal(updateInputPawwordModalRef.current, {
            backdrop: false
        }); //從boostrap裡面來的
    }, []);

    return (
        <>
            {/* 主畫面 */}
            <div className="col-8 m-0 pt-10 px-0 ">
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
                        <div className="user_information p-6 ">
                            <form className="text-start" onSubmit={onSubmitUser} id="userinfoform">
                                {/* 姓名 */}
                                <div className="row align-items-center mb-sm-6 mb-5">
                                    <label htmlFor="user_name" className="col-sm-2">姓名</label>
                                    <div className="col-sm-10">
                                        <input
                                            {...userInfo('user_name', { required: "姓名欄位必填" })}
                                            type="text"
                                            className={`form-control ${userErrors.user_name && 'is-invalid'}`}
                                            id="user_name"
                                            name="user_name"
                                            placeholder="請輸入姓名或暱稱"
                                            value={formData.user_name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                {/* 信箱 */}
                                <div className="row mb-5">
                                    <label htmlFor="user_email" className="col-sm-2">信箱</label>
                                    <div className="col-sm-10">
                                        <input
                                            {...userInfo('user_email')}
                                            type="text"
                                            className="form-control"
                                            id="user_email"
                                            name="user_email"
                                            value={formData.user_email}
                                            onChange={handleInputChange}
                                        />
                                        <button className="text-secondary-50 bg-transparent border-0 border-bottom pt-1 " onClick={openUpdatePassword}>修改密碼</button>
                                    </div>
                                </div>
                                {/* 性別 */}
                                <div className="row mb-5">
                                    <label htmlFor="user_sex" className="col-sm-2">性別</label>
                                    <div className="col-sm-10">
                                        <select
                                            className={`form-select ${userErrors.user_sex && 'is-invalid'}`}
                                            aria-label="Default select example"
                                            {...userInfo('user_sex')}
                                            value={formData.user_sex}
                                            onChange={handleInputChange}
                                        >
                                            <option value="請選擇性別">請選擇性別</option>
                                            <option value="男">男</option>
                                            <option value="女">女</option>
                                            <option value="不提供">不提供</option>
                                        </select>
                                    </div>
                                </div>
                                {/* 電話 */}
                                <div className="row mb-5">
                                    <label htmlFor="user_tel" className="col-sm-2">電話</label>
                                    <div className="col-sm-10">
                                        <input
                                            {...userInfo('user_tel')}
                                            type="tel"
                                            className={`form-control ${userErrors.user_tel && 'is-invalid'}`}
                                            id="user_tel"
                                            name="user_tel"
                                            value={formData.user_tel}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                {/* 第三方登入icon */}
                                <div className="row mb-5">
                                    <label htmlFor="user_email" className="col-sm-2">第三方登入</label>
                                    <div className="col-sm-10">
                                        <FaFacebook size={24} className="me-3" />
                                        <FaGoogle size={24} />
                                    </div>
                                </div>

                            </form>
                            {/* 按鈕區 */}
                        </div>
                        <div className="ps-6 py-4 border-nature-90 border-1 border-top">
                            <div className="btn_2 d-flex  text-center ">
                                <button type="reset" className="btn bg-nature-60 text-white me-6" disabled={!isFormChanged} form="userinfoform">
                                    取消更改
                                </button>
                                <button
                                    type="submit"
                                    className="btn bg-secondary-60 text-white"
                                    form="userinfoform"
                                    disabled={!isFormChanged}  // 根據表單是否更動來決定按鈕是否可點擊
                                >
                                    儲存變更
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 驗證密碼MODAL */}
            <div
                ref={updatePawwordModalRef}
                className="modal fade m-0"
                id="updatePawwordModal"
                tabIndex="-1"
                style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-secondary-95 flex-column align-items-start">
                            <h4 className="modal-title fw-bold mb-2">修改密碼</h4>
                            <p>請先輸入目前密碼進行驗證</p>
                        </div>
                        <div className="modal-body px-6 py-10">
                            <input type="password" className="w-100 border border-1 border-black rounded-1 " ref={authpasswordRef} name="user" />
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={handleHideUpdatePasswordtModal}
                                type="button"
                                className="btn btn-secondary"
                            >
                                取消
                            </button>
                            <button type="button"
                                onClick={handleAuthPassword} className="btn btn-danger">
                                下一步
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* 修改密碼MODAL */}
            <div
                ref={updateInputPawwordModalRef}
                className="modal fade m-0"
                id="updatePawwordModal"
                tabIndex="-1"
                style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-secondary-95">
                            <h4 className="modal-title fw-bold ">修改密碼</h4>
                        </div>
                        <div className="modal-body px-6 py-10">
                            <input type="password" className="w-100 border border-1 border-black rounded-1 " ref={authpasswordRef} name="user" />
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={handleHideupdateInputPawwordtModal}
                                type="button"
                                className="btn btn-secondary"
                            >
                                取消
                            </button>
                            <button type="button" className="btn btn-danger">
                                下一步
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
};

export default BasicInfo;