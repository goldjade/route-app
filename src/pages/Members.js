import React from "react";

const Members = (props) => {
  // 이미지 사이즈 객체 설정
  const imgSize = { width: 90, heigth: 80 };
  const list = props.members.map((item, index) => {
    return (
      // 반복문에서는 key속성이 있어야 하며 unique값 
      // 버추얼돔의 최적화를 위해 들어가야함
      <div className="col-6 col-md-4 col-lg-3" key={index}>
        <img
          src={item.photo}
          className="img-thumbnail"
          alt={item.name}
          style={imgSize}
        />
        <br />
        <h6>{item.name}</h6>
        <br />
        <br />
      </div>
    );
  });
  
  return (
    <div className="card card-body">
      <h2>Members</h2>
      <div className="container">
        <div className="row">{list}</div>
      </div>
    </div>
  );
};

export default Members;
