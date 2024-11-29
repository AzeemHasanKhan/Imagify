import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { delay, motion } from "motion/react";
const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className=" flex flex-col items-center justify-center my-20 py-12"
    >
      <h2 className=" text-3xl font-medium sm:text-4xl mb-4">
        Customer Testimonials
      </h2>
      <p className=" text-gray-600 mb-12">What our user says</p>
      <div className=" flex flex-wrap gap-6">
        {testimonialsData.map((testimonial, index) => (
          <div
            className=" bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all"
            key={index}
          >
            <div className=" flex flex-col items-center">
              <img
                src={testimonial.image}
                className=" w-14 rounded-full"
                alt=""
              />
              <h2 className=" text-xl font-semibold mt-3">
                {testimonial.name}
              </h2>
              <p className=" text-gray-500 mb-4">{testimonial.role}</p>
              <div className=" flex mb-4">
                {Array(testimonial.stars)
                  .fill()
                  .map((item, index) => (
                    <img key={index} src={assets.rating_star} />
                  ))}
              </div>
              <p className=" text-center text-sm text-gray-600">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
