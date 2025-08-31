import React from "react";
import img from "/src/assets/images/contact_img.e07eab916b878014c843.png";

const ContactUs = () => {
  return (
    <>
      <div className="Aboutus">
        <div className="aboutus text-center ">
          <div className=" flex gap-2 justify-center items-center">
            <p className="lg:text-3xl text-xl text-gray-500 font-semibold text-center ">
              CONTACT
              <span className="text-gray-700"> US</span>
            </p>
            <p className=" w-20 md:w-20 h-[1px] bg-gray-800 "></p>
          </div>
        </div>
        <div className="imageandtext lg:flex lg:justify-center gap-7">
          <div className="img">
           <img src={img} alt="aboutusimage" className="max-w-[600px] max-h-[700px]  rounded-lg lg:mx-28 my-14" />

          </div>
          <div className="text translate-y-20  px-7">
            <div className="  grid gap-2 ">
              <h1 className="text-2xl font-bold text-gray-600 lg:my-4" >Our Story</h1>
              <p  className="text-xl text-gray-500" >54804 Willms Station   </p>
              <p  className="text-xl text-gray-500" >Wah Cantt , Punjab , Pakistan   </p>
            </div>
            <div className="grid gap-2 my-6" >
           <p  className="text-xl text-gray-500" >Tel : (051) 555-0123</p>
           <p  className="text-xl text-gray-500" >Email: suleman@forever.com</p>
            </div>
            <div className=" grid gap-3">
              <p className="text-2xl font-bold text-gray-600 lg:my-4"  >Careers at Forever</p>

              <p  className="text-xl text-gray-500" >Learn more about Our Terms and Job Openings.</p>
            </div>
            <div className="btn my-8">
              <button className="text-white  text-xl bg-black lg:px-44 py-4 px-28   "> Explor More </button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default ContactUs;
