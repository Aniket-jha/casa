import Banner from "./Components/Banner";
import Navbar, { NavbarTwo } from "./Components/Navbar";
import Featured from "./Components/Featured"
import Rooms from "./Components/Rooms"
import WhatSection from "./Components/WhatSection";
import Location from "./Components/Location";
import ImageSection from "./Components/ImageSection";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Details from "./Components/Details";
import BottomNavConstant from "./Components/BottomFixed";
import Event from "./Components/Event";
function App() {
  return (
    <div className="App">
        <NavbarTwo />
        <div className="pt-[80px]" >
        <Banner />
        <BottomNavConstant />
        <Details />
        <Featured />
        <Rooms />
        <WhatSection />
        {/* <ImageSection /> */}
        <Location />
        <Event/>
        <Testimonial />
        <Footer />
        </div>
    </div>
  );
}

export default App;
