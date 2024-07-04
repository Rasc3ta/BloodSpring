import React from "react";
import PropTypes from "prop-types";
import { useLoaderData, useLocation } from "react-router-dom";

const Blog = () => {
  const blog = useLocation().state.blogData;
  const { title, image, intro, paraSections } = blog;
  const { section1, section2, section3 } = paraSections;
  const { list1, list2, list3 } = paraSections.listSections;

  return (
    <div className="gap-x bg-crimson text-white ">
      <h1 className="text-3xl font-bold py-5 px-3">{title}</h1>
      <img src={image} className="" />
        <p className="text-lg px-3">{intro}</p>
      <div className="flex flex-col gap-4 my-5">

        {/* seciton  */}
        {section1 && (
          <div className="mb-5 px-3">
            <h2 className="text-2xl font-bold">{section1?.heading}</h2>
            <p className="text-lg">{section1?.content}</p>
          </div>
        )}

        {/* list */}
        {list1 && (
          <div className="mb-5 px-3">
            <h2 className="text-2xl font-bold">{list1?.heading}</h2>
            <p className="text-lg">{section1?.intro}</p>
            {list1?.bullets.map((bullet, index) => {
              return (
                <h3 key={index} className="text-lg">
                  <span className="font-bold">{bullet?.heading}</span>
                  <span>{bullet?.content}</span>
                </h3>
              );
            })}
          </div>
        )}

        {/* seciton  */}
        {section2 && (
          <div className="mb-5 px-3">
            <h2 className="text-2xl font-bold">{section2?.heading}</h2>
            <p className="text-lg">{section2?.content}</p>
          </div>
        )}

        {/* list */}
        {list2 && (
          <div className="mb-5 px-3">
            <h2 className="text-2xl font-bold">{list2?.heading}</h2>
            <p className="text-lg">{list2?.intro}</p>
            {list2?.bullets.map((bullet, index) => {
              return (
                <h3 key={index} className="text-lg">
                  <span className="font-bold">{bullet?.heading}</span>
                  <span>{bullet?.content}</span>
                </h3>
              );
            })}
          </div>
        )}

        {/* seciton  */}
        {section3 && (
          <div className="mb-5 px-3">
            <h2 className="text-2xl font-bold">{section3?.heading}</h2>
            <p className="text-lg">{section3?.content}</p>
          </div>
        )}

        {/* list */}
        {list3 && (
          <div className="mb-5 px-3">
            <h2 className="text-2xl font-bold">{list3?.heading}</h2>
            <p className="text-lg">{list3?.intro}</p>
            {list3?.bullets.map((bullet, index) => {
              return (
                <h3 key={index} className="text-lg">
                  <span className="font-bold">{bullet?.heading}</span>
                  <span>{bullet?.content}</span>
                </h3>
              );
            })}
          </div>
        )}

        {paraSections?.conclusion && (
          <div className="mb-5 px-3 pb-10">
            <h2 className="text-2xl font-bold">
              {paraSections?.conclusion?.heading}
            </h2>
            <p className="text-lg">{paraSections?.conclusion?.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
