import './Products.css';
import MyIcon from './../../../assets/images/myicon.png';

function Products() {
  return (
    <div className="Products-container">
    <h2>Products</h2>
      <div className="Products-box">
        <div className='Products-peace'>
          <img src={MyIcon} alt="My Icon" className="profile-image" />
          <h3>作品名</h3>
          <p>作品詳細</p>
        </div>
        <div className='Products-peace'>
          <img src={MyIcon} alt="My Icon" className="profile-image" />
          <h3>作品名</h3>
          <p>作品詳細</p>
        </div>
        <div className='Products-peace'>
          <img src={MyIcon} alt="My Icon" className="profile-image" />
          <h3>作品名</h3>
          <p>作品詳細</p>
        </div>
        <div className='Products-peace'>
          <img src={MyIcon} alt="My Icon" className="profile-image" />
          <h3>作品名</h3>
          <p>作品詳細</p>
        </div>
      </div>
    </div>
  );
}

export default Products;