"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Btn from "../Btn.jsx";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Label } from "@/components/ui/label"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter} from "@/components/ui/dialog"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious} from "@/components/ui/pagination"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from "@/components/ui/sheet"
import { Icon } from '@iconify/react';
import { Star, StarOff } from "lucide-react";


const tailors = [
  { id: 1, name: "Nike Ore", location: "Lagos", experience: 2, image: "/images/nike.jpg", rating: 4 },
  { id: 2, name: "Abike Fashion", location: "Edo", experience: 4, image: "/images/abike.jpg", rating: 3 },
  { id: 3, name: "Yomi Casual", location: "Ogun", experience: 6, image: "/images/yomi.jpg", rating: 5 },
  { id: 4, name: "Amina Fathia", location: "Kano", experience: 2, image: "/images/fathia.jpg", rating: 4 },
  { id: 5, name: "Amina Zainab", location: "Kaduna", experience: 4, image: "/images/zainab.jpg", rating: 2 },
  { id: 6, name: "Buju Benson", location: "Delta", experience: 6, image: "/images/buju.jpg", rating: 5 },
  { id: 7, name: "Mary Ogechukwu", location: "Abia", experience: 8, image: "/images/mary.jpg", rating: 4 },
  { id: 8, name: "Jide Asiwaju", location: "Osun", experience: 7, image: "/images/jide.jpg", rating: 3 },
  { id: 9, name: "Peter Jonathan", location: "Abuja", experience: 10, image: "/images/peter.jpg", rating: 5 },
];


const categories = ["Abia", "Abuja", "Delta", "Edo", "Lagos", "Ogun", "Osun", "Kaduna", "Kano"];
const exp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ratings = [1, 2, 3, 4, 5];
const ITEMS_PER_PAGE = 6;

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      i <= rating ? (
        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
      ) : (
        <Star key={i} className="w-5 h-5 text-muted-foreground" />
      )
    );
  }
  return <div className="flex items-center gap-1">{stars}</div>;
};


