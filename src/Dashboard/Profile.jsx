import PropTypes from "prop-types";
import useGetUser from "../Shared/CustomHooks/useGetUser";
import { useContext, useEffect, useRef, useState } from "react";
import districts from "../Authentication/Register/districts";
import upazilas from "../Authentication/Register/upazilas";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { myAxiosSecure } from "../Axios.config";
import { authContext } from "../Authentication/AuthProvider";
import { Navigate } from "react-router-dom";
import ErrorPage from "../Shared/ErrorPage";

const Profile = () => {
  const { update } = useContext(authContext);

  const {
    data: currentUser,
    isPending,
    refetch: currentUserRefetch,
  } = useGetUser();
  const [district, setDistrict] = useState(null);
  const [upazilaList, setUpazilaList] = useState([]);
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [districtTriggered, setDistrictTriggered] = useState(false);

  const formRef = useRef(null);

  useEffect(() => {
    // console.log(isPending);
    if (!isPending && !districtTriggered) {
      setDistrict(currentUser.district);
    }
    if (district) {
      // console.log(district);
      const selectedDistrict = districts.find(
        (districtObject) => districtObject["name"] === district
      );
      // console.log("district : ", district);
      // console.log("selectedDistrict : ", selectedDistrict);
      const selectedDistrictId = selectedDistrict?.id;
      const upazilasList = upazilas.filter((upazila) => {
        return upazila.district_id === selectedDistrictId;
      });
      setUpazilaList(upazilasList);
      setSelectedUpazila(currentUser.upazila);
    }
  }, [district, isPending]);

  // console.log("currentUser : ", currentUser);
  // console.log(upazilaList);
  // 

  const handleEdit = (e) => {
    e.preventDefault();
    if (!disabled) {
      const formData = {
        name: formRef?.current.name.value,
        avatar: formRef?.current.avatar.value,
        bloodGroup: formRef?.current.bloodGroup.value,
        district: formRef?.current.district.value,
        upazila: formRef?.current.upazila.value,
      };


      myAxiosSecure
        .patch(`/updateUserProfile?email=${currentUser.email}`, formData)
        .then((res) => {
          if (res.data.modifiedCount === 1) {
            update(formData.name, formData.avatar)
              .then(() => console.log("firebase profile updated"))
              .catch((e) => console.log(e.message));

            currentUserRefetch();

            alert("Data has been updated. ");
          }
        })
        .catch((e) => console.log(e.message));
    }

    setDisabled(!disabled);
  };

  if (!currentUser) {
    return <ErrorPage></ErrorPage>;
  }

  if (!isPending && currentUser) {
    return (
      <div className="hero bg-crimson min-h-screen w-auto flex flex-col items-center justify pb-20">
        <h1 className="text-3xl text-white border-b-[4px] w-full text-center p-5 mb-10">
          Profile
        </h1>
        <div className="hero-content flex-col w-auto  p-0 rounded-xl ">
          <img
            src={currentUser.avatar}
            className=" border-[4px] border-white rounded-lg  w-full object-cover max-h-[400px] max-w-[400px] object-center shadow-2xl"
          />
          <button
            onClick={handleEdit}
            className="btn button text-4xl h-auto w-auto px-12 py-4"
          >
            {disabled ? "Edit" : "Save"}
          </button>
          <div className="card shadow-2xl max-w-[460px] sm:max-w-full sm:min-w-[600px] w-full shrink-0 border-[4px]  border-white">
            <form
              ref={formRef}
              className="flex flex-col rounded-xl gap-3 mt-8 bg-crimson p-4"
            >
              <label className="text-3xl  text-white bg-crimson ">
                <span>Email :</span>
                <input
                  type="email"
                  disabled
                  className="bg-white  rounded-xl text-crimson p-3"
                  defaultValue={currentUser.email}
                />
              </label>

              <label className="text-3xl  text-white bg-crimson ">
                <span>Name :</span>
                <input
                  name="name"
                  disabled={disabled}
                  type="text"
                  className=" rounded-xl text-crimson bg-white p-3"
                  defaultValue={currentUser.name}
                />
              </label>

              <label className="text-3xl  text-white bg-crimson ">
                <span>Avatar :</span>
                <input
                  name="avatar"
                  disabled={disabled}
                  type="text"
                  className=" rounded-xl text-crimson bg-white p-3"
                  defaultValue={currentUser.avatar}
                />
              </label>

              <label className="text-3xl  text-white bg-crimson  ">
                <span>District :</span>
                <select
                  disabled={disabled}
                  name="district"
                  onChange={(e) => {
                    setDistrictTriggered(true);
                    setDistrict(e.target.value);
                  }}
                  defaultValue={currentUser.district}
                  className="select select-primary focus:outline-none border-none text-crimson text-3xl w-full max-w-xs disabled:text-crimson disabled:bg-white "
                >
                  {districts.map((district) => (
                    <option key={district["id"]} value={district["name"]}>
                      {district["name"]}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-3xl  text-white bg-crimson  ">
                <span>Upazila :</span>
                <select
                  disabled={disabled}
                  name="upazila"
                  className="select select-primary focus:outline-none border-none text-crimson text-3xl w-full max-w-xs disabled:text-crimson disabled:bg-white"
                  value={selectedUpazila}
                  onChange={(e) => setSelectedUpazila(e.target.value)}
                >
                  {upazilaList.map((upazila) => (
                    <option key={upazila["id"]} value={upazila["name"]}>
                      {upazila["name"]}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-3xl  text-white bg-crimson ">
                <span>Blood Group :</span>
                <select
                  disabled={disabled}
                  name="bloodGroup"
                  defaultValue={currentUser.bloodGroup}
                  className="select select-primary focus:outline-none border-none text-crimson text-3xl w-full max-w-xs  disabled:text-crimson disabled:bg-white"
                >
                  <option value={"a+"}>a+</option>
                  <option value={"a-"}>a-</option>
                  <option value={"b+"}>b+</option>
                  <option value={"b-"}>b-</option>
                  <option value={"ab+"}>ab+</option>
                  <option value={"ab-"}>ab-</option>
                  <option value={"o+"}>o+</option>
                  <option value={"o-"}>o-</option>
                </select>
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return <ErrorPage></ErrorPage>
  }
};

Profile.propTypes = {};

export default Profile;
