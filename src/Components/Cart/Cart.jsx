import React from "react";

const Cart = () => {
  return (
    <>
      <div className="cart-and-data py-20 ">
        <div className=" flex justify-around">
          <div className="text">
            <div className="product text-center">
              <div className="flex gap-2 justify-center items-center">
                <p className="lg:text-3xl text-xl text-gray-500 font-semibold text-center">
                  YOU
                  <span className="text-gray-700"> CART</span>
                </p>
                <p className="w-20 md:w-20 h-[1px] bg-gray-800"></p>
              </div>
            </div>
          </div>
          <div className="cart border-gray-400 border-[1px] p-10 ">
            <div className="">
              <div className="payment">
                <div className="">
                  <div  className="product text-center">
                    <div className="flex gap-2 justify-center items-center">
                      <p className="lg:text-3xl text-xl text-gray-500 font-semibold text-center">
                        CART
                        <span className="text-gray-700"> TOTAL</span>
                      </p>
                      <p className="w-20 md:w-20 h-[1px] bg-gray-800"></p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-3">

                <div className="Product payment flex justify-between  ">
                  <h1 className="text-xl " >Sub Total</h1>
                  <h1 className="text-xl" >$0.00</h1>
                </div>
                <div className="Shipping Fee flex justify-between border-b-gray-300 border-t-gray-300 border-[1px] py-2">
                  <h1 className="text-xl " >Shipping Fee</h1>
                  <h1 className="text-xl " >$18.00</h1>
                </div>
                <div className="Total  flex justify-between">
                  <h1 className="text-xl font-semibold "  >Total</h1>
                  <h1 className="text-xl  font-semibold "  >$0.00</h1>
                </div>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
      <div className="flex justify-end px-96">

      <div className="button flex justify-end  w-[190px] ">
          <input type="button"  value="Go to CheckOut" className='h-[70px] lg:w-[200px] bg-black rounded-lg font-bold text-white cursor-pointer text-xl  w-[190px] '  />
        </div>
      </div>
    </>
  );
};

export default Cart;
