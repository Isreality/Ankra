"use client";

import { useState } from "react";
import TailorCard from "./TailorCard.jsx";
import { Button } from "@/components/ui/button";
import Btn from "../Btn.jsx";
import { Input } from "@/components/ui/input";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const tailors = [
    { id: 1, name: "Nike Ore", location: "Lagos", experience: 2 },
    { id: 2, name: "Abike Fashion", location: "Edo", experience: 4 },
    { id: 3, name: "Yomi Casual", location: "Ogun", experience: 6 },
    { id: 4, name: "Amina Fathia", location: "Kano", experience: 2 },
    { id: 5, name: "Amina Zainab", location: "Kaduna", experience: 4 },
    { id: 6, name: "Buju Benson", location: "Delta", experience: 6 },
    { id: 7, name: "Mary Ogechukwu", location: "Abia", experience: 8 },
    { id: 8, name: "Jide Asiwaju", location: "Osun", experience: 7 },
    { id: 9, name: "Peter Jonathan", location: "Abuja", experience: 10 },
];

const categories = ["All", "Abia", "Abuja", "Delta", "Edo", "Lagos", "Ogun", "Osun", "Kaduna", "Kano"];
const exp = ["All", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ITEMS_PER_PAGE = 6;


export default function Tailors() {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedExperience, setSelectedExperience] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTailors = tailors.filter((tailor) => {
    const categoryMatch =
      selectedLocation === "All" || tailor.location === selectedLocation;
    const experienceMatch =
      selectedExperience === "All" || tailor.experience === selectedExperience;
    const searchMatch = tailor.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch && experienceMatch;
  });

  const totalPages = Math.ceil(filteredTailors.length / ITEMS_PER_PAGE);
  const paginatedTailors = filteredTailors.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleLocationChange = (value) => {
    setSelectedLocation(value);
    setCurrentPage(1);
  };

  const handleExperienceChange = (value) => {
    setSelectedExperience(value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
         <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-4">
            <Input
            placeholder="Search tailors..."
            className="w-full md:w-1/3 border-1 border-[#f1f1f1] shadow-none"
            value={searchTerm}
            onChange={handleSearchChange}
            />

            {/* Dropdown Filters */}
            <div className="flex flex-row items-center gap-2">
                <Select value={selectedLocation} onValueChange={handleLocationChange}>
                    <SelectTrigger className="w-full md:w-full border-1 border-[#f1f1f1] shadow-none">
                        <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                            {cat}
                        </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select value={selectedExperience} onValueChange={handleExperienceChange}>
                    <SelectTrigger className="w-full md:w-full border-1 border-[#f1f1f1] shadow-none">
                        <SelectValue placeholder="Experience" />
                    </SelectTrigger>
                    <SelectContent>
                        {exp.map((ex) => (
                        <SelectItem key={ex} value={ex}>
                            {ex}
                        </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>           
        </div><br/>

        {/* Card */}                
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {paginatedTailors.map((tailor) => (
                <Card key={tailor.id} className="py-2 border-1 border-[#f1f1f1] gap-0">
                    <CardContent className="px-2">
                        <div className="bg-[#f1f1f1] w-full h-64 rounded-md"></div>
                    </CardContent>
                    <CardHeader className="px-6 py-4">
                        <CardDescription className="text-black font-medium text-sm md:text-base">{tailor.name}</CardDescription>
                        <CardTitle className="text-primary font-bold text-base md:text-xl">{tailor.location}</CardTitle>
                        {/* <CardAction>Buy</CardAction> */}
                    </CardHeader>
                    
                    <CardFooter className="flex flex-row gap-2 py-2">
                        <Btn name="View"/>
                        <Btn name="Book" className="bg-black"/>
                    </CardFooter>
                </Card>
            ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-4">
            <Button
            variant="secondary"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            >
            Previous
            </Button>

            <span className="px-4 font-medium">
            Page {currentPage} of {totalPages}
            </span>

            <Button
            variant="default"
            className="shadow-none cursor-pointer"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            >
            Next
            </Button>
        </div>
    </div>
  )
}
