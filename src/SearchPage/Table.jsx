import React from "react";
import PropTypes from "prop-types";

const Table = (props) => {
  return (
    <div className="overflow-x-auto max-w-[1280px] w-[90vw] mx-auto bg-crimson ">
      <table className="table text-white border-[4px] ">
        {/* head */}
        <thead className="text-white ">
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>Zemlak, Daniel and Leannon</td>

            <th>
              <button className="btn button btn-sm">details</button>
            </th>
          </tr>
          {/* row 2 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Brice Swyre</div>
                  <div className="text-sm opacity-50">China</div>
                </div>
              </div>
            </td>
            <td>Carroll Group</td>

            <th>
              <button className="btn button btn-sm">details</button>
            </th>
          </tr>
          {/* row 3 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Marjy Ferencz</div>
                  <div className="text-sm opacity-50">Russia</div>
                </div>
              </div>
            </td>
            <td>Rowe-Schoen</td>

            <th>
              <button className="btn button btn-sm">details</button>
            </th>
          </tr>
          {/* row 4 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Yancy Tear</div>
                  <div className="text-sm opacity-50">Brazil</div>
                </div>
              </div>
            </td>
            <td>Wyman-Ledner</td>

            <th>
              <button className="btn button btn-sm">details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {};

export default Table;