export default function Tailors() {
  const [selectedLocation, setSelectedLocation] = useState();
  const [selectedExperience, setSelectedExperience] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [openSheet, setOpenSheet] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRating, setSelectedRating] = useState();


  const filteredTailors = tailors.filter((tailor) => {
    const locationMatch = !selectedLocation || tailor.location === selectedLocation;
    const experienceMatch = !selectedExperience || tailor.experience === Number(selectedExperience);
    const ratingMatch = !selectedRating || tailor.rating === Number(selectedRating);
    const searchMatch = tailor.name.toLowerCase().includes(searchTerm.toLowerCase());
  
    return locationMatch && experienceMatch && ratingMatch && searchMatch;
  });
  

  const totalPages = Math.ceil(filteredTailors.length / ITEMS_PER_PAGE);
  const paginatedTailors = filteredTailors.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const clearFilters = () => {
    setSelectedLocation("");
    setSelectedExperience("");
    setSelectedRating("");
    // setSearchTerm("");
    setCurrentPage(1);
  };

  const filtersAreActive = selectedLocation || selectedExperience || selectedRating;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
         <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-4">
            
            {/* Search Filter */}
            <Input
            placeholder="Search tailors..."
            className="w-full md:w-1/3 border-1 border-[#f1f1f1] shadow-none py-4"
            value={searchTerm}
            onChange={handleSearchChange}
            />

            {/* Dropdown Filters */}
            <div className="flex flex-row items-center gap-2">
                {/* Location Filter */}
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
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

                 {/* Experience Filter */}       
                <Select value={selectedExperience} onValueChange={setSelectedExperience}>
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

                {/* Rating Filter */}        
                <Select value={selectedRating} onValueChange={setSelectedRating}>
                  <SelectTrigger className="w-full md:w-full border-1 border-[#f1f1f1] shadow-none">
                    <SelectValue placeholder="Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    {ratings.map((r) => (
                      <SelectItem key={r} value={r}>
                        {r === "All" ? "All" : `${r} star${r > 1 ? "s" : ""}`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {filtersAreActive && (
                  <Button variant="outline" onClick={clearFilters} className="bg-red-600 text-white">
                    Clear
                  </Button>
                )}
            </div>           
        </div><br/>

        {/* Card */}                
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {paginatedTailors.map((tailor) => (
                <Card key={tailor.id} className="py-2 border-1 border-[#f1f1f1] gap-0">
                    <CardContent className="px-2">
                        {/* <div className="bg-[#f1f1f1] w-full h-64 rounded-md"></div> */}
                        <Image
                          src={tailor.image}
                          alt={tailor.name}
                          width={800}
                          height={800}
                          className="w-full h-100 object-cover rounded-md mb-2"
                        />
                    </CardContent>
                    <CardHeader className="px-6 py-4">
                        <CardDescription className="text-black font-medium text-sm md:text-lg">{tailor.name}</CardDescription>
                        <div className="flex flex-row items-center">
                          <Icon icon="carbon:location" width="30" height="30" className="text-primary"/>
                          <CardTitle className="text-primary font-bold text-base md:text-xl">{tailor.location}</CardTitle>
                        </div>
                        {/* <CardAction>Buy</CardAction> */}
                    </CardHeader>
                    
                    <CardFooter className="flex flex-row gap-2 py-2">
                        {/* View Details Dialog */}
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="primary" className="bg-black hover:bg-black lg:w-32 py-6 px-20 rounded-md border-fa  cursor-pointer text-white text-xs md:text-base font-medium">View</Button>
                          </DialogTrigger>

                          <DialogContent className="sm:max-w-[900px]">
                            {/* <DialogHeader>
                              <DialogTitle className="text-primary text-2xl font-black">{tailor.name}</DialogTitle>
                              <DialogDescription>
                                A brief overview of the tailor’s profile.
                              </DialogDescription>
                            </DialogHeader> */}

                            <div className="flex flex-row gap-5 space-y-4 items-center">
                              {/* Image */}
                              <Image
                                src={tailor.image}
                                alt={tailor.name}
                                width={500}
                                height={400}
                                className="rounded-lg w-full h-100 object-cover"
                              />

                              {/* Dialog Details */}
                              <div className="space-y-3 mt-2">
                                <DialogTitle className="text-primary text-4xl font-black">{tailor.name}</DialogTitle>
                                <p><span className="font-semibold">Location:</span> {tailor.location}</p>
                                <p><span className="font-semibold">Experience:</span> {tailor.experience} {tailor.experience === 1 ? "year" : "years"}</p>
                                
                                {/* ⭐ Rating */}
                                <div>
                                  <p className="font-semibold">Rating:</p>
                                  {renderStars(tailor.rating)}
                                </div>

                                <p className="text-black text-sm">
                                  This tailor is known for timely delivery, creativity, and customer satisfaction. Book now to get started on your next outfit!
                                </p>
                                <Button variant="primary" className="bg-primary hover:bg-black lg:w-64 py-6 px-20 rounded-md border-fa cursor-pointer text-white text-xs md:text-base font-medium">Book Appointment</Button>
                              </div>
                            </div>

                            {/* <DialogFooter>
                              <Button variant="primary">Book</Button>
                            </DialogFooter> */}
                          </DialogContent>
                        </Dialog>



                        {/* Book Dialog */}
                        <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="outline" className="bg-primary hover:bg-black lg:w-32 py-6 px-20 rounded-md border-fa  cursor-pointer text-white hover:text-white text-xs md:text-base font-medium">Book</Button>
                          </SheetTrigger>

                          <SheetContent>
                            <SheetHeader>
                              <SheetTitle className="text-primary text-2xl font-black">Book Appointment</SheetTitle>
                              <SheetDescription>
                                Make changes to your profile here. Click save when you&apos;re done.
                              </SheetDescription>
                            </SheetHeader>

                            <div className="grid flex-1 auto-rows-min gap-6 px-4">
                              <div className="grid gap-3">
                                <Label htmlFor="sheet-demo-name">Date</Label>
                                <Input id="sheet-demo-name" />
                              </div>

                              <div className="grid gap-3">
                                <Label htmlFor="sheet-demo-username">Location</Label>
                                <Input id="sheet-demo-username" />
                              </div>
                            </div>

                            <SheetFooter>
                              <Button type="submit">Book</Button>
                              {/* <SheetClose asChild>
                                <Button variant="outline">Close</Button>
                              </SheetClose> */}
                            </SheetFooter>
                          </SheetContent>
                        </Sheet>
                    </CardFooter>
                </Card>
            ))}
        </div>
        
        {/* Pagination */}
        {/* <div className="flex justify-center items-center gap-2 mt-4">
            <Button
            variant="secondary"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            >
            < Icon icon="cuida:caret-left-outline" width="60" height="60" className="font-medium text-2xl" />
            </Button>

            <span className="px-4 font-medium">
             {currentPage} of {totalPages}
            </span>

            <Button
            variant="default"
            className="shadow-none cursor-pointer"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            >
              <Icon icon="cuida:caret-right-outline" width="60" height="60" className="font-medium text-2xl" />
            </Button>
        </div> */}

        <div className="flex justify-center items-center gap-2 mt-4">
          <Pagination>
            <PaginationContent className="cursor-pointer gap-2">
              <PaginationItem>
                <PaginationPrevious onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1} className="cursor-pointer"/>
              </PaginationItem>

              <PaginationItem>
                <PaginationLink isActive className="bg-primary text-white text-base shadow-none">{currentPage}</PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <div className="text-base">of</div>
              </PaginationItem>
              {/* <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem> */}

              <PaginationItem>
                <PaginationLink className="text-base">{totalPages}</PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationNext onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="cursor-pointer" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
    </div>
  )
}
