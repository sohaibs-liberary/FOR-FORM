import React from "react";
import img from "/src/assets/images/about_img.68896677c92b2b46a857.png";

const Aboutus = () => {
  return (
    <>
      <div className="Aboutus">
        <div className="aboutus text-center ">
          <div className=" flex gap-2 justify-center items-center">
            <p className="lg:text-3xl text-xl text-gray-500 font-semibold text-center ">
              ABOUT
              <span className="text-gray-700"> US</span>
            </p>
            <p className=" w-20 md:w-20 h-[1px] bg-gray-800 "></p>
          </div>
        </div>
        <div className="imageandtext lg:flex lg:justify-around ">
          <div className="img">
           <img src={img} alt="aboutusimage" className="max-w-[600px] max-h-[700px]  rounded-lg lg:mx-28 my-14" />

          </div>

          <div className="text  lg:translate-y-28 lg:translate-x-[-90px] mx-5 lg:max-w-[800px]"> 
            <p className="text-xl font-semibold text-gray-400 lg:text-wrap " >
              Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
             <p className="text-xl font-semibold text-gray-400 lg:text-wrap my-11 " >
                Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
            </p>
            <h1 className="text-xl font-bold text-gray-700" >Our Mission</h1>

             <p className="text-xl font-semibold text-gray-400 lg:text-wrap my-8 " >
                Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
                </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
