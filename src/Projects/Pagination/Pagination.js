import React, { useEffect, useState } from 'react'
import "./Pagination.css"
import SingleProfile from './SingleProfile';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const Pagination = () => {

    const [loading, setLoading] = useState(true)
    const [profileData, setProfileData] = useState([])

    // pagination
    const [currPage, setCurrPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)


    // const [pageNumLimit, setPageNumLimit] = useState(5)
    // const [maxPageNumLimit, setMaxPageNumLimit] = useState(5)
    // const [minPageNumLimit, setMinPageNumLimit] = useState(0)

    const handleClick = (e) => {
        setCurrPage(Number(e.target.id))
    }

    const pages = [];

    for (let i = 1; i <= Math.ceil(profileData.length / itemsPerPage); i++) {
        // console.log(i)
        pages.push(i)
    }

    const indexOfLastItem = currPage * itemsPerPage;   // 30 -> 3('rd page) * 10(items per page)
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = profileData.slice(indexOfFirstItem, indexOfLastItem)
    console.log(currentItems)
    // small component to render page numbers
    const renderPageNumbers = pages.map(num => {
        // if (num < maxPageNumLimit + 1 && num > minPageNumLimit) {
            return (
                <li key={num} id={num} onClick={handleClick} className={currPage == num ? "active" : null}>
                    {num}
                </li>
            )
        // }
        // else return null;
    })

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data)
        setProfileData(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='pagination'>
            {loading ?
                (
                    <div className="pagination_loading">

                    </div>
                )
                :
                (
                    <>
                        <h2 className="pagination_title">Pagination</h2>

                        <h5>Current Page: <span>{currPage}</span> </h5>
                        <div className="pagination_container">
                            {!loading && currentItems.map(pData => <SingleProfile profileData={pData} />)}
                        </div>
                    </>
                )
            }

            <ul className="pageNumbers">
                <button onClick={() =>
                    setCurrPage(prevPage => {
                        if (prevPage > 1) {
                            return prevPage - 1
                        } else return Math.ceil(profileData.length / itemsPerPage)
                    }
                    )}
                >
                    Prev
                </button>
                {renderPageNumbers}
                <button onClick={() =>
                    setCurrPage(prevPage => {
                        if (prevPage < Math.ceil(profileData.length / itemsPerPage)) {
                            // setMaxPageNumLimit(maxPageNumLimit + pageNumLimit)
                            // setMinPageNumLimit(minPageNumLimit + pageNumLimit)
                            return prevPage + 1
                        } else return 1
                    }
                    )}
                >
                    Next
                </button>
            </ul>
        </div>
    )
}

export default Pagination