import PropTypes from "prop-types";
import useGetRequests from "../Shared/CustomHooks/useGetRequests";
import { useEffect } from "react";

const MyDonationRequests = () => {

    const {data:requestsData, isPending, refetch} = useGetRequests();


    
    
    
    if (!isPending) {
        return (
          <div className="bg-crimson min-h-screen ">
            {/* {console.log(date)}
       {console.log(time)} */}

            <h1 className="text-3xl text-white w-full text-center p-5 ">
              My Donation Requests
            </h1>
            <div className="bg-crimson text-white">
              <div className="overflow-x-auto ">
                <table className="table table-xs ">
                  <thead>
                    <tr>
                      <th></th>
                    </tr>
                    <tr className="text-white">
                      <th>Recipient Name</th>
                      <th>Recipient Location</th>
                      <th>Donation Date</th>
                      <th>Donation Time</th>
                      <th>Donation Status</th>
                      <th>Donor Information</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requestsData.map((req) => {
                      return (
                        <tr key={req._id} className="">
                          <td className="text-sm">{req.recipientName}</td>
                          <td className="text-sm">
                            {req.district}, {req.upazila}
                          </td>
                          <td className="text-sm">{req.date}</td>
                          <td className="text-sm">{req.time}</td>
                          <td className="text-sm">{req.status}</td>
                          <td className="text-sm">
                            <ul>
                              <li>{req.name}</li>
                              <li>{req.email}</li>
                            </ul>
                          </td>
                          <td className="flex flex-col p-0 ">
                            <button className="btn button min-h-8  h-auto">
                              View
                            </button>
                            <button className="btn button min-h-8  h-auto">
                              Edit
                            </button>
                            <button className="btn button min-h-8  h-auto">
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr></tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        );
    }
    
  
};

MyDonationRequests.propTypes = {};

export default MyDonationRequests;
