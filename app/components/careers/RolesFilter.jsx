//? To be used on the Careers page.
//? Contains the filter input fields and results
"use client";
import { useState } from "react";

// SHADCN IMPORTS
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// ASSET IMPORTS
import search from "@/public/images/careers/search.svg";

export default function RolesFilter() {
  const originalRolesData = [
    {
      department: "Marketing",
      roles: [
        {
          title: "Web Designer",
          location: "Remote",
          url: "https://tabby.pinpointhq.com/en/jobs/159507",
        },
        // {
        //   title: "Merchandising Specialist",
        //   location: "Egypt",
        //   url: "https://tabby.pinpointhq.com/en/jobs/159538",
        // },
      ],
    },
    {
      department: "Product",
      roles: [
        {
          title: "Product Lead",
          location: "UAE",
          url: "https://tabby.pinpointhq.com/en/jobs/170838",
        },
      ],
    },
    {
      department: "Analytics",
      roles: [
        {
          title: "Product Analyst (Customer Happiness Stream)",
          location: "Remote",
          url: "https://tabby.pinpointhq.com/en/jobs/159736",
        },
      ],
    },
    {
      department: "B2B - Analytics",
      roles: [
        {
          title: "Product Analyst (B2B Stream)",
          location: "Remote",
          url: "https://tabby.pinpointhq.com/en/jobs/159365",
        },
      ],
    },
    {
      department: "Business Development",
      roles: [
        {
          title: "Head of Account Management",
          location: "UAE",
          url: "https://tabby.pinpointhq.com/en/jobs/159502",
        },
      ],
    },
    {
      department: "Cards",
      roles: [
        {
          title: "Card Portfolio Executive",
          location: "KSA",
          url: "https://tabby.pinpointhq.com/en/jobs/159530",
        },
      ],
    },
    {
      department: "Compliance",
      roles: [
        {
          title: "Compliance Manager",
          location: "UAE",
          url: "https://tabby.pinpointhq.com/en/jobs/172069",
        },
      ],
    },
    {
      department: "Customer Experience",
      roles: [
        {
          title: "Operations Manager - Contact Center",
          location: "Egypt",
          url: "https://tabby.pinpointhq.com/en/jobs/159537",
        },
        // {
        //   title: "Customer Service Representative",
        //   location: "Egypt",
        //   url: "https://tabby.pinpointhq.com/en/jobs/159539",
        // },
        // {
        //   title: "Real-Time Shift Coordinator",
        //   location: "Egypt",
        //   url: "https://tabby.pinpointhq.com/en/jobs/161271",
        // },
        // {
        //   title: "Partner Support Specialist",
        //   location: "Egypt",
        //   url: "https://tabby.pinpointhq.com/en/jobs/166864",
        // },
      ],
    },
  ];

  const [result, setResult] = useState(originalRolesData);
  const [filterSettings, setFilterSettings] = useState({
    filterKeyword: "",
    filterDepartment: "",
    filterLocation: "",
  });

  //? Function goes through all roles, gets all locations, removes duplicates and returns locations array
  function removeDuplicates(array) {
    const locationContainer = [];
    // ADD values from 'rolesData' array using loop
    array.forEach((each) => {
      each.roles.forEach((role) => locationContainer.push(role.location));
    });
    //? Set removes all duplicate values in 'locationContainer' and then convert back to Array and return
    return ["All offices", ...Array.from(new Set(locationContainer))];
  }

  //! Below array is ONLY used to filter through in the 'findRole'
  const newRolesData = [
    // MARKETING
    {
      title: "Web Designer",
      location: "Remote",
      url: "https://tabby.pinpointhq.com/en/jobs/159507",
      department: "Marketing",
    },
    // {
    //   title: "Merchandising Specialist",
    //   location: "Egypt",
    //   url: "https://tabby.pinpointhq.com/en/jobs/159538",
    //   department: "Marketing",
    // },
    // PRODUCT
    {
      title: "Product Lead",
      location: "UAE",
      url: "https://tabby.pinpointhq.com/en/jobs/170838",
      department: "Product",
    },
    // ANALYTICS
    {
      title: "Product Analyst (Customer Happiness Stream)",
      location: "Remote",
      url: "https://tabby.pinpointhq.com/en/jobs/159736",
      department: "Analytics",
    },
    // B2B - Analytics
    {
      title: "Product Analyst (B2B Stream)",
      location: "Remote",
      url: "https://tabby.pinpointhq.com/en/jobs/159365",
      department: "B2B - Analytics",
    },
    // BUSINESS DEVELOPMENT
    {
      title: "Head of Account Management",
      location: "UAE",
      url: "https://tabby.pinpointhq.com/en/jobs/159502",
      department: "Business Development",
    },
    // CARDS
    {
      title: "Card Portfolio Executive",
      location: "KSA",
      url: "https://tabby.pinpointhq.com/en/jobs/159530",
      department: "Cards",
    },
    // COMPLIANCE
    {
      title: "Compliance Manager",
      location: "UAE",
      url: "https://tabby.pinpointhq.com/en/jobs/172069",
      department: "Compliance",
    },
    // CUSTOMER EXPERIENCE
    {
      title: "Operations Manager - Contact Center",
      location: "Egypt",
      url: "https://tabby.pinpointhq.com/en/jobs/159537",
      department: "Customer Experience",
    },
    // {
    //   title: "Customer Service Representative",
    //   location: "Egypt",
    //   url: "https://tabby.pinpointhq.com/en/jobs/159539",
    //   department: "Customer Experience",
    // },
    // {
    //   title: "Real-Time Shift Coordinator",
    //   location: "Egypt",
    //   url: "https://tabby.pinpointhq.com/en/jobs/161271",
    //   department: "Customer Experience",
    // },
    // {
    //   title: "Partner Support Specialist",
    //   location: "Egypt",
    //   url: "https://tabby.pinpointhq.com/en/jobs/166864",
    //   department: "Customer Experience",
    // },
  ];
  //? FILTER that returns results as per typed 'role' and chosen 'location' and 'department'
  function findRole(keyword, department, location) {
    setFilterSettings((prevState) => {
      return {
        filterKeyword: keyword,
        filterDepartment: department,
        filterLocation: location,
      };
    });

    const newResult = newRolesData
      // FILTER by 'keyword' or role title like 'web designer'

      .filter((role) => {
        if (keyword === "") return role;
        if (keyword)
          return role.title.toLowerCase().includes(keyword.toLowerCase());
      })
      // FILTER by department like "MARKETING"
      .filter((role) => {
        if (department === "" || department.includes("All departments"))
          return role;
        if (department) return role.department === department;
      })
      // FILTER by location like "UAE" or "REMOTE"
      .filter((role) => {
        if (location === "" || location.includes("All offices")) return role;
        if (location) return role.location === location;
      })
      .map((k, v) => ({ department: k.department, roles: [k] }));
    setResult(newResult);
  }

  return (
    <div>
      {/* FILTERS CONTAINER */}
      <div className='roles_filter grid grid-cols-1 md:grid-cols-3 gap-7'>
        <Input
          type='text'
          placeholder='Search'
          style={{
            border: "none",
            borderRadius: "0",
            borderBottom: "1px solid #000000de",
          }}
          className='block'
          onChange={(e) =>
            findRole(
              e.target.value,
              filterSettings.filterDepartment,
              filterSettings.filterLocation
            )
          }
        />
        {/* SELECT DROPDOWN: DEPARTMENTS */}
        <Select
          className='block md:w-[220px]'
          onValueChange={(val) =>
            findRole(
              filterSettings.filterKeyword,
              val,
              filterSettings.filterLocation
            )
          }
        >
          <SelectTrigger>
            <SelectValue placeholder='Departments' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={`All departments`}>All departments</SelectItem>
            {originalRolesData.map((each, index) => (
              <SelectItem key={index} value={`${each.department}`}>
                {each.department}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {/* SELECT DROPDOWN: LOCATIONS */}
        <Select
          className='block md:w-[220px]'
          onValueChange={(val) =>
            findRole(
              filterSettings.filterKeyword,
              filterSettings.filterDepartment,
              val
            )
          }
        >
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Location' />
          </SelectTrigger>
          <SelectContent>
            {removeDuplicates(originalRolesData).map((each, index) => (
              <SelectItem key={index} value={`${each}`}>
                {each}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* RESULTS CONTAINER */}
      <div className='result_container mt-[88px]'>
        {result.map(
          (each, index) =>
            each.roles.length >= 1 && (
              <div key={index} className='mb-24'>
                <h3 className='mb-2 text-4xl font-radialb'>
                  {each.department}
                </h3>
                {each.roles.map((role, index) => (
                  <a
                    href={role.url}
                    key={index}
                    className='block lg:max-w-[500px] pt-6 pb-8'
                    style={{ borderBottom: "1px solid #D6D6DE" }}
                  >
                    <h4 className='text-2xl'>{role.title}</h4>
                    <p className='mt-2 text-lg'>{role.location}</p>
                  </a>
                ))}
              </div>
            )
        )}
      </div>
    </div>
  );
}
