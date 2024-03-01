export default function Cart() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="cartOuter">
        <div className="mainContent">
          <div className="innerCart">
            <img
              className="cartImage"
              src="https://t4.ftcdn.net/jpg/05/42/79/25/360_F_542792538_MnebBNUiMeSaPCws0PUfkGoTHU0ZR4Jp.jpg"
              alt="capsicum"
            />
            <div className="cartPriceDiscount">
              <p>Rabbit</p>
              <p>₹50₹172</p>
            </div>
        
            <input className="cartInput" type="text" disabled/>
            <div ><p className="cartPrice">price</p></div>
          </div>
          
        </div>
        <div className="leftSideContent"></div>
        <div className="rightSideContent"></div>
      </div>
    </>
  );
}
