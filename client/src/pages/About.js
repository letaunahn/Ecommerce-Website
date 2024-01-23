import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to <strong>"L'Art du Temps"</strong> – where time transcends
            into artistry. As a premier watch company, we stand at the
            intersection of precision craftsmanship and timeless elegance. With
            a commitment to excellence, our timepieces reflect the fusion of
            traditional horology and contemporary design. Each watch is
            meticulously crafted to embody not just a measure of moments but a
            masterpiece that captures the essence of every second. At{" "}
            <strong>"L'Art du Temps"</strong>, we believe that a watch is not
            just an accessory; it's a statement of style and a testament to the
            artistry of time. Explore our collection and immerse yourself in the
            sophistication and innovation that define the essence of{" "}
            <strong>"L'Art du Temps"</strong>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
