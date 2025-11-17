"use client";
import React, { useEffect, useState } from "react";
import Container from "../shared/Container";
import SectionTitle from "../shared/Section-Title";

import { useAllCourseQuery } from "@/redux/api/courseApi";

import CourseCard from "../shared/course-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useAllCategoriesQuery } from "@/redux/api/categoryApi";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LoadingSkeleton } from "../LoadingSkeleton";
import NoDataFound from "../NoDataFound";
import AppLoading from "@/app/loading";

const data = {
  title: "Our Courses",
  description:
    "Explore career-focused, industry-relevant courses designed to equip you with real-world skills.",
  link: "/courses",
};

export default function Courses() {
  const {
    data: categories,
    isLoading: categoryLoading,
    error,
  } = useAllCategoriesQuery({});

  const [category, setCategory] = useState<string>("");

  // Only fetch courses when category exists
  const { data: courses, isLoading } = useAllCourseQuery(
    { category },
    { skip: !category }
  );

  const handleCategory = (cId: string) => {
    setCategory(cId);
  };

  // FIXED: Safe category initialization
  useEffect(() => {
    if (
      categories?.result &&
      Array.isArray(categories.result) &&
      categories.result.length > 0
    ) {
      setCategory(categories.result[0]._id);
    }
  }, [categories?.result]);

  if (categoryLoading) return <LoadingSkeleton />;

  // FIXED: If no categories at all
  if (!categories?.result || categories.result.length === 0) {
    return (
      <Container className="py-20">
        <SectionTitle data={data} />
        <NoDataFound message="No categories found" />
      </Container>
    );
  }

  return (
    <Container className="py-20">
      <SectionTitle data={data} />

      {/* CATEGORY CAROUSEL */}
      <Carousel className="w-[300px] md:w-[560px] lg:w-[900px] xl:w-full mx-auto mt-10">
        <CarouselContent>
          {error ? (
            <p> Something went wrong!</p>
          ) : (
            categories.result.map((cat: any) => (
              <CarouselItem key={cat._id} className="basis-auto">
                <div
                  className={cn(
                    "group flex items-center gap-x-3 py-2 px-4 border rounded hover:cursor-pointer",
                    cat._id === category ? "bg-primary text-white" : "bg-secondary"
                  )}
                  onClick={() => handleCategory(cat._id)}
                >
                  <Image
                    src={cat.icon}
                    width={40}
                    height={40}
                    alt={cat.name}
                    className="size-10"
                  />
                  <div>
                    <p
                      className={cn(
                        "group-hover:underline font-medium text-nowrap text-sm",
                        cat._id === category ? "text-white" : "text-gray-800"
                      )}
                    >
                      {cat.name}
                    </p>
                    <p
                      className={cn(
                        "text-xs",
                        cat._id === category ? "text-white" : "text-gray-500"
                      )}
                    >
                      {cat.courseCount} courses
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))
          )}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* COURSES SECTION */}
      <div>
        {isLoading ? (
          <AppLoading />
        ) : !courses?.result || courses.result.length === 0 ? (
          <NoDataFound message="No Course found" />
        ) : (
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {courses.result.map((course: any) => (
              <CourseCard course={course} key={course._id} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
