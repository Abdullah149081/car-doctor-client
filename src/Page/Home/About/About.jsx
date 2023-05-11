/* eslint-disable react/no-unescaped-entities */
import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className="my-20 lg:my-32">
      <div className="flex flex-col lg:flex-row lg:gap-x-14">
        <div className="lg:w-1/2 relative">
          <img src={person} className=" rounded-lg 2xl:w-[630px] lg:w-[460px] lg:h-[473px] object-cover" alt="person" />
          <img src={parts} alt={parts} className="w-[327px] h-[332px] absolute lg:right-0  2xl:right-[5%] -bottom-[15%] border-8 border-white rounded-xl object-cover hidden lg:block shadow-lg" />
        </div>
        <div className="lg:w-1/2 space-y-6 mt-6 lg:mt-0">
          <h2 className="text-[#FF3811] font-bold">About Us</h2>
          <h1 className="text-secondary text-3xl lg:text-5xl font-bold tracking-wide lg:leading-[4rem]">We are qualified & of experience in this field</h1>
          <p className="py-4 text-[#737373] ">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even
            slightly believable.
          </p>
          <p className="py-4 text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
          <button type="button" className="btn btn-primary">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
