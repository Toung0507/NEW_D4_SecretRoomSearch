//import Header from "../layout/Header";
import HeaderLogin from "../layout/HeaderLogin";
import Footer from "../layout/Footer";
import { useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Game_comment() {
  const [comments, setComment] = useState([]);

  const getComments = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/commentsData`);
      console.log();
    } catch (error) {}
  };

  return (
    <>
      <HeaderLogin></HeaderLogin>
      <main>
        <div className="container-fluid container-lg">
          <div className="rol d-flex justify-content-center">
            <div className="col-xl-10">
              <div className="pb-10">
                <picture>
                  <source
                    media="(min-width: 992px)"
                    srcset="../assets/images/julia-kadel.png"
                  />
                  <img
                    src="../assets/images/julia-kadel-sm.png"
                    alt="banner"
                    className="w-100"
                  />
                </picture>
                <div>
                  <div className="py-10">
                    <h1 className="fs-lg-Display2 fs-h5 fw-bold">
                      遊戲名稱：等一個人・盜墓
                    </h1>
                  </div>
                  <div className="mb-6">
                    <h2 className="fs-lg-h2 fs-h6 fw-bold">整體評價</h2>
                    <p className="py-3">
                      依據您遊玩的經驗，整體而言您會給這個遊戲幾分?
                    </p>
                    <div className="box">
                      <input type="radio" name="star" id="score5" value="5" />
                      <label className="star" for="score5"></label>
                      <input type="radio" name="star" id="score4" value="4" />
                      <label className="star" for="score4"></label>
                      <input type="radio" name="star" id="score3" value="3" />
                      <label className="star" for="score3"></label>
                      <input type="radio" name="star" id="score2" value="2" />
                      <label className="star" for="score2"></label>
                      <input type="radio" name="star" id="score1" value="1" />
                      <label className="star" for="score1"></label>
                    </div>
                  </div>
                  <div>
                    <form>
                      <div className="row mb-6">
                        <h2 className="fs-lg-h2 fs-h6 fw-bold">難度與特色</h2>
                        <div className="row py-3">
                          <h3 className="fs-lg-h3 fs-h6 fw-bold pb-2">難度</h3>
                          <div className="col-auto">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio1"
                              value="option1"
                            />
                            <label
                              className="form-check-label"
                              for="inlineRadio1"
                            >
                              新手入門
                            </label>
                          </div>
                          <div className="col-auto">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              value="option2"
                            />
                            <label
                              className="form-check-label"
                              for="inlineRadio2"
                            >
                              中度玩家
                            </label>
                          </div>
                          <div className="col-auto">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio3"
                              value="option3"
                            />
                            <label
                              className="form-check-label"
                              for="inlineRadio3"
                            >
                              重度解謎
                            </label>
                          </div>
                        </div>
                        <div className="row py-3" id="input_3_2">
                          <h3 className="fs-lg-h3 fs-h6 fw-bold pb-2">
                            主題特色(最多選3項)
                          </h3>
                          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="autoSizingCheck1"
                              />
                              <label
                                className="form-check-label"
                                for="autoSizingCheck1"
                              >
                                偵探推理
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="autoSizingCheck2"
                              />
                              <label
                                className="form-check-label"
                                for="autoSizingCheck2"
                              >
                                機關重重
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="autoSizingCheck3"
                              />
                              <label
                                className="form-check-label"
                                for="autoSizingCheck3"
                              >
                                劇情厲害
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="autoSizingCheck4"
                              />
                              <label
                                className="form-check-label"
                                for="autoSizingCheck4"
                              >
                                場景逼真
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="autoSizingCheck5"
                              />
                              <label
                                className="form-check-label"
                                for="autoSizingCheck5"
                              >
                                互動操作
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="autoSizingCheck6"
                              />
                              <label
                                className="form-check-label"
                                for="autoSizingCheck6"
                              >
                                謎題邏輯
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="autoSizingCheck7"
                              />
                              <label
                                className="form-check-label"
                                for="autoSizingCheck7"
                              >
                                輕鬆歡樂
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="autoSizingCheck8"
                              />
                              <label
                                className="form-check-label"
                                for="autoSizingCheck8"
                              >
                                恐怖驚悚
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="autoSizingCheck9"
                              />
                              <label
                                className="form-check-label"
                                for="autoSizingCheck9"
                              >
                                緊張刺激
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="autoSizingCheck10"
                              />
                              <label
                                className="form-check-label"
                                for="autoSizingCheck10"
                              >
                                勾心鬥角
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="autoSizingCheck11"
                              />
                              <label
                                className="form-check-label"
                                for="autoSizingCheck11"
                              >
                                團隊合作
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="autoSizingCheck12"
                              />
                              <label
                                className="form-check-label"
                                for="autoSizingCheck12"
                              >
                                親子同遊
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="autoSizingCheck13"
                              />
                              <label
                                className="form-check-label"
                                for="autoSizingCheck13"
                              >
                                玩法特殊
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="autoSizingCheck14"
                              />
                              <label
                                className="form-check-label"
                                for="autoSizingCheck14"
                              >
                                角色扮演
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-6">
                        <h3 className="fs-lg-h3 fs-h6 fw-bold pb-2">
                          遊玩日期
                        </h3>
                        <div className="col-12">
                          <input type="date" className="form-control" />
                        </div>
                      </div>
                      <div className="row mb-6">
                        <h3 className="fs-lg-h3 fs-h6 fw-bold pb-2">
                          遊戲完成度
                        </h3>
                        <div className="col-auto">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadioSuccess"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            for="inlineRadioSuccess"
                          >
                            過關
                          </label>
                        </div>
                        <div className="col-auto">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadioFail"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            for="inlineRadioFail"
                          >
                            未通關
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <h3 className="fs-lg-h3 fs-h6 fw-bold pb-2">
                          體驗心得
                        </h3>
                        <div className="col-12">
                          <textarea
                            className="form-control"
                            id="experience"
                            rows="5"
                          ></textarea>
                          <label
                            for="experience"
                            className="form-label"
                          ></label>
                        </div>
                      </div>
                      <div className="col-12 d-grid gap-2">
                        <button
                          type="submit"
                          className="btn btn-secondary-60 link-white rounded-1"
                        >
                          送出
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
export default Game_comment;
