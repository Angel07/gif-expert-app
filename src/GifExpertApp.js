import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    // const categories = ['Uno', 'Dos', 'Tres'];
    const [categories, setCategories] = useState(['Uno']);
    /* const handleAdd = () => {
        // setCategories([...categories, 'Nueva']); // Operador spread
        setCategories(cats => [...cats, 'Nueva']);
    } */
    return (
        <>
           <h1>GifExpertApp</h1>
           <AddCategory setCategories= { setCategories }/>
           <hr/>
           <ol>
                {
                    categories.map((x, i) => <GifGrid key={x} category = {x}/> )
                }
           </ol>
        </>
    )
}
