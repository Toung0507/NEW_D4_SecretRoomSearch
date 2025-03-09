import { useSelector } from "react-redux";

function UserProfile() {

    const { user, user_token } = useSelector((state) => state.userInfo);


    return (
        <>
            <div className="my-md-10 my-sm-0">

                <div className="conatiner-lg">
                    <div className="row d-flex">
                        {user_token ?
                            (
                                <>

                                    <h1>個人頁面，是{user.user_name}</h1>
                                </>

                            ) : (<>尚未登入</>)
                        }
                    </div>

                </div>

            </div>
        </>
    )
};

export default UserProfile;