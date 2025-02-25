import { useEffect, useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import axios from "axios";

const baseApi = import.meta.env.VITE_BASE_URL;

function Game_search() {

    const [games, setGames] = useState([]);

    const [price, setPrice] = useState([]);

    const getGames = async () => {
        try {
            const res = await axios.get(`${baseApi}/gamesData`);
            setGames(res.data);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getGames();
    }, []);

    return (
        <>
            <Header />
            <main>
                <div className="banner">
                    <div className="banner-title d-none">
                        <h1 className="">找密室</h1>
                    </div>
                    <picture>
                        <source media="(min-width: 992px)" srcSet="../assets/images/illustration/Banner.png" />
                        <img src="../assets/images/illustration/Banner-2.svg" alt="banner" className="w-100" />
                    </picture >
                </div>
                <div className="my-md-10 my-sm-0">
                    <div className="container-lg">
                        <div className="row d-flex flex-column flex-md-row g-0">
                            {/* <!-- 表單部分 --> */}
                            <div className="col-md-3 pe-lg-6 pe-md-3 ">
                                <form action="" className="p-4 bg-white">
                                    <div className="search">
                                        <p className="h5 pb-3  fw-bold">
                                            遊戲名稱
                                        </p>
                                        <div className="search-all-group mb-6">
                                            <label htmlFor="" className="pb-1">搜尋</label>
                                            <div className=" input-group search-group border  rounded-1  border-primary-black">
                                                <input type="text" className="form-control border-0 search-input"
                                                    placeholder="搜尋關鍵字" aria-label="Search" />
                                                <span className="input-group-text search-input border-0">
                                                    <a href=""><i className="bi bi-search"></i></a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- 地區、人數 --> */}
                                    <div className="d-flex  w-100  ">
                                        <div className="row w-100 row1 flex-md-column">
                                            <div className="col-6 col-md-12 col1 ">
                                                <div className="area ">
                                                    <p className="h5 pb-4  fw-bold">
                                                        遊戲地區
                                                    </p>
                                                    {/* <!-- 手機板下拉式選單 --> */}
                                                    <select
                                                        className="form-select d-md-none mb-md-6 mb-3 border  rounded-1  border-primary-black"
                                                        aria-label="Default select example">
                                                        <option defaultValue>請選擇遊玩地區</option>
                                                        <option value="taipei">台北市</option>
                                                        <option value="keelung">基隆市</option>
                                                        <option value="hsinchu">新竹市</option>
                                                        <option value="changhua">彰化縣</option>
                                                        <option value="chiayi">嘉義市</option>
                                                        <option value="kaohsiung">高雄市</option>
                                                        <option value="yilan">宜蘭縣</option>
                                                        <option value="taidong">台東縣</option>
                                                        <option value="newtaipei">新北市</option>
                                                        <option value="taoyuan">桃園市</option>
                                                        <option value="taichung">台中市</option>
                                                        <option value="nantou">南投縣</option>
                                                        <option value="tainan">台南市</option>
                                                        <option value="pingtung">屏東縣</option>
                                                        <option value="hualien">花蓮縣</option>
                                                        <option value="PenghuKinmenMatsu">澎湖金門馬祖</option>
                                                    </select>
                                                    {/* <!-- 電腦版checkbox --> */}
                                                    <div className="row m-0 mb-6 d-none d-md-flex">
                                                        <div className="col-md-6 mx-0 p-0 w-auto">
                                                            <div className="form-check mb-4 me-6">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="taipei" id="taipei" />
                                                                <label className="form-check-label text-nowrap" htmlFor="taipei">
                                                                    台北市
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="keelung" id="keelung" />
                                                                <label className="form-check-label text-nowrap" htmlFor="keelung">
                                                                    基隆市
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="hsinchu" id="hsinchu" />
                                                                <label className="form-check-label text-nowrap" htmlFor="hsinchu">
                                                                    新竹市
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="changhua" id="changhua" />
                                                                <label className="form-check-label text-nowrap" htmlFor="changhua">
                                                                    彰化縣
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox" value=""
                                                                    id="chiayi" />
                                                                <label className="form-check-label text-nowrap" htmlFor="chiayi">
                                                                    嘉義市
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="kaohsiung" id="kaohsiung" />
                                                                <label className="form-check-label text-nowrap" htmlFor="kaohsiung">
                                                                    高雄市
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="yilan" id="yilan" />
                                                                <label className="form-check-label text-nowrap" htmlFor="yilan">
                                                                    宜蘭縣
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="taidong" id="taidong" />
                                                                <label className="form-check-label text-nowrap" htmlFor="taidong">
                                                                    台東縣
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 m-0 p-0">
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="newtaipei" id="newtaipei" />
                                                                <label className="form-check-label text-nowrap" htmlFor="newtaipei">
                                                                    新北市
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="taoyuan" id="taoyuan" />
                                                                <label className="form-check-label text-nowrap" htmlFor="taoyuan">
                                                                    桃園市
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="taichung" id="taichung" />
                                                                <label className="form-check-label text-nowrap" htmlFor="taichung">
                                                                    台中市
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="nantou" id="nantou" />
                                                                <label className="form-check-label text-nowrap" htmlFor="nantou">
                                                                    南投縣
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="tainan" id="tainan" />
                                                                <label className="form-check-label text-nowrap" htmlFor="tainan">
                                                                    台南市
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="pingtung" id="pingtung" />
                                                                <label className="form-check-label text-nowrap" htmlFor="pingtung">
                                                                    屏東縣
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="hualien" id="hualien" />
                                                                <label className="form-check-label text-nowrap" htmlFor="hualien">
                                                                    花蓮縣
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="PenghuKinmenMatsu" id="PenghuKinmenMatsu" />
                                                                <label className="form-check-label text-nowrap"
                                                                    htmlFor="PenghuKinmenMatsu">
                                                                    澎湖金門馬祖
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-6 col-md-12 col1 ">
                                                <div className="people">
                                                    <p className="h5 pb-4  fw-bold">
                                                        遊玩人數
                                                    </p>
                                                    <select
                                                        className="form-select mb-md-6 mb-3 border  rounded-1  border-primary-black"
                                                        aria-label="Default select example">
                                                        <option defaultValue>請選擇遊玩人數</option>
                                                        <option value="1">1人</option>
                                                        <option value="2">2人</option>
                                                        <option value="3">3人</option>
                                                        <option value="4">4人</option>
                                                        <option value="5">5人</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- 難度、主題 --> */}
                                    <div className="d-flex  w-100  ">
                                        <div className="row w-100 row1 flex-md-column">
                                            <div className="col-6 col-md-12 col1 ">
                                                <div className="difficulty">
                                                    <p className="h5 pb-4  fw-bold">
                                                        難度
                                                    </p>
                                                    {/* <!-- 手機板下拉式選單 --> */}

                                                    <select
                                                        className="form-select d-md-none mb-md-6 mb-3 border  rounded-1  border-primary-black"
                                                        aria-label="Default select example">
                                                        <option defaultValue>請選擇難度</option>
                                                        <option value="GettingStarted">新手入門</option>
                                                        <option value="Moderateplayer">中度玩家</option>
                                                        <option value="Heavypuzzle">重度解謎</option>
                                                    </select>


                                                    {/* <!-- 電腦版核取方塊 --> */}
                                                    <div className="row m-0 mb-6 d-none d-md-flex">
                                                        <div className="col-md-6 mx-0 p-0 w-auto">
                                                            <div className="form-check mb-4 me-6">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="GettingStarted" id="GettingStarted" />
                                                                <label className="form-check-label text-nowrap"
                                                                    htmlFor="GettingStarted">
                                                                    新手入門
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="Moderateplayer" id="Moderateplayer" />
                                                                <label className="form-check-label text-nowrap"
                                                                    htmlFor="Moderateplayer">
                                                                    中度玩家
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 m-0 p-0">
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="Heavypuzzle" id="Heavypuzzle" />
                                                                <label className="form-check-label text-nowrap"
                                                                    htmlFor="Heavypuzzle">
                                                                    重度解謎
                                                                </label>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-12 col1 ">
                                                <div className="topic">
                                                    <p className="h5 pb-4  fw-bold">
                                                        主題
                                                    </p>
                                                    {/* <!-- 手機板下拉式選單 --> */}
                                                    <select
                                                        className="form-select d-md-none mb-md-6 mb-3 border  rounded-1  border-primary-black"
                                                        aria-label="Default select example">
                                                        <option defaultValue>請選擇主題類別</option>
                                                        <option value="Detectivereasoning">偵探推理</option>
                                                        <option value="Theplotisgreat">劇情厲害</option>
                                                        <option value="interactiveoperation">互動操作</option>
                                                        <option value="Relaxedandhappy">輕鬆歡樂</option>
                                                        <option value="Thrilling">緊張刺激</option>
                                                        <option value="teamWork">團隊合作</option>
                                                        <option value="Specialgameplay">玩法特殊</option>
                                                        <option value="Manyagencies">機關重重</option>
                                                        <option value="Realisticscenes">場景逼真</option>
                                                        <option value="puzzleLogic">謎題邏輯</option>
                                                        <option value="horrorthriller">恐怖驚悚</option>
                                                        <option value="Intrigue">勾心鬥角</option>
                                                        <option value="Familytravel">親子同遊</option>
                                                        <option value="rolePlay">角色扮演</option>
                                                    </select>

                                                    {/* <!-- 電腦版核取方塊 --> */}
                                                    <div className="row m-0 mb-6 d-none d-md-flex">
                                                        <div className="col-md-6 mx-0 p-0 w-auto">
                                                            <div className="form-check mb-4 me-6">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="Detectivereasoning" id="Detectivereasoning" />
                                                                <label className="form-check-label text-nowrap"
                                                                    htmlFor="Detectivereasoning">
                                                                    偵探推理
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="Theplotisgreat" id="Theplotisgreat" />
                                                                <label className="form-check-label text-nowrap"
                                                                    htmlFor="Theplotisgreat">
                                                                    劇情厲害
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="interactiveoperation" id="interactiveoperation" />
                                                                <label className="form-check-label text-nowrap"
                                                                    htmlFor="interactiveoperation">
                                                                    互動操作
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="Relaxedandhappy" id="Relaxedandhappy" />
                                                                <label className="form-check-label text-nowrap"
                                                                    htmlFor="Relaxedandhappy">
                                                                    輕鬆歡樂
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="Thrilling" id="Thrilling" />
                                                                <label className="form-check-label text-nowrap" htmlFor="Thrilling">
                                                                    緊張刺激
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="teamWork" id="teamWork" />
                                                                <label className="form-check-label text-nowrap" htmlFor="teamWork">
                                                                    團隊合作
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="Specialgameplay" id="Specialgameplay" />
                                                                <label className="form-check-label text-nowrap"
                                                                    htmlFor="Specialgameplay">
                                                                    玩法特殊
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 m-0 p-0">
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="Manyagencies" id="Manyagencies" />
                                                                <label className="form-check-label text-nowrap"
                                                                    htmlFor="Manyagencies">
                                                                    機關重重
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="Realisticscenes" id="Realisticscenes" />
                                                                <label className="form-check-label text-nowrap"
                                                                    htmlFor="Realisticscenes">
                                                                    場景逼真
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="puzzleLogic" id="puzzleLogic" />
                                                                <label className="form-check-label text-nowrap"
                                                                    htmlFor="puzzleLogic">
                                                                    謎題邏輯
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="horrorthriller" id="horrorthriller" />
                                                                <label className="form-check-label text-nowrap"
                                                                    htmlFor="horrorthriller">
                                                                    恐怖驚悚
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="Intrigue" id="Intrigue" />
                                                                <label className="form-check-label text-nowrap" htmlFor="Intrigue">
                                                                    勾心鬥角
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="Familytravel" id="Familytravel" />
                                                                <label className="form-check-label text-nowrap"
                                                                    htmlFor="Familytravel">
                                                                    親子同遊
                                                                </label>
                                                            </div>
                                                            <div className="form-check mb-4 ">
                                                                <input className="form-check-input" type="checkbox"
                                                                    value="rolePlay" id="rolePlay" />
                                                                <label className="form-check-label text-nowrap" htmlFor="rolePlay">
                                                                    角色扮演
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="text-center mb-3">
                                        <button type="submit"
                                            className="btn btn-secondary-60 link-white rounded-2 w-100">搜尋</button>
                                    </div>
                                    <div className=" ">
                                        <button type="reset"
                                            className="btn w-100 reset_button border-0 text-primary-black fw-bold text-sm-center text-end">重置</button>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- 遊戲卡片 --> */}
                            <div className="col-md-9 p-0">
                                <div className="recommend">
                                    <div className="title-container w-100  d-flex justify-content-center align-items-center">
                                        <h3 className="text-center mb-12 recommendation-title fw-bold fs-sm-h3 fs-h6">
                                            本月推薦</h3>
                                    </div>
                                    <div className="row m-0">
                                        {
                                            games.map((game) => (
                                                <div className="col-lg-3 col-md-4 col-sm-6 col12 ">
                                                    <a href="game_content.html">
                                                        <div className="card p-3 rounded-6 ">
                                                            <div className="row g-0 align-items-start h-100">
                                                                {/* <div className="col-auto col-sm-12 ">
                                                                    <!-- 手機板圖片在左邊 -->
                                                                    <picture className="">
                                                                        <source media="(min-width: 576px)"
                                                                            srcSet={game.game_img[0]} />

                                                                        <img src="../assets/images/julia-kadel-sm.svg" alt={game.game_name}
                                                                            className="card-photo rounded-3 w-100 mb-3 me-3 me-md-0 img-fluid" />
                                                                    </picture>

                                                                </div> } */}

                                                                <div className=" col-auto col-sm-12 ratio ratio-16x9">
                                                                    <picture
                                                                        style={{
                                                                            position: "absolute",
                                                                            top: 0,
                                                                            left: 0,
                                                                            width: "100%",
                                                                            height: "100%",
                                                                        }}
                                                                    >
                                                                        <source media="(min-width: 576px)" srcSet={game.game_img[0]} />
                                                                        <img
                                                                            src={game.game_img[0]}
                                                                            alt={game.game_name}
                                                                            className="card-photo rounded-3 w-100 img-fluid"
                                                                            style={{
                                                                                position: "absolute",
                                                                                top: 0,
                                                                                left: 0,
                                                                                width: "100%",
                                                                                height: "100%",
                                                                                objectFit: "cover",
                                                                            }}
                                                                        />
                                                                    </picture>
                                                                </div>

                                                                {/* <!-- 手機板文字內容在右邊 --> */}
                                                                <div className="col ms-3 ms-md-0">
                                                                    <div className="card-body p-0">
                                                                        <h6
                                                                            className="card-title mb-1 mb-md-2 text-primary-black fw-bold lh-base">
                                                                            {game.game_name}
                                                                        </h6>
                                                                        <p className="card-text text-nature-40 mb-3 fw-bold fs-Body-2">
                                                                            {game.game_address.slice(0, 3)}
                                                                        </p>
                                                                        <p className="d-flex align-items-center mb-2">
                                                                            <span className="rating dotted pe-3 fs-Body-2">
                                                                                <img src="src/images/icon/star.png" alt="star"
                                                                                    className="pe-1" />{game.game_score}
                                                                            </span>
                                                                            <span className="ps-2 fs-Body-2">{game.game_score_num}人評論</span>
                                                                        </p>
                                                                        <p
                                                                            className="d-flex align-items-start flex-md-row flex-column ">
                                                                            <span className="dotted pe-md-3 fs-Body-2 pb-2 pb-md-0">
                                                                                <img src="src/images/icon/person.png"
                                                                                    alt="star" className="pe-1 fs-Body-2" />
                                                                                {game.game_minNum_Players}-{game.game_maxNum_Players} 人
                                                                            </span>
                                                                            <span className="ps-md-2  fs-Body-2">
                                                                                <img src="src/images/icon/price.png"
                                                                                    alt="star" className="pe-1" />
                                                                                每人 {game.game_min_price}元起
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <!-- 手機版標籤在底部 --> */}
                                                            <div className="tags   d-flex flex-wrap fs-Body-2 gap-2 mt-3 ">
                                                                <span
                                                                    className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">{game.game_dif_tagname}</span>
                                                                <span
                                                                    className=" bg-nature-95 px-2 py-1 rounded-3 text-nowrap">{game.game_main_tag1name}</span>
                                                                <span
                                                                    className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">{game.game_main_tag2name}</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="recently my-5 my-md-10  ">
                                    <div className="title-container w-100  d-flex justify-content-center align-items-center">
                                        <h3 className="text-center mb-12 recommendation-title fw-bold fs-sm-h3 fs-h6">
                                            近期新作</h3>
                                    </div>
                                    <div className="row m-0">
                                        <div className="col-lg-3 col-md-4 col-sm-6 col2 ">
                                            <a href="game_content.html">
                                                <div className="card p-3 rounded-6 ">
                                                    <div className="row g-0 align-items-start h-100">
                                                        <div className="col-auto col-sm-12 ">
                                                            {/* <!-- 手機板圖片在左邊 --> */}
                                                            <picture className="">
                                                                <source media="(min-width: 576px)"
                                                                    srcSet="../assets/images/sergei.svg" />

                                                                <img src="../assets/images/sergei-sm.svg" alt="逃兵"
                                                                    className="card-photo rounded-3 w-100 mb-3 me-3 me-md-0" />
                                                            </picture>
                                                        </div>
                                                        {/* <!-- 手機板文字內容在右邊 --> */}
                                                        <div className="col ms-3 ms-md-0">
                                                            <div className="card-body p-0">
                                                                <h6
                                                                    className="card-title mb-1 mb-md-2 text-primary-black fw-bold lh-base">
                                                                    逃兵
                                                                </h6>
                                                                <p className="card-text text-nature-40 mb-3 fw-bold fs-Body-2">
                                                                    桃園市
                                                                </p>
                                                                <p className="d-flex align-items-center mb-2">
                                                                    <span className="rating dotted pe-3 fs-Body-2">
                                                                        <img src="../assets/images/icon/star.png" alt="star"
                                                                            className="pe-1" />4. 9
                                                                    </span>
                                                                    <span className="ps-2 fs-Body-2">219 人評論</span>
                                                                </p>
                                                                <p
                                                                    className="d-flex align-items-start flex-md-row flex-column ">
                                                                    <span className="dotted pe-md-3 fs-Body-2 pb-2 pb-md-0">
                                                                        <img src="../assets/images/icon/person.png"
                                                                            alt="star" className="pe-1 fs-Body-2" />
                                                                        2-4 人
                                                                    </span>
                                                                    <span className="ps-md-2  fs-Body-2">
                                                                        <img src="../assets/images/icon/price.png"
                                                                            alt="star" className="pe-1" />
                                                                        每人 700元起
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- 手機版標籤在底部 --> */}
                                                    <div className="tags   d-flex flex-wrap fs-Body-2 gap-2 mt-3 ">
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">中度玩家</span>
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3 text-nowrap">場景逼真</span>
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">恐怖驚悚</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col2 ">
                                            <a href="game_content.html">
                                                <div className="card p-3 rounded-6 ">
                                                    <div className="row g-0 align-items-start h-100">
                                                        <div className="col-auto col-sm-12 ">
                                                            {/* <!-- 手機板圖片在左邊 --> */}
                                                            <picture className="">
                                                                {/* <!-- 中螢幕 (768px 以上) --> */}
                                                                <source media="(min-width: 576px)"
                                                                    srcSet="../assets/images/ante-samarzija.svg" />

                                                                {/* <!-- 最小螢幕，當視窗寬度小於 576px 時使用 --> */}
                                                                <img src="../assets/images/ante-samarzija-sm.svg"
                                                                    alt="玄武石醫院 /"
                                                                    className="card-photo rounded-3 w-100 mb-3 me-3 me-md-0" />
                                                            </picture>
                                                        </div>
                                                        {/* <!-- 手機板文字內容在右邊 --> */}
                                                        <div className="col ms-3 ms-md-0">
                                                            <div className="card-body p-0">
                                                                <h6
                                                                    className="card-title mb-1 mb-md-2 text-primary-black fw-bold lh-base">
                                                                    玄武石醫院
                                                                </h6>
                                                                <p className="card-text text-nature-40 mb-3 fw-bold fs-Body-2">
                                                                    高雄市
                                                                </p>
                                                                <p className="d-flex align-items-center mb-2">
                                                                    <span className="rating dotted pe-3 fs-Body-2">
                                                                        <img src="../assets/images/icon/star.png" alt="star"
                                                                            className="pe-1" />4. /9
                                                                    </span>
                                                                    <span className="ps-2 fs-Body-2">183 人評論</span>
                                                                </p>
                                                                <p
                                                                    className="d-flex align-items-start flex-md-row flex-column ">
                                                                    <span className="dotted pe-md-3 fs-Body-2 pb-2 pb-md-0">
                                                                        <img src="../assets/images/icon/person.png"
                                                                            alt="star" className="pe-1 fs-Body-2" />
                                                                        2-5人
                                                                    </span>
                                                                    <span className="ps-md-2  fs-Body-2">
                                                                        <img src="../assets/images/icon/price.png"
                                                                            alt="star" className="pe-1" />
                                                                        每人550元起
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- 手機版標籤在底部 --> */}
                                                    <div className="tags   d-flex flex-wrap fs-Body-2 gap-2 mt-3 ">
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">中度玩家</span>
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3 text-nowrap">場景逼真</span>
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">劇情厲害</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col2 ">
                                            <a href="game_content.html">
                                                <div className="card p-3 rounded-6 ">
                                                    <div className="row g-0 align-items-start h-100">
                                                        <div className="col-auto col-sm-12 ">
                                                            {/* <!-- 手機板圖片在左邊 --> */}
                                                            <picture className="">
                                                                <source media="(min-width: 576px)"
                                                                    srcSet="../assets/images/adrien-olichon.svg" />

                                                                <img src="../assets/images/adrien-olichon-sm.svg"
                                                                    alt="庫克王國2-復仇的餓火 /"
                                                                    className="card-photo rounded-3 w-100 mb-3 me-3 me-md-0" />
                                                            </picture>
                                                        </div>
                                                        {/* <!-- 手機板文字內容在右邊 --> */}
                                                        <div className="col ms-3 ms-md-0">
                                                            <div className="card-body p-0">
                                                                <h6
                                                                    className="card-title mb-1 mb-md-2 text-primary-black fw-bold lh-base">
                                                                    庫克王國2-復仇的餓火
                                                                </h6>
                                                                <p className="card-text text-nature-40 mb-3 fw-bold fs-Body-2">
                                                                    高雄市
                                                                </p>
                                                                <p className="d-flex align-items-center mb-2">
                                                                    <span className="rating dotted pe-3 fs-Body-2">
                                                                        <img src="../assets/images/icon/star.png" alt="star"
                                                                            className="pe-1" />4. /9
                                                                    </span>
                                                                    <span className="ps-2 fs-Body-2">160 人評論</span>
                                                                </p>
                                                                <p
                                                                    className="d-flex align-items-start flex-md-row flex-column ">
                                                                    <span className="dotted pe-md-3 fs-Body-2 pb-2 pb-md-0">
                                                                        <img src="../assets/images/icon/person.png"
                                                                            alt="star" className="pe-1 fs-Body-2" />
                                                                        2-6 人
                                                                    </span>
                                                                    <span className="ps-md-2  fs-Body-2">
                                                                        <img src="../assets/images/icon/price.png"
                                                                            alt="star" className="pe-1" />
                                                                        每人 750元起
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- 手機版標籤在底部 --> */}
                                                    <div className="tags   d-flex flex-wrap fs-Body-2 gap-2 mt-3 ">
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">新手入門</span>
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3 text-nowrap">場景逼真</span>
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">機關重重</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col2 ">
                                            <a href="game_content.html">
                                                <div className="card p-3 rounded-6 ">
                                                    <div className="row g-0 align-items-start h-100">
                                                        <div className="col-auto col-sm-12 ">
                                                            {/* <!-- 手機板圖片在左邊 --> */}
                                                            <picture className="">
                                                                <source media="(min-width: 576px)"
                                                                    srcSet="../assets/images/egor-freethinkel.svg" />

                                                                <img src="../assets/images/egor-freethinkel-sm.svg"
                                                                    alt="MY後台苦路 /"
                                                                    className="card-photo rounded-3 w-100 mb-3 me-3 me-md-0" />
                                                            </picture>
                                                        </div>
                                                        {/* <!-- 手機板文字內容在右邊 --> */}
                                                        <div className="col ms-3 ms-md-0">
                                                            <div className="card-body p-0">
                                                                <h6
                                                                    className="card-title mb-1 mb-md-2 text-primary-black fw-bold lh-base">
                                                                    MY後台苦路
                                                                </h6>
                                                                <p className="card-text text-nature-40 mb-3 fw-bold fs-Body-2">
                                                                    台中市
                                                                </p>
                                                                <p className="d-flex align-items-center mb-2">
                                                                    <span className="rating dotted pe-3 fs-Body-2">
                                                                        <img src="../assets/images/icon/star.png" alt="star"
                                                                            className="pe-1" />4. /4
                                                                    </span>
                                                                    <span className="ps-2 fs-Body-2">70 人評論</span>
                                                                </p>
                                                                <p
                                                                    className="d-flex align-items-start flex-md-row flex-column ">
                                                                    <span className="dotted pe-md-3 fs-Body-2 pb-2 pb-md-0">
                                                                        <img src="../assets/images/icon/person.png"
                                                                            alt="star" className="pe-1 fs-Body-2" />
                                                                        8-12 人
                                                                    </span>
                                                                    <span className="ps-md-2  fs-Body-2">
                                                                        <img src="../assets/images/icon/price.png"
                                                                            alt="star" className="pe-1" />
                                                                        每人 900元起
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- 手機版標籤在底部 --> */}
                                                    <div className="tags   d-flex flex-wrap fs-Body-2 gap-2 mt-3 ">
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">中度玩家</span>
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3 text-nowrap">團隊合作</span>
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">玩法特殊</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col2 ">
                                            <a href="game_content.html">
                                                <div className="card p-3 rounded-6 ">
                                                    <div className="row g-0 align-items-start h-100">
                                                        <div className="col-auto col-sm-12 ">
                                                            {/* <!-- 手機板圖片在左邊 --> */}
                                                            <picture className="">
                                                                <source media="(min-width: 576px)"
                                                                    srcSet="../assets/images/omer-haktan.svg" />

                                                                <img src="../assets/images/omer-haktan-sm.svg"
                                                                    alt="康斯特學員：惡獸起源 /"
                                                                    className="card-photo rounded-3 w-100 mb-3 me-3 me-md-0" />
                                                            </picture>
                                                        </div>
                                                        {/* <!-- 手機板文字內容在右邊 --> */}
                                                        <div className="col ms-3 ms-md-0">
                                                            <div className="card-body p-0">
                                                                <h6
                                                                    className="card-title mb-1 mb-md-2 text-primary-black fw-bold lh-base">
                                                                    康斯特學員：惡獸起源
                                                                </h6>
                                                                <p className="card-text text-nature-40 mb-3 fw-bold fs-Body-2">
                                                                    台北市
                                                                </p>
                                                                <p className="d-flex align-items-center mb-2">
                                                                    <span className="rating dotted pe-3 fs-Body-2">
                                                                        <img src="../assets/images/icon/star.png" alt="star"
                                                                            className="pe-1" />4. /7
                                                                    </span>
                                                                    <span className="ps-2 fs-Body-2">36 人評論</span>
                                                                </p>
                                                                <p
                                                                    className="d-flex align-items-start flex-md-row flex-column ">
                                                                    <span className="dotted pe-md-3 fs-Body-2 pb-2 pb-md-0">
                                                                        <img src="../assets/images/icon/person.png"
                                                                            alt="star" className="pe-1 fs-Body-2" />
                                                                        1-4 人
                                                                    </span>
                                                                    <span className="ps-md-2  fs-Body-2">
                                                                        <img src="../assets/images/icon/price.png"
                                                                            alt="star" className="pe-1" />
                                                                        每人 200元起
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- 手機版標籤在底部 --> */}
                                                    <div className="tags   d-flex flex-wrap fs-Body-2 gap-2 mt-3 ">
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">新手入門</span>
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3 text-nowrap">角色扮演</span>
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">輕鬆歡樂</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col2 ">
                                            <a href="game_content.html">
                                                <div className="card p-3 rounded-6 ">
                                                    <div className="row g-0 align-items-start h-100">
                                                        <div className="col-auto col-sm-12 ">
                                                            {/* <!-- 手機板圖片在左邊 --> */}
                                                            <picture className="">
                                                                <source media="(min-width: 576px)"
                                                                    srcSet="../assets/images/roonz.svg" />

                                                                <img src="../assets/images/roonz-sm.svg" alt="鬱金香"
                                                                    className="card-photo rounded-3 w-100 mb-3 me-3 me-md-0" />
                                                            </picture>
                                                        </div>
                                                        {/* <!-- 手機板文字內容在右邊 --> */}
                                                        <div className="col ms-3 ms-md-0">
                                                            <div className="card-body p-0">
                                                                <h6
                                                                    className="card-title mb-1 mb-md-2 text-primary-black fw-bold lh-base">
                                                                    鬱金香
                                                                </h6>
                                                                <p className="card-text text-nature-40 mb-3 fw-bold fs-Body-2">
                                                                    桃園市
                                                                </p>
                                                                <p className="d-flex align-items-center mb-2">
                                                                    <span className="rating dotted pe-3 fs-Body-2">
                                                                        <img src="../assets/images/icon/star.png" alt="star"
                                                                            className="pe-1" />5. /0
                                                                    </span>
                                                                    <span className="ps-2 fs-Body-2">1 人評論</span>
                                                                </p>
                                                                <p
                                                                    className="d-flex align-items-start flex-md-row flex-column ">
                                                                    <span className="dotted pe-md-3 fs-Body-2 pb-2 pb-md-0">
                                                                        <img src="../assets/images/icon/person.png"
                                                                            alt="star" className="pe-1 fs-Body-2" />
                                                                        2-6 人
                                                                    </span>
                                                                    <span className="ps-md-2  fs-Body-2">
                                                                        <img src="../assets/images/icon/price.png"
                                                                            alt="star" className="pe-1" />
                                                                        每人 850元起
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- 手機版標籤在底部 --> */}
                                                    <div className="tags   d-flex flex-wrap fs-Body-2 gap-2 mt-3 ">
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">新手入門</span>
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3 text-nowrap">場景逼真</span>
                                                        <span className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">劇情厲害
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col2 ">
                                            <a href="game_content.html">
                                                <div className="card p-3 rounded-6 ">
                                                    <div className="row g-0 align-items-start h-100">
                                                        <div className="col-auto col-sm-12 ">
                                                            {/* <!-- 手機板圖片在左邊 --> */}
                                                            <picture className="">
                                                                <source media="(min-width: 576px)"
                                                                    srcSet="../assets/images/erik-muller.svg" />

                                                                <img src="../assets/images/erik-muller-sm.svg" alt="諜影：重慶迷霧"
                                                                    className="card-photo rounded-3 w-100 mb-3 me-3 me-md-0" />
                                                            </picture>
                                                        </div>
                                                        {/* <!-- 手機板文字內容在右邊 --> */}
                                                        <div className="col ms-3 ms-md-0">
                                                            <div className="card-body p-0">
                                                                <h6
                                                                    className="card-title mb-1 mb-md-2 text-primary-black fw-bold lh-base">
                                                                    諜影：重慶迷霧
                                                                </h6>
                                                                <p className="card-text text-nature-40 mb-3 fw-bold fs-Body-2">
                                                                    台北市
                                                                </p>
                                                                <p className="d-flex align-items-center mb-2">
                                                                    <span className="rating dotted pe-3 fs-Body-2">
                                                                        <img src="../assets/images/icon/star.png" alt="star"
                                                                            className="pe-1" />4. /8
                                                                    </span>
                                                                    <span className="ps-2 fs-Body-2">253 人評論</span>
                                                                </p>
                                                                <p
                                                                    className="d-flex align-items-start flex-md-row flex-column ">
                                                                    <span className="dotted pe-md-3 fs-Body-2 pb-2 pb-md-0">
                                                                        <img src="../assets/images/icon/person.png"
                                                                            alt="star" className="pe-1 fs-Body-2" />
                                                                        8-8 人
                                                                    </span>
                                                                    <span className="ps-md-2  fs-Body-2">
                                                                        <img src="../assets/images/icon/price.png"
                                                                            alt="star" className="pe-1" />
                                                                        每人 1,350元起
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- 手機版標籤在底部 --> */}
                                                    <div className="tags   d-flex flex-wrap fs-Body-2 gap-2 mt-3 ">
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">中度玩家</span>
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3 text-nowrap">場景逼真</span>
                                                        <span className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">勾心鬥角
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col2 ">
                                            <a href="game_content.html">
                                                <div className="card p-3 rounded-6 ">
                                                    <div className="row g-0 align-items-start h-100">
                                                        <div className="col-auto col-sm-12 ">
                                                            {/* <!-- 手機板圖片在左邊 --> */}
                                                            <picture className="">

                                                                <source media="(min-width: 576px)"
                                                                    srcSet="../assets/images/lan-gao.svg" />

                                                                <img src="../assets/images/lan-gao-sm.svg" alt="驅魔"
                                                                    className="card-photo rounded-3 w-100 mb-3 me-3 me-md-0" />
                                                            </picture>
                                                        </div>
                                                        {/* <!-- 手機板文字內容在右邊 --> */}
                                                        <div className="col ms-3 ms-md-0">
                                                            <div className="card-body p-0">
                                                                <h6
                                                                    className="card-title mb-1 mb-md-2 text-primary-black fw-bold lh-base">
                                                                    驅魔
                                                                </h6>
                                                                <p className="card-text text-nature-40 mb-3 fw-bold fs-Body-2">
                                                                    台中市
                                                                </p>
                                                                <p className="d-flex align-items-center mb-2">
                                                                    <span className="rating dotted pe-3 fs-Body-2">
                                                                        <img src="../assets/images/icon/star.png" alt="star"
                                                                            className="pe-1" />4. /9
                                                                    </span>
                                                                    <span className="ps-2 fs-Body-2">4,055 人評論</span>
                                                                </p>
                                                                <p
                                                                    className="d-flex align-items-start flex-md-row flex-column ">
                                                                    <span className="dotted pe-md-3 fs-Body-2 pb-2 pb-md-0">
                                                                        <img src="../assets/images/icon/person.png"
                                                                            alt="star" className="pe-1 fs-Body-2" />
                                                                        4-10 人
                                                                    </span>
                                                                    <span className="ps-md-2  fs-Body-2">
                                                                        <img src="../assets/images/icon/price.png"
                                                                            alt="star" className="pe-1" />
                                                                        每人 600元起
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- 手機版標籤在底部 --> */}
                                                    <div className="tags   d-flex flex-wrap fs-Body-2 gap-2 mt-3 ">
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">中度玩家</span>
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3 text-nowrap">恐怖驚悚</span>
                                                        <span
                                                            className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">場景逼真</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </main >
            <Footer />
        </>
    )
};

export default Game_search;