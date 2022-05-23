import React, { useEffect, useRef, useState } from 'react'
import "./ImageGallery.css"
import SingleImage from './SingleImage'

const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;
const clientID = `?client_id=FeVwiHaZsbzMTgIhrU8VbpLddhcMFkqswVytzN-6SEM`;

// console.log(clientID)
const ImageGallery = () => {

    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(false)
    const [photos, setPhotos] = useState([])
    const [page, setPage] = useState(1)
    const [newImages, setNewImages] = useState(false)

    const mounted = useRef(false)
    // console.log(mounted)

    const [showModal, setShowModal] = useState(false)
    const [modalImageSrc, setModalImageSrc] = useState("")

    const fetchImages = async () => {
        console.log("fetchImages called")
        setLoading(true)

        let url;
        const urlPage = `&page=${page}`
        const urlQuery = `&query=${query}`

        if (query) {
            url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
        } else {
            url = `${mainUrl}${clientID}${urlPage}`;
        }

        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            setPhotos((oldPhotos) => {
                if (query && page === 1) {
                    return data.results;
                }
                else if (query) {
                    return [...oldPhotos, ...data.results];
                }
                else {
                    return [...oldPhotos, ...data];
                }
            });
            setNewImages(false);
            setLoading(false);
        } catch (err) {
            console.log(err)
            setNewImages(false);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchImages()
    }, [page])

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            return;
        }

        if (!newImages) return;
        if (loading) return;
        setPage((oldPage) => oldPage + 1);
        console.log(page);
    }, [newImages])

    const scrollEvent = () => {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
            setNewImages(true)
        }
        console.log("inner scrollevent")
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollEvent);

        return () => window.removeEventListener("scroll", scrollEvent)
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(query)
        if (!query) return;

        if (page == 1) {
            fetchImages()
        }
        setPage(1)
    }

    useEffect(() => {
        fetchImages()
    }, [query])

    return (
        <div className='imageGallery'>
            <form className="searchBar">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)
                    }
                    placeholder="Search"
                />
                <button type='submit' onClick={handleSubmit}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                </button>
            </form>


            <div className="gallery">
                {photos.map((photo, index) => <SingleImage key={index} photo={photo} showModal={showModal} modalImageSrc={modalImageSrc} setShowModal={setShowModal} setModalImageSrc={setModalImageSrc} />)}
            </div>

            {loading && <h2 className='imageGallery_loading'>Loading...</h2>}
        </div>

    )
}

export default ImageGallery