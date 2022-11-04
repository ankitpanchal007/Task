import React, { useEffect, useState } from 'react'
import CustomSearchBar from '../common/CustomSearchBar';
import CustomTable from '../common/CustomTable'
import HomeLayout from '../Layout/HomeLayout'
import { ConvertObjectToArray, SortData } from '../Utils'

let columns = [{ Header: 'Name', accessor: 'name' },
{ Header: 'Rank', accessor: 'stars' },
{ Header: 'No Of Bananas', accessor: 'bananas' },
{ Header: 'isSearchedUser?', accessor: 'subscribed' }
];


const HomeScreen = (props) => {

  const [leaderboardData, setLeaderboardData] = useState({})
  const [searchKeyword, setSearchKeyword] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const leaderboardDataArray = ConvertObjectToArray(leaderboardData);
  const handleSearchChange = (e) => {
    console.log(e);

    // setSearchKeyword('') //
  }

  const handleOnSubmit = () => {
    // logic for filter by keyword
    const searchRes = filterFormArray(leaderboardDataArray, searchKeyword)
    setFilteredData(searchRes)
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
  // const data=SortData(Object.values(leaderboardData))
  // console.log(data);
  

  return (
    <HomeLayout {...props}>
      <CustomSearchBar searchText={searchKeyword} placeholder="Search here" onChange={handleSearchChange} />
      <CustomTable tableColumns={columns} tableData={Object.values(leaderboardData)} />
      <SortData  data={Object.values(leaderboardData)} />
    </HomeLayout>
  )
}

export default HomeScreen