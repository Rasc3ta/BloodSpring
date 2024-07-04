import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import upazilas from "./upazilas";
import districts from "./districts";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider";
import { myAxios } from "../../Axios.config";

const Register = () => {
  const { user, register, update } = useContext(authContext);
  const [district, setDistrict] = useState(null);
  const [upazilaList, setUpazilaList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const selectedDistrict = districts.find(
      (districtObject) => districtObject["name"] === district
    );

    const selectedDistrictId = selectedDistrict?.id;

    const upazilasList = upazilas.filter(
      (upazila) => upazila.district_id === selectedDistrictId
    );

    setUpazilaList(upazilasList);
  }, [district]);

  const getFormObject = (event) => {
    const form = event.target;

    return {
      email: form.email.value,
      name: form.name.value,
      avatar: form.avatar.value,
      bloodGroup: form.bloodGroup.value,
      district: form.district.value,
      upazila: form.upazila.value,
      password: form.password.value,
      confirmPassword: form.confirmPassword.value,
      role: "donor",
      isActive: true,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = getFormObject(e);

    if (form.confirmPassword === form.password) {
      register(form.email, form.password)
        .then(() => {
          update(form.name, form.avatar)
            .then(console.log("displayName and photoURL is set"))

            .catch((e) => console.log(e.message));
        })
        .then(() => {
          myAxios.post("/addUser", form).then((res) => {
            if (res.data.insertedId) {
              navigate("/");
            }
          });
        })
        .catch((e) => console.log(e.message));
    } else {
      alert("passwords dont match !");
    }
  };

  if (user) {
    return <Navigate to={"/"}></Navigate>;
  } else {
    return (
      <div className="hero min-h-screen bg-crimson  ">
        <div className="hero-content max-w-[100%] w-[100%] flex-col ">
          <div className="text-center lg:text-left max-w-[600px] text-white ">
            <h1 className="text-4xl font-bold">
              Join the Life-Saving Community!
            </h1>
            <p className="py-6 text-2xl">
              Welcome to BloodSpring! Your donation brings hope and healing to
              those in need. Sign up to make a difference and become a hero
              today.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              onSubmit={handleSubmit}
              className="card-body bg-crimson border-white border-[4px] rounded-2xl "
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl  text-white">
                    Email :
                  </span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="text-2xl px-[10px] py-[5px] rounded-[5px] text-crimson focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl  text-white">Name :</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="text-2xl px-[10px] py-[5px] rounded-[5px] text-crimson focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl  text-white">
                    Avatar :
                  </span>
                </label>
                <input
                  name="avatar"
                  type="text"
                  placeholder="image URL"
                  className="text-2xl px-[10px] py-[5px] rounded-[5px] text-crimson focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xl  text-white">
                    Blood Group :
                  </span>
                </label>
                <select
                  name="bloodGroup"
                  defaultValue={"disabled"}
                  className="select select-primary focus:outline-none border-none text-crimson text-xl w-full max-w-xs"
                >
                  <option value={"disabled"} disabled>
                    Select Blood Group
                  </option>
                  <option value={"A+"}>a+</option>
                  <option value={"A-"}>a-</option>
                  <option value={"b+"}>b+</option>
                  <option value={"b-"}>b-</option>
                  <option value={"ab+"}>ab+</option>
                  <option value={"ab-"}>ab-</option>
                  <option value={"o+"}>o+</option>
                  <option value={"o-"}>o-</option>
                </select>
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-xl  text-white">
                    District :
                  </span>
                </label>
                <select
                  name="district"
                  onChange={(e) => {
                    setDistrict(e.target.value);
                  }}
                  defaultValue={"disabled"}
                  className="select select-primary focus:outline-none border-none text-crimson text-xl w-full max-w-xs"
                >
                  <option value={"disabled"} disabled>
                    Select District
                  </option>
                  {districts.map((district) => (
                    <option key={district["id"]} value={district["name"]}>
                      {district["name"]}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xl  text-white">
                    Upazila :
                  </span>
                </label>
                <select
                  name="upazila"
                  disabled={upazilaList.length ? false : true}
                  defaultValue={"disabled"}
                  className="select select-primary focus:outline-none border-none text-crimson text-xl w-full max-w-xs"
                >
                  <option value={"disabled"} disabled>
                    Select Upazila
                  </option>
                  {upazilaList.map((upazila) => (
                    <option key={upazila["id"]} value={upazila["name"]}>
                      {upazila["name"]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl  text-white">
                    Password :
                  </span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="text-2xl px-[10px] py-[5px] rounded-[5px] text-crimson focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl  text-white">
                    Confirm Password :
                  </span>
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="confirm password"
                  className="text-2xl px-[10px] py-[5px] rounded-[5px] text-crimson focus:outline-none"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn button">Sign Up</button>
              </div>
              <Link to={"/login"}>
                <h2 className="text-lg text-white hover:underline">
                  Already have an account? Log in{" "}
                </h2>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

Register.propTypes = {};

export default Register;
