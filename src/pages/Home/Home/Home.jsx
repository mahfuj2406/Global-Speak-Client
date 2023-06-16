import Banner from "../Banner/Banner";
import FreeClass from "../FreeClass/FreeClass";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";


const Home = () => {
    return (
        <div className="container mx-auto mt-10">
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <FreeClass></FreeClass>
            
        </div>
    );
};

export default Home;