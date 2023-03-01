import "./New.scss";
import Sider from "../../components/Sider/Sider";
import Navbar from "../../components/Navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import { useState } from "react";
import { useState } from "react";

// const New = () => {
  const New = ({inputs, title}) => {

    const [file, setFile] = useState("");
    // console.log(file)

  return (
    <div className="new">
      <Sider/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          {/* <h1>Add New User</h1> */}
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src= {
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image:<DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" onClick={(e) => setFile(e.target.files[0])} style={{display: "none"}}/>
                </div>


                {inputs.map((input) => (
                  <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder}
                  />
                  </div>
                ))}

                  <button>Send</button>


                {/* <div className="formInput">
                <label htmlFor="file">
                  Username
                </label>
                <input type="text" placeholder="Shakeel123"
                />
                </div> */}

                
                {/* <div className="formInput">
                <label htmlFor="file">
                  Name and Surname
                </label>
                <input type="text" placeholder="Shakeel Ahmah"
                />
                </div>


                <div className="formInput">
                <label htmlFor="file">
                  Email
                </label>
                <input type="email" placeholder="shakeel.greyneon@gmail.com"
                />
                </div>


                <div className="formInput">
                <label htmlFor="file">
                  Phone
                </label>
                <input type="text" placeholder="+923123456789"
                />
                </div>


                <div className="formInput">
                <label htmlFor="file">
                 Password
                </label>
                <input type="password" 
                />
                </div>


                <div className="formInput">
                <label htmlFor="file">
                  Addsess
                </label>
                <input type="text" placeholder="Awan Market Lahore"
                />
                </div>


                <div className="formInput">
                <label htmlFor="file">
                  Country
                </label>
                <input type="text" placeholder="Pakistan"
                />
                </div> */}

              {/* <button>Send</button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
