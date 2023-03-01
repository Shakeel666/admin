import "./Single.scss";
import Sider from "../../components/Sider/Sider";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/Chart/Chart";
import List from "../../components/Table/Table";

const Single = () => {
  return (
    <div>
    <div className="single">
      <Sider />
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="../sa.png"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Shakeel Ahmad</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">shakeek.greyneon@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+923024625026</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Awan Market Lahore
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Pakistan</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart className='chart' aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Single;
