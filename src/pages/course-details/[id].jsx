import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CourseDetailsMain from "../../components/course-details";
import SEO from "../../components/seo";
import { course_data } from "../../data";
import { Wrapper } from "../../layout";
import { BASE_API_URL } from "../../utils/base-api-url";

const DynamicCourseDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [courseData, setCourseData] = useState(null);

  const fetchJobDetail = async () => {
    const parameters =
      "populate[course_lessons][populate][0]=lessons&populate[img][populate][1]=img&populate[reviews][populate][2]=img";
    const getJobDetailUrl = `${BASE_API_URL}/api/jobs/${id}?${parameters}`;
    const jobDetailRes = await fetch(getJobDetailUrl, {
      method: "GET",
      headers: {
        Authorization: process.env.API_TOKEN,
        "Content-Type": "application/json",
      },
    });
    const data = await jobDetailRes.json();
    const result = mappingData(data);
    setCourseData(result);
  };

  const mappingData = (value) => {
    return {
      id: value?.data.id,
      duration: value?.data.attributes?.duration,
      course_outline: value?.data.attributes?.course_outline,
      rating: value?.data.attributes?.rating,
      rating_count: value?.data.attributes?.rating_count,
      course_price: value?.data.attributes?.course_price,
      expire_date: value?.data.attributes?.expire_date,
      work_hour_per_day: value?.data.attributes?.work_hour_per_day,
      is_overtime: value?.data.attributes?.is_overtime,
      overtime_salary: value?.data.attributes?.overtime_salary,
      lesson: value?.data.attributes?.lesson,
      student: value?.data.attributes?.student,
      category: value?.data.attributes?.category,
      short_desc: value?.data.attributes?.short_desc,
      instructor: value?.data.attributes?.instructor,
      instructor_title: value?.data.attributes?.instructor_title,
      instructor_desc: value?.data.attributes?.instructor_desc,
      features: value?.data.attributes?.features.map((item) => {
        return item.text;
      }),
      language: value?.data.attributes?.language,
      certificate: value?.data.attributes?.certificate,
      videoId: value?.data.attributes?.videoId,
      course_desc: value?.data.attributes?.course_desc,
      course_desc_2: value?.data.attributes?.course_desc_2,
      course_desc_3: value?.data.attributes?.course_desc_3,
      curriculum_desc: value?.data.attributes?.curriculum_desc,
      createdAt: value?.data.attributes?.createdAt,
      updatedAt: value?.data.attributes?.updatedAt,
      publishedAt: value?.data.attributes?.publishedAt,
      locale: value?.data.attributes?.locale,
      title: value?.data.attributes?.title,
      level: value?.data.attributes?.level,
      social_links: value?.data.attributes?.social_links,
      learn_list: value?.data.attributes?.learn_list.map((item) => {
        return item.text;
      }),
      img: value?.data.attributes?.img,
      instructor_img: value?.data.attributes?.instructor_img,
      reviews: value?.data.attributes?.reviews,
      course_lessons: value?.data.attributes?.course_lessons?.data,
    };
  };

  useEffect(() => {
    fetchJobDetail();
  }, []);

  return (
    <Wrapper>
      <SEO pageTitle={"Thông tin đơn hàng"} />
      <CourseDetailsMain course={courseData} />
    </Wrapper>
  );
};

export default DynamicCourseDetails;

export async function getStaticPaths() {
  const paths = course_data.map((course) => {
    return {
      params: {
        id: `${course.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  return { props: {} };
}
