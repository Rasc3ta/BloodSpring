import PropTypes from "prop-types";

const Featured = () => {
  return (
    <div className="bg-crimson  text-white w-[90vw] max-w-[1280px] mx-auto bg-[url('https://i.ibb.co/8gG9425/featured.jpg')] bg-cover bg-no-repeat my-10 bg-center p-5 rounded-xl">
      <div className="bg-[rgb(220,20,60,0.45)]  backdrop-blur-sm rounded-xl">
        <h1 className="text-3xl font-bold text-white ml-5 pt-5">
          Why Donate Blood?
        </h1>

        <div className="join join-vertical w-full p-5">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">Save Lives</div>
            <div className="collapse-content">
              <p>
                Each donation can save up to three lives. Your generosity
                ensures that hospitals have the blood supplies they need for
                emergencies, surgeries, and treatments.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">Feel Great</div>
            <div className="collapse-content">
              <p>
                Donating blood is a rewarding experience that gives you a sense
                of accomplishment and connection to your community.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Stay Healthy
            </div>
            <div className="collapse-content">
              <p>
                {" "}
                Regular blood donation promotes good health by reducing harmful
                iron stores in your body and keeping your heart and vascular
                system in check.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Join a Community
            </div>
            <div className="collapse-content">
              <p>
                {" "}
                Be part of a network of compassionate individuals who are
                committed to making a difference.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Quick and Easy
            </div>
            <div className="collapse-content">
              <p>
                {" "}
                The entire donation process takes less than an hour. A small
                amount of your time can have a massive impact.
              </p>
            </div>
          </div>
        </div>
          <p className="p-5 pt-0 text-lg">
            Together we can make a difference. Donate blood today and become a
            lifesaver.
          </p>
      </div>
    </div>
  );
};

Featured.propTypes = {};

export default Featured;
