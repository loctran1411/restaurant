import React from 'react'
// import { useParams } from 'react-router-dom'
// const { id } = useParams()

const FoodDetail = ({ id, title, image01, price }) => {
    console.log(id);
    return (
        <>
            <div>Món: {title}</div>
            <div>Giá: {price}</div>
            <div>
                <img src={image01} alt="" style={{width: '250px', height: '250px'}}/>
            </div>
        </>
    )
}

export default FoodDetail