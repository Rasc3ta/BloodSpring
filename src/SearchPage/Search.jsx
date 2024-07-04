import PropTypes from "prop-types";
import upazilas from "../Authentication/Register/upazilas";
import districts from "../Authentication/Register/districts";
import { useEffect, useState } from "react";
import Table from "./Table";

const Search = () => {
  const [district, setDistrict] = useState(null);
  const [upazilaList, setUpazilaList] = useState([]);

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

  const [donorList, setDonorList] = useState([]);

  const getFormObject = (event) => {
    const form = event.target;

    const bloodGroup = form.bloodGroup.value;
    const district = form.district.value;
    const upazila = form.upazila.value;
    return {
      bloodGroup,
      district,
      upazila,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = getFormObject(e);
    console.log(form);
  };

  return (
    <div className=" min-h-[calc(100vh-390px)]">
      <div className=" bg-crimson">
        <h1 className="text-3xl text-white font-bold pt-6 text-center">
          Search for Donors{" "}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="max-w-[1280px] w-[90vw] mx-auto p-10 pt-4 "
        >
          <div className="flex flex-col big:flex-row big:items-center gap-3 justify-between">
            <div className="flex flex-col items-center">
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
            <div className="flex flex-col items-center">
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
            <div className="flex flex-col items-center">
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
          </div>

          <div className="flex justify-center items-center mt-2 ">
            <button className="btn button text-lg px-6 py-2 h-auto w-auto">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="my-10 bg-crimson p-5">
        <Table></Table>
      </div>
    </div>
  );
};

Search.propTypes = {};

export default Search;
