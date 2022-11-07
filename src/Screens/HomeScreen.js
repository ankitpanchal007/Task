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
{ Header: 'isSearchedUser?', accessor: d => { return d.isSearched ? 'Yes' : 'No' }, }
];

const HomeScreen = (props) => {

  const [leaderboardData, setLeaderboardData] = useState({})
  const [searchKeyword, setSearchKeyword] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const leaderboardDataArray = ConvertObjectToArray(leaderboardData);

  const handleSearchChange = (e) => {
    setSearchKeyword(e);
  }

  let data = SortData(leaderboardDataArray);

  const handleOnSubmit = () => {
    // logic for filter by keyword
    const searchRes = FilterFormArray(leaderboardDataArray, searchKeyword)
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

  const tableData = filteredData.length === 0 ? data : filteredData;
  // console.log(leaderboardDataArray.map(leaderboardDataArray.map((a) => tableData.map((b) => {
  //   if (a.bananas === b.bananas) {
  //     console.log(leaderboardDataArray.indexOf(a));
  //   }
  // }
  // ))))

  // console.log(tableData.map((a)=>a.name));
  // const index = leaderboardDataArray.map(object => object.name).indexOf(...tableData);
  // console.log(index);

  return (
    <HomeLayout {...props}>
      <CustomSearchBar searchText={searchKeyword} placeholder="Search here" onChange={handleSearchChange} onSubmit={handleOnSubmit} />
      <CustomTable tableColumns={columns} tableData={tableData} />
    </HomeLayout>
  )
}

export default HomeScreen