// import { useSelector } from "react-redux";
import { useEffect,useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";

function CourseDescription() {

    const { state } = useLocation();
    const navigate = useNavigate();
    const [isSubscribed, setIsSubscribed] = useState(false);
    useEffect(() => {
        const subscriptionStatus = localStorage.getItem("isSubscribed");
        setIsSubscribed(subscriptionStatus === "true");
    }, []);
    if (!state) {
        navigate("/");  
        return null;    
    }
   
    const handleWatchLectures = () => {
        if (isSubscribed) {
            navigate("/course/displaylectures", { state: { ...state } });
        } else {
            alert("You need to subscribe to access these lectures. Please buy this course.");
        }
    };
    
    
 

   

    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-12 px-20 flex flex-col items-center justify-center text-white">
                <div className="grid grid-cols-2 gap-10 py-10 relative">
                    <div className="space-y-5">
                        <img 
                            className="w-full h-64"
                            alt="thumbnail"
                            src={state?.thumbnail?.secure_url}
                        />

                        <div className="space-y-4">
                            <div className="flex flex-col items-center justify-between text-xl">

                                <p className="font-semibold">
                                    <span className="text-yellow-500 font-bold">
                                        Total lectures : {" "}
                                    </span>
                                    {state?.numberOfLectures || "Not specified"}
                                </p>

                                <p className="font-semibold">
                                    <span className="text-yellow-500 font-bold">
                                        Instructor : {" "}
                                    </span>
                                    {state?.createdBy || "Lekhika Sahu"}
                                </p>

                            </div>

                            {isSubscribed && (
                            <button 
                                onClick={handleWatchLectures}
                                className="bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300"
                            >
                                Watch lectures
                            </button>
                            )}
                                
                          
                                <button 
                                    onClick={() => navigate("/checkout")} 
                                    className="bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300"
                                >
                                    Subscribe
                                </button>
                            
                               
                        </div>
                       

                    </div>

                    <div className="space-y-2 text-xl">
                        <h1 className="text-3xl font-bold text-yellow-500 mb-5 text-center">
                            {state?.title}
                        </h1>

                        <p className="text-yellow-500">Course description: </p>
                        <p>{state?.description}</p>
                        <div className="mt-5">
                            <p className="text-yellow-500 font-bold mb-2">Key Topics Covered:</p>
                            <div className="h-64 overflow-y-auto border border-gray-400 p-3 rounded-md">
                                <ul className="list-disc pl-5">
                                    {state?.keyTopics?.map((topic, index) => (
                                        <li key={index}>{topic}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default CourseDescription;