import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function CommendedGamesCard({ game }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col2 ">
      <Link to={`/Game_content/${game.game_id}`}>
        <div className="card card-recommend p-3 rounded-6 ">
          <div className="row g-0 align-items-start h-100">
            <div className="col-auto col-sm-12 ratio ratio-16x9">
              <img
                src={game.game_img[0]}
                alt={game.game_name}
                className="card-photo rounded-3 w-100 img-fluid"
              />
            </div>
            <div className="col ms-3 ms-md-0">
              <div className="card-body p-0 mt-3">
                <h6 className="card-title mb-1 mb-md-2 text-primary-black fw-bold lh-base">
                  {game.game_name}
                </h6>
                <p className="card-text text-nature-40 mb-3 fw-bold fs-Body-2">
                  {game.game_address.slice(0, 3)}
                </p>
                <p className="d-flex align-items-center mb-2">
                  <span className="rating dotted pe-3 fs-Body-2">
                    <img src="./icon/star.png" alt="star" className="pe-1" />
                    {game.game_score}
                  </span>
                  <span className="ps-2 fs-Body-2">
                    {game.game_score_num}人評論
                  </span>
                </p>
                <p className="d-flex align-items-start flex-md-row flex-column ">
                  <span className="dotted pe-md-3 fs-Body-2 pb-2 pb-md-0">
                    <img
                      src="./icon/person.png"
                      alt="star"
                      className="pe-1 fs-Body-2"
                    />
                    {game.game_minNum_Players}-{game.game_maxNum_Players} 人
                  </span>
                  <span className="ps-md-2  fs-Body-2">
                    <img src="./icon/price.png" alt="star" className="pe-1" />
                    每人 {game.game_min_price}元起
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 手機版標籤在底部 --> */}
          <div className="tags d-flex flex-wrap fs-Body-2 gap-2 mt-3 ">
            <span className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">
              {game.game_dif_tagname}
            </span>
            <span className=" bg-nature-95 px-2 py-1 rounded-3 text-nowrap">
              {game.game_main_tag1name}
            </span>
            <span className=" bg-nature-95 px-2 py-1 rounded-3  text-nowrap">
              {game.game_main_tag2name}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CommendedGamesCard;

// 添加 PropTypes 驗證
CommendedGamesCard.propTypes = {
  game: PropTypes.shape({
    game_id: PropTypes.number.isRequired,
    game_img: PropTypes.array.isRequired,
    game_name: PropTypes.string.isRequired,
    game_address: PropTypes.string.isRequired,
    game_score: PropTypes.number.isRequired,
    game_score_num: PropTypes.number.isRequired,
    game_minNum_Players: PropTypes.number.isRequired,
    game_maxNum_Players: PropTypes.number.isRequired,
    game_min_price: PropTypes.number.isRequired,
    game_dif_tagname: PropTypes.string.isRequired,
    game_main_tag1name: PropTypes.string.isRequired,
    game_main_tag2name: PropTypes.string.isRequired,
  }).isRequired,
};
