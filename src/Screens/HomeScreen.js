import React, { useCallback, useEffect, useState } from 'react'
import CustomSearchBar from '../common/CustomSearchBar';
import CustomTable from '../common/CustomTable'
import HomeLayout from '../Layout/HomeLayout'
import { ConvertObjectToArray, getSortedData, FilterFormArray } from '../Utils'

let columns = [{ Header: 'Name', accessor: 'name',    
//  Cell: cell => (
//           <span className={cell.isSearched ==="yes" ? "selected" : ""}>
//             {cell.value}
//           </span>)
},
{
  Header: 'Rank', accessor:'id' 
},
{ Header: 'No Of Bananas', accessor: 'bananas' },
{ Header: 'isSearchedUser?', accessor: d => { return d.isSearched ? 'yes' : 'no' }, }
];

const HomeScreen = (props) => {

  const [leaderboardData, setLeaderboardData] = useState({})
  const [searchKeyword, setSearchKeyword] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const leaderboardDataArray = ConvertObjectToArray(leaderboardData);

  const handleSearchChange = (e) => {
    setSearchKeyword(e);
  }

  let sortedData = getSortedData(leaderboardDataArray);

  const handleOnSubmit = () => {
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

 const tableData = filteredData.length === 0 ? sortedData.slice(0,10) : filteredData;

 
  return (
    <HomeLayout {...props}>
      <CustomSearchBar searchText={searchKeyword} placeholder="Search here" onChange={handleSearchChange} onSubmit={handleOnSubmit} />
      {filteredData && filteredData.length > 0 && 
        <CustomTable tableColumns={columns} tableData={tableData} />
      }
    </HomeLayout>
  )
}

export default HomeScreen