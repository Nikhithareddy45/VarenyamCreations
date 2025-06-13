import React from "react";
import Navbar from "@/components/user-comp/Navbar";
import Menubar from "@/components/user-comp/Menubar";
import HomeContainer from "@/components/user-comp/HomeContainer";
import Header from "@/components/ui/Header";
import CategoriesSection from "@/components/user-comp/CategoriesSection";
import ItemCard from "@/components/ui/ItemCard";
import Footer from "@/components/user-comp/Footer";
import UserItems from "@/components/user-comp/UserItems";
import { Button } from "@/components/ui/button";
function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Menubar />
        <HomeContainer />
        <Header
          header="Shop by Category"
          para="Explore our diverse collection of jewelry categories, each featuring unique designs that celebrate beauty and craftsmanship."
        />
        <CategoriesSection />
        <Header
          header="Featured Collection"
          para="Discover our handpicked selection of exquisite jewelry pieces, each crafted with precision and adorned with the finest materials."
        />
        <UserItems/>
        <Button className ="border-2 m-4 bg-neutral-50 text-red-900 border-red-900 hover:bg-neutral-50 transform hover:scale-95 pl-9 pr-9 transition duration-150 ease">View All Products</Button>
      </div>
    </>
  );
}

export default Home;
