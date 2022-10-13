import CoursesBox from "./MainComponents/CoursesBox";

import StatsMain from "./MainComponents/StatsMain";

import StatisticsMain from "./MainComponents/StatisticsComponents/StatisticsMain";

import BenefitsMain from "./MainComponents/BenefitsComponents/BenefitsMain";

import BlogMain from "./MainComponents/BlogComponents/BlogMain";

const Main = () => {
  return (
    <>
      <main>
        <StatsMain />
        <BenefitsMain />
        <section className="coursesBox">
          <h1>Browse Our Online Courses</h1>
          <CoursesBox />
        </section>
        <StatisticsMain />

        <BlogMain />
      </main>
    </>
  );
};

export default Main;
