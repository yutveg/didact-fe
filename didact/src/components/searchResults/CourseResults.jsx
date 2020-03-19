import React from "react";
import { useSelector } from "react-redux";
import { TitleH2 } from "./SearchGeneralStyles";
import CourseResultCard from "./CourseResultCard";
const CourseResults = props => {
  const courses = useSelector(state => state.coursesReducer.courses);
  const resultCount = courses.length;
  return (
    <div>
      <TitleH2>
        SEARCH RESULTS
        {resultCount === 1 ? (
          <span>{resultCount} RESULT FOUND</span>
        ) : (
          <span>{resultCount} RESULTS FOUND</span>
        )}
      </TitleH2>
      {courses.map(course => (
        <CourseResultCard course={course} />
      ))}
    </div>
  );
};

export default CourseResults;
