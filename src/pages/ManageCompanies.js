import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

import Pagination from "../components/Pagination";
import CompaniesList from "../components/CompaniesList";

let PageSize = 5;
function ManageCompanies() {
  const [companies, setCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return companies.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, companies]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/auth/listCompanyProfile`) // get all users
      .then((res) => {
        // set users to response data

        setCompanies(res.data.companyProfileDtos);
      });
  }, []);
  return (
    <div className="flex-1">
      <CompaniesList companies={currentTableData} />
      <div className="flex justify-center ">
        <Pagination
          currentPage={currentPage}
          totalCount={companies.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default ManageCompanies;
