import './Products.css';
import Ehho from './../../../assets/images/ehho.png';
import YOFUKASHI from './../../../assets/images/YOFUKASHI.png';
import Omasuke from './../../../assets/images/omasuke.png';
import Color from './../../../assets/images/color.png';
import Cake from './../../../assets/images/cake.png';
import Idea from './../../../assets/images/idea.png';

function Products() {
  return (
    <div className='products'>
      <h2>Products</h2>
      <div className="Products-container">
        <div className="Products-box">
          <div className='Products-peace'>
            <img src={Ehho} alt="My Icon" className="profile-image" />
            <h3>ehho</h3>
          </div>
          <div className='Products-peace'>
            <img src={YOFUKASHI} alt="My Icon" className="profile-image" />
            <h3>YOFUKASHI</h3>
          </div>
          <div className='Products-peace'>
            <img src={Omasuke} alt="My Icon" className="profile-image" />
            <h3>おまスケ！</h3>
          </div>
          <div className='Products-peace'>
            <img src={Idea} alt="My Icon" className="profile-image" />
            <h3>アイデアみっけ</h3>
          </div>
          <div className='Products-peace'>
            <img src={Cake} alt="My Icon" className="profile-image" />
            <h3>ケーキチャレンジ</h3>
          </div>
          <div className='Products-peace'>
            <img src={Color} alt="My Icon" className="profile-image" />
            <h3>カラフル漢字マスター</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;