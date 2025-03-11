import { useContext, useEffect, useImperativeHandle, useState } from "react";
import { registerInfo } from "../page/Register";
import { useForm } from "react-hook-form";

function RegisterThree({ userFormRef, storeFormRef, onSubmitSuccess }) {
    const { userRegister, storeRegister, handleUserChange, handleStoreChange } = useContext(registerInfo);
    const role = userRegister.user_role;
    const { register: user, handleSubmit: handleSubmitUser, formState: { errors: userErrors } } = useForm();  // 處理user
    const { register: store, handleSubmit: handleSubmitStore, formState: { errors: storeErrors } } = useForm();  // 處理store

    const onSubmitUser = handleSubmitUser((data) => {
        Object.entries(data).forEach(([key, value]) => {
            handleUserChange({ target: { name: String(key), value: String(value) } })
        });

        onSubmitSuccess();
    });

    const onSubmitStore = handleSubmitStore((data) => {
        Object.entries(data).forEach(([key, value]) => {
            handleUserChange({ target: { name: String(key), value: String(value) } })
        });

        onSubmitSuccess();
    });

    return (
        <>
            <div className="my-md-10 my-sm-3 my-5">
                <div className="container-lg">
                    <div className="role row d-flex flex-column flex-md-row g-5 justify-content-center align-items-center">
                        <p className="h2 text-center">
                            請填寫基本資訊 - 您選擇的身分是{role}
                        </p>
                        {role === '會員' ? (
                            <div className="col-lg-6 col-12">
                                <form className="text-start" onSubmit={onSubmitUser} id="userForm" ref={userFormRef}>
                                    {/* 姓名 */}
                                    <div className="row mb-3">
                                        <label htmlFor="user_name" className="col-sm-3 col-form-label formrequired">姓名</label>
                                        <div className="col-sm-9">
                                            <input
                                                {...user('user_name', {
                                                    required: "姓名欄位必填",
                                                })}
                                                type="text"
                                                className={`form-control ${userErrors.user_name && 'is-invalid'}`}
                                                id="user_name"
                                                name="user_name" />
                                            <div className="error-message text-danger mt-1">
                                                {userErrors.user_name ? userErrors.user_name.message : "　"}
                                            </div>
                                        </div>
                                    </div>
                                    {/* 信箱 */}
                                    <div className="row mb-3">
                                        <label htmlFor="user_email" className="col-sm-3 col-form-label formrequired">信箱</label>
                                        <div className="col-sm-9">
                                            <input
                                                {...user('user_email', {
                                                    required: "",
                                                })}
                                                type="text"
                                                className="form-control"
                                                id="user_email"
                                                name="user_email"
                                                value={userRegister.user_email}
                                                disabled />
                                            <div className="error-message text-danger mt-1">
                                                {userErrors.user_email ? userErrors.user_email.message : "　"}
                                            </div>
                                        </div>
                                    </div>
                                    {/* 密碼 */}
                                    <div className="row mb-3">
                                        <label htmlFor="user_password" className="col-sm-3 col-form-label formrequired">密碼</label>
                                        <div className="col-sm-9">
                                            <input
                                                {...user('user_password', {
                                                    required: "密碼欄位必填",
                                                    minLength: { value: 4, message: '密碼至少需要 4 個字元' }
                                                })}
                                                type="password"
                                                className={`form-control ${userErrors.user_password && 'is-invalid'}`}
                                                id="user_password"
                                                name="user_password" />
                                            <div className="error-message text-danger mt-1">
                                                {userErrors.user_password ? userErrors.user_password.message : "　"}
                                            </div>
                                        </div>
                                    </div>
                                    {/* 密碼*2 */}
                                    <div className="row mb-3">
                                        <label htmlFor="confirmPassword" className="col-sm-3 col-form-label formrequired">再次輸入密碼</label>
                                        <div className="col-sm-9">
                                            <input
                                                {...user('confirmPassword', {
                                                    required: '請確認密碼',
                                                    validate: (value) =>
                                                        value === document.getElementById('user_password').value || '兩次密碼不相符'
                                                })}
                                                type="password"
                                                className={`form-control ${userErrors.confirmPassword && 'is-invalid'}`}
                                                id="confirmPassword"
                                                name="confirmPassword" />
                                            <div className="error-message text-danger mt-1">
                                                {userErrors.confirmPassword ? userErrors.confirmPassword.message : "　"}
                                            </div>
                                        </div>
                                    </div>
                                    {/* 性別 */}
                                    <div className="row mb-3">
                                        <label htmlFor="user_passwords" className="col-sm-3 col-form-label formrequired">性別</label>
                                        <div className="col-sm-9">
                                            <select
                                                className={`form-select ${userErrors.user_sex && 'is-invalid'}`}
                                                aria-label="Default select example"
                                                {...user('user_sex', {
                                                    required: "性別欄位必填",
                                                    validate: (value) =>
                                                        value !== '請選擇性別' || "請選擇性別",
                                                })}>
                                                <option defaultValue value="請選擇性別">請選擇性別</option>
                                                <option value="男">男</option>
                                                <option value="女">女</option>
                                                <option value="不提供">不提供</option>
                                            </select>
                                            <div className="error-message text-danger mt-1">
                                                {userErrors.user_sex ? userErrors.user_sex.message : "　"}
                                            </div>
                                        </div>
                                    </div>
                                    {/* 電話 */}
                                    <div className="row mb-3">
                                        <label htmlFor="user_tel" className="col-sm-3 col-form-label">電話</label>
                                        <div className="col-sm-9">
                                            <input
                                                {...user('user_tel', {
                                                    pattern: {
                                                        value: /^(0[2-8]\d{7}|09\d{8})$/,
                                                        message: "電話格式錯誤"
                                                    }
                                                })}
                                                type="tel"
                                                className={`form-control ${userErrors.user_tel && 'is-invalid'}`}
                                                id="user_tel"
                                                name="user_tel" />
                                            <div className="error-message text-danger mt-1">
                                                {userErrors.user_tel ? userErrors.user_tel.message : "　"}
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" id="userSumbit" style={{ display: "none" }}>隱藏送出</button>
                                </form>
                            </div>
                        )
                            : (
                                <div className="col-lg-6 col-12">
                                    <form className="text-start" onSubmit={onSubmitUser} id="storeForm" ref={storeFormRef}>
                                        {/* 店家名稱 */}
                                        <div className="row mb-3">
                                            <label htmlFor="user_name" className="col-sm-3 col-form-label formrequired">店家名稱</label>
                                            <div className="col-sm-9">
                                                <input
                                                    {...user('user_name', {
                                                        required: "店家名稱欄位必填",
                                                    })}
                                                    type="text"
                                                    className={`form-control ${userErrors.user_name && 'is-invalid'}`}
                                                    id="user_name"
                                                    name="user_name" />
                                                <div className="error-message text-danger mt-1">
                                                    {userErrors.user_name ? userErrors.user_name.message : "　"}
                                                </div>
                                            </div>
                                        </div>
                                        {/* 信箱 */}
                                        <div className="row mb-3">
                                            <label htmlFor="user_email" className="col-sm-3 col-form-label formrequired">信箱</label>
                                            <div className="col-sm-9">
                                                <input
                                                    {...user('user_email', {
                                                        required: "",
                                                    })}
                                                    type="text"
                                                    className="form-control"
                                                    id="user_email"
                                                    name="user_email"
                                                    value={userRegister.user_email}
                                                    disabled />
                                                <div className="error-message text-danger mt-1">
                                                    {userErrors.user_email ? userErrors.user_email.message : "　"}
                                                </div>
                                            </div>
                                        </div>
                                        {/* 聯絡人 */}
                                        <div className="row mb-3">
                                            <label htmlFor="user_name" className="col-sm-3 col-form-label formrequired">店家名稱</label>
                                            <div className="col-sm-9">
                                                <input
                                                    {...user('user_name', {
                                                        required: "店家名稱欄位必填",
                                                    })}
                                                    type="text"
                                                    className={`form-control ${userErrors.user_name && 'is-invalid'}`}
                                                    id="user_name"
                                                    name="user_name" />
                                                <div className="error-message text-danger mt-1">
                                                    {userErrors.user_name ? userErrors.user_name.message : "　"}
                                                </div>
                                            </div>
                                        </div>
                                        {/* 密碼 */}
                                        <div className="row mb-3">
                                            <label htmlFor="user_password" className="col-sm-3 col-form-label formrequired">密碼</label>
                                            <div className="col-sm-9">
                                                <input
                                                    {...user('user_password', {
                                                        required: "密碼欄位必填",
                                                        minLength: { value: 4, message: '密碼至少需要 4 個字元' }
                                                    })}
                                                    type="password"
                                                    className={`form-control ${userErrors.user_password && 'is-invalid'}`}
                                                    id="user_password"
                                                    name="user_password" />
                                                <div className="error-message text-danger mt-1">
                                                    {userErrors.user_password ? userErrors.user_password.message : "　"}
                                                </div>
                                            </div>
                                        </div>
                                        {/* 密碼*2 */}
                                        <div className="row mb-3">
                                            <label htmlFor="confirmPassword" className="col-sm-3 col-form-label formrequired">再次輸入密碼</label>
                                            <div className="col-sm-9">
                                                <input
                                                    {...user('confirmPassword', {
                                                        required: '請確認密碼',
                                                        validate: (value) =>
                                                            value === document.getElementById('user_password').value || '兩次密碼不相符'
                                                    })}
                                                    type="password"
                                                    className={`form-control ${userErrors.confirmPassword && 'is-invalid'}`}
                                                    id="confirmPassword"
                                                    name="confirmPassword" />
                                                <div className="error-message text-danger mt-1">
                                                    {userErrors.confirmPassword ? userErrors.confirmPassword.message : "　"}
                                                </div>
                                            </div>
                                        </div>
                                        {/* 驗證方式 */}
                                        <div className="row mb-3">
                                            <label htmlFor="user_passwords" className="col-sm-3 col-form-label formrequired">性別</label>
                                            <div className="col-sm-9">
                                                <select
                                                    className={`form-select ${userErrors.user_sex && 'is-invalid'}`}
                                                    aria-label="Default select example"
                                                    {...user('user_sex', {
                                                        required: "性別欄位必填",
                                                        validate: (value) =>
                                                            value !== '請選擇性別' || "請選擇性別",
                                                    })}>
                                                    <option defaultValue value="請選擇性別">請選擇性別</option>
                                                    <option value="男">男</option>
                                                    <option value="女">女</option>
                                                    <option value="不提供">不提供</option>
                                                </select>
                                                <div className="error-message text-danger mt-1">
                                                    {userErrors.user_sex ? userErrors.user_sex.message : "　"}
                                                </div>
                                            </div>
                                        </div>
                                        {/* 電話 */}
                                        <div className="row mb-3">
                                            <label htmlFor="user_tel" className="col-sm-3 col-form-label">電話</label>
                                            <div className="col-sm-9">
                                                <input
                                                    {...user('user_tel', {
                                                        pattern: {
                                                            value: /^(0[2-8]\d{7}|09\d{8})$/,
                                                            message: "電話格式錯誤"
                                                        }
                                                    })}
                                                    type="tel"
                                                    className={`form-control ${userErrors.user_tel && 'is-invalid'}`}
                                                    id="user_tel"
                                                    name="user_tel" />
                                                <div className="error-message text-danger mt-1">
                                                    {userErrors.user_tel ? userErrors.user_tel.message : "　"}
                                                </div>
                                            </div>
                                        </div>
                                        {/* 官方網頁 */}
                                        <div className="row mb-3">
                                            <label htmlFor="user_name" className="col-sm-3 col-form-label formrequired">店家名稱</label>
                                            <div className="col-sm-9">
                                                <input
                                                    {...user('user_name', {
                                                        required: "店家名稱欄位必填",
                                                    })}
                                                    type="text"
                                                    className={`form-control ${userErrors.user_name && 'is-invalid'}`}
                                                    id="user_name"
                                                    name="user_name" />
                                                <div className="error-message text-danger mt-1">
                                                    {userErrors.user_name ? userErrors.user_name.message : "　"}
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" id="userSumbit" style={{ display: "none" }}>隱藏送出</button>
                                    </form>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </>
    )
};

export default RegisterThree;
