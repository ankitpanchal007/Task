import React, { useCallback, useEffect, useState } from 'react'
import CustomSearchBar from '../common/CustomSearchBar';
import CustomTable from '../common/CustomTable'
import HomeLayout from '../Layout/HomeLayout'
import { ConvertObjectToArray, SortData, FilterFormArray } from '../Utils'

let columns = [{ Header: 'Name', accessor: 'name' },
{
  Header: 'Rank', Cell: ((row) =>
    <div>{Number(row.row.id) + 1}</div>)
},
{ Header: 'No Of Bananas', accessor: 'bananas' },
{ Header: 'isSearchedUser?', accessor: 'subscribed' }
];

const HomeScreen = (props) => {

  const [leaderboardData, setLeaderboardData] = useState({})
  const [searchKeyword, setSearchKeyword] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const leaderboardDataArray = ConvertObjectToArray(leaderboardData);
  const [dataStatus, setDataStatus] = useState(false);
  let DataStatus;
  const handleSearchChange = (e) => {
    setSearchKeyword(e);
  }

  let data = SortData(leaderboardDataArray);

  const handleOnSubmit = () => {
    // logic for filter by keyword
    console.log("called");

    const searchRes = FilterFormArray(leaderboardDataArray, searchKeyword)
    setFilteredData(searchRes)
    console.log(filteredData);
  }

  if (filteredData.length != 0) {
    data && data.filter((a) => {
      if (filteredData.includes(a)) {
        console.log("found");
        setDataStatus(true);
        // DataStatus=true;
      }
    }
    )

  }
  // setDataStatus(DataStatus);


  if (dataStatus == false && searchKeyword.length != 0) {
    {
      data.splice(9, 1, ...filteredData);
    }
  }

  useEffect(() => {
    const fetchLeaderboardData = () => {
      fetch(process.env.REACT_APP_API_URL)
        .then(response => response.json())
        .then(data => setLeaderboardData(data))
        .catch(() => {
          alert("Please start the server first.")
        });
    }
    fetchLeaderboardData()
  }, [])


  return (
    <HomeLayout {...props}>
      <CustomSearchBar searchText={searchKeyword} placeholder="Search here" onChange={handleSearchChange} onSubmit={handleOnSubmit} />
      <CustomTable tableColumns={columns} tableData={data} />
    </HomeLayout>
  )
}

export default HomeScreen