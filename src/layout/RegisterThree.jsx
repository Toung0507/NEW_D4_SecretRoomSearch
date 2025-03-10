import { useContext, useEffect, useState } from "react";
import { registerInfo } from "../page/Register";
import { useForm } from "react-hook-form";

function RegisterThree() {
    const { userRegister, storeRegister, handleUserChange, handleStoreChange } = useContext(registerInfo);
    const role = userRegister.user_role;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();  // 從react-hook-form解構出所需的值


    return (
        <>
            <div className="my-md-10 my-sm-3 my-5">
                <div className="container-lg">
                    <div className="role row d-flex flex-column flex-md-row g-5 justify-content-center align-items-center">
                        <p className="h2 text-center">
                            請填寫基本資訊 - 您選擇的身分是{role}
                        </p>
                        <div className="col-lg-6 col-12">
                            <form className="text-start">
                                <div className="row mb-3">
                                    <label htmlFor="user_name" className="col-sm-3 col-form-label">姓名</label>
                                    <div className="col-sm-9">
                                        <input
                                            {...register('user_name', {
                                                required: "Email欄位必填",
                                                pattern: {
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                    message: "Email格式錯誤"
                                                }
                                            })}
                                            type="text"
                                            className="form-control"
                                            id="user_name"
                                            name="user_name" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="user_email" className="col-sm-3 col-form-label">信箱</label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="user_email"
                                            name="user_email"
                                            value={userRegister.user_email}
                                            disabled />
                                    </div>

                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="user_passwords" className="col-sm-3 col-form-label">密碼</label>
                                    <div className="col-sm-9">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="user_passwords"
                                            name="user_passwords" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="user_passwords" className="col-sm-3 col-form-label">再次確認密碼</label>
                                    <div className="col-sm-9">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="user_passwords"
                                            name="user_passwords" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="user_passwords" className="col-sm-3 col-form-label">性別</label>
                                    <div className="col-sm-9">
                                        <select className="form-select" aria-label="Default select example">
                                            <option defaultValue>請選擇性別</option>
                                            <option value="男">男</option>
                                            <option value="女">女</option>
                                            <option value="不提供">不提供</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="user_tel" className="col-sm-3 col-form-label">電話</label>
                                    <div className="col-sm-9">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="user_tel"
                                            name="user_tel" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default RegisterThree;
