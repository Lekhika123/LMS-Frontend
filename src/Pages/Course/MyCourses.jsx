import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";

function MyCourses() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch purchased courses from local storage
        const purchasedCourses = JSON.parse(localStorage.getItem("purchasedCourses")) || [];
        setCourses(purchasedCourses);

        // Redirect if no courses found (optional)
        if (purchasedCourses.length === 0) {
            alert("You have not purchased any courses yet.");
            navigate("/"); // Redirect to home or another appropriate page
        }
    }, [navigate]);

    const handleCourseClick = (course) => {
        navigate("/course/description", { state: course });
    };

    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-12 px-20 flex flex-col items-center justify-center text-white">
                <h1 className="text-3xl font-bold text-yellow-500 mb-5">My Courses</h1>
                {courses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {courses.map((course, index) => (
                            <div 
                                key={index} 
                                className="bg-gray-800 p-5 rounded-lg hover:bg-gray-700 cursor-pointer transition-all ease-in-out duration-300"
                                onClick={() => handleCourseClick(course)}
                            >
                                <img 
                                    className="w-full h-40 object-cover rounded-md"
                                    alt="Course Thumbnail"
                                    src={course.thumbnail?.secure_url || "placeholder.jpg"} // Provide a placeholder if no image
                                />
                                <h2 className="text-xl font-semibold mt-3">{course.title}</h2>
                                <p className="mt-2">{course.description}</p>
                                <p className="text-yellow-500 font-bold mt-2">
                                    Total Lectures: {course.numberOfLectures || "Not specified"}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-lg">You have no purchased courses to display.</p>
                )}
            </div>
        </HomeLayout>
    );
}

export default MyCourses;
