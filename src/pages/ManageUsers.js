import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

import UsersList from "../components/UsersList";
import Pagination from "../components/Pagination";

let PageSize = 5;
function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, users]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/auth/listUsers`) // get all users
      .then((res) => {
        // set users to response data

        setUsers(res.data.usersDtos);
      });
  }, []);
  return (
    <div className="flex-1">
      <UsersList users={currentTableData} />
      <div className="flex justify-center ">
        <Pagination
          currentPage={currentPage}
          totalCount={users.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default ManageUsers;
