import React from "react";

const LatestProducts = ({ posts }) => {
  return (

    <>
      <div className="py-12">
        <div>
          <div className="flex justify-center gap-4 ">
            <div className="latestpost flex justify-center gap-4 ">
              <p className="text-gray-500 lg:text-4xl font-semibold">
                LATEST
                <span className="text-gray-700"> COLLECTIONS</span>
              </p>
              <p className="w-20 md:w-14 h-[2px] bg-gray-700 lg:my-5 "></p>
            </div>
          </div>
          <p className="flex justify-center my-4 text-gray-600 lg:text-xl sm:text-xs font-normal lg:font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            blanditiis temporibus iure architecto!
          </p>
        </div>

        {/* API IMPORT */}
        <div className="API">
          <div className="fetch-api">
            <ul>
              {posts && posts.length > 0 ? (
                posts.slice(0, 5).map((post) => (
                  <li key={post.id} className="p-4 border rounded-lg shadow">
                    <img src={post.images[0]} alt={post.title} />
                    <h1>{post.title}</h1>
                  </li>
                ))
              ) : (
                <p className="flex justify-center">Loading...</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProducts;
