"use client";

import Image from "next/image";

import data from "../app/mocks/mock-data.json";
import { useMemo, useState } from "react";
import { Pagination } from "./components/Pagination";

let pageSize = 10;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 mt-16 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
        <table>
          <thead>
            <tr>
              <th className="pb-2 pt-2">ID</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((item) => {
              return (
                <tr>
                  <td className="pb-2 pt-2">{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <footer className="flex items-center justify-center mt-10">
          <Pagination
            classname="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </footer>
      </div>
    </main>
  );
}
