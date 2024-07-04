import PropTypes from "prop-types";

const DonationReqs = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-crimson text-center mb-5">
        Blood Donation Requests
      </h1>
      <div className="border-t-[4px] border-crimson p-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center  justify-center gap-2">
        {/* card component : */}

        <div className="card card-side bg-base-100 shadow-xl max-w-[500px]  mx-auto">
          <figure className="p-[4px] bg-crimson max-w-[35%] ">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
              className="rounded-l-xl object-cover w-full h-full "
            />
          </figure>
          <div className="card-body bg-crimson rounded-r-xl text-white p-3 flex flex-col justify-between ">
            <h2 className="text-xl ">Name : Mosharof Hossain</h2>
            <h2 className="text-xl ">Location : Upazila, District</h2>
            <h2 className="text-xl ">Date: {new Date().toDateString()}</h2>
            <h2 className="text-xl ">
              Time: {new Date().toTimeString().split(" ")[0]}
            </h2>

            <div className="card-actions ">
              <button className="btn button">View</button>
            </div>
          </div>
        </div>

        {/* card component : */}

        <div className="card card-side bg-base-100 shadow-xl max-w-[500px]  mx-auto">
          <figure className="p-[4px] bg-crimson w-[35%]">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
              className="rounded-l-xl object-cover w-full h-full"
            />
          </figure>
          <div className="card-body bg-crimson rounded-r-xl text-white p-3 flex flex-col justify-between">
            <h2 className="text-xl ">Name : Mosharof Hossain</h2>
            <h2 className="text-xl ">Location : Upazila, District</h2>
            <h2 className="text-xl ">Date: {new Date().toDateString()}</h2>
            <h2 className="text-xl ">
              Time: {new Date().toTimeString().split(" ")[0]}
            </h2>

            <div className="card-actions ">
              <button className="btn button">View</button>
            </div>
          </div>
        </div>

        {/* card component : */}

        <div className="card card-side bg-base-100 shadow-xl max-w-[500px]  mx-auto">
          <figure className="p-[4px] bg-crimson w-[35%]">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
              className="rounded-l-xl object-cover w-full h-full"
            />
          </figure>
          <div className="card-body bg-crimson rounded-r-xl text-white p-3 flex flex-col justify-between">
            <h2 className="text-xl ">Name : Mosharof Hossain</h2>
            <h2 className="text-xl ">Location : Upazila, District</h2>
            <h2 className="text-xl ">Date: {new Date().toDateString()}</h2>
            <h2 className="text-xl ">
              Time: {new Date().toTimeString().split(" ")[0]}
            </h2>

            <div className="card-actions ">
              <button className="btn button">View</button>
            </div>
          </div>
        </div>

        {/* card component : */}

        <div className="card card-side bg-base-100 shadow-xl max-w-[500px]  mx-auto">
          <figure className="p-[4px] bg-crimson w-[35%]">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
              className="rounded-l-xl object-cover w-full h-full"
            />
          </figure>
          <div className="card-body bg-crimson rounded-r-xl text-white p-3 flex flex-col justify-between">
            <h2 className="text-xl ">Name : Mosharof Hossain</h2>
            <h2 className="text-xl ">Location : Upazila, District</h2>
            <h2 className="text-xl ">Date: {new Date().toDateString()}</h2>
            <h2 className="text-xl ">
              Time: {new Date().toTimeString().split(" ")[0]}
            </h2>

            <div className="card-actions ">
              <button className="btn button">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DonationReqs.propTypes = {};

export default DonationReqs;
