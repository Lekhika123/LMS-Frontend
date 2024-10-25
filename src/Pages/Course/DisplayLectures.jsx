import { useLocation, useNavigate } from "react-router-dom";

import SampleCourses from "../../Constants/SampleCourses";
import HomeLayout from '../../Layouts/HomeLayout';

function DisplayLectures() {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        navigate("/"); // Redirect to home if state is missing
        return null;
    }
    const course = SampleCourses.find(course => course._id === state._id);

    // If the course is not found, redirect to home
    if (!course) {
        navigate("/"); 
        return null;
    }

    const lectures = course.lectures || []; 

    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-12 px-20 flex flex-col items-center justify-center text-white">
                <h1 className="text-3xl font-bold text-yellow-500 mb-5 text-center">
                    Lectures for: {state.title}
                </h1>

                <div className="flex w-full space-x-10">
                    {/* Left Side: Course Thumbnail and Details */}
                    <div className="flex-none w-1/2">
                        <img 
                            className="w-full h-auto rounded-md"
                            src={course.thumbnail?.secure_url || "placeholder.jpg"} // Provide a placeholder if no image
                            alt={state.title}
                        />
                        <div className="mt-4 text-center">
                            <p className="text-yellow-500 text-lg font-semibold">Instructor: {course.createdBy || "Lekhika Sahu"}</p>
                            <p className="text-yellow-500 text-lg font-semibold">Total Lectures: {course.numberOfLectures || "Not specified"}</p>
                        </div>
                    </div>

                    {/* Right Side: Lecture Details in a Scrolling Div */}
                    <div className="flex-1 space-y-4">
                        <div className="h-96 overflow-y-auto border border-gray-400 rounded-md p-4">
                            {lectures.map((lecture) => (
                                <div key={lecture.id} className="flex justify-between items-center p-4 bg-gray-800 rounded-md shadow-md mb-2">
                                    <div>
                                        <h2 className="text-xl font-semibold">{lecture.title}</h2>
                                        <p className="text-gray-300">Duration: {lecture.duration}</p>
                                    </div>
                                    <button 
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => alert(`Playing lecture: ${lecture.title}`)} // Replace with actual lecture player
                                    >
                                        Watch Lecture
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default DisplayLectures;




// import { useLocation, useNavigate } from "react-router-dom";

// import SampleCourses from "../../Constants/SampleCourses";
// import HomeLayout from '../../Layouts/HomeLayout';

// function DisplayLectures() {
//     const { state } = useLocation();
//     const navigate = useNavigate();

//     if (!state) {
//         navigate("/"); // Redirect to home if state is missing
//         return null;
//     }
//     const course = SampleCourses.find(course => course._id === state._id);

//     // If the course is not found, redirect to home
//     if (!course) {
//         navigate("/"); 
//         return null;
//     }

//     const lectures = course.lectures || []; 

//     return (
//         <HomeLayout>
//             <div className="min-h-[90vh] pt-12 px-20 flex flex-col items-center justify-center text-white">
//                 <h1 className="text-3xl font-bold text-yellow-500 mb-5 text-center">
//                     Lectures for: {state.title}
//                 </h1>

//                 <div className="flex w-full space-x-10">
//                     {/* Left Side: Course Thumbnail */}
//                     <div className="flex-none w-1/2">
//                         <img 
//                             className="w-full h-auto rounded-md"
//                             src={course.thumbnail?.secure_url || "placeholder.jpg"} // Provide a placeholder if no image
//                             alt={state.title}
//                         />
//                     </div>

//                     {/* Right Side: Lecture Details */}
//                     <div className="flex-1 space-y-4">
//                         {lectures.map((lecture) => (
//                             <div key={lecture.id} className="p-4 bg-gray-800 rounded-md shadow-md">
//                                 <h2 className="text-xl font-semibold">{lecture.title}</h2>
//                                 <p className="text-gray-300">Duration: {lecture.duration}</p>
//                                 <button 
//                                     className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-2"
//                                     onClick={() => alert(`Playing lecture: ${lecture.title}`)} // Replace with actual lecture player
//                                 >
//                                     Watch Lecture
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </HomeLayout>
//     );
// }

// export default DisplayLectures;
