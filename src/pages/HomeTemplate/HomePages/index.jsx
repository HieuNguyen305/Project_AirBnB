import React, { useState, useEffect } from 'react'
import "./style.css"
import api from '../../../utils/ApiUtils';
import axios from 'axios';
function HomePages() {
    const [searchLocation, setSearchLocation] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            axios
                .get(`api` / "vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=8")
                .then(result => result.JSON())
                .catch((error) => {
                    
                })
        }
    })
    return (
        <>
            <main className='container-fluid pl-5'>
                <section className='pt-5 pb-5'>
                    <h2 className='pl-5'>Khám phá những điểm đến gần đây</h2>
                    {/* Get some data from a server - API */}
                </section>
            </main>
        </>
    )
}

export default HomePages;

