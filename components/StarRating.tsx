import { useState } from "react";
import { FaStar, FaRegStar } from 'react-icons/fa';

interface StarRatingProps {
    rating: number;
    onRatingChange: (rating: number) => void;
}

const StarRating = ({ rating, onRatingChange }: StarRatingProps) => {
    const handleStarClick = (index: number) => {
        if (rating === index + 1) {
            onRatingChange(rating > 1 ? rating - 1 : 1);
        } else {
            onRatingChange(index + 1);
        }
    };

    return (
        <div style={{ fontSize: "2rem", cursor: "pointer" }}>
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    onClick={() => handleStarClick(index)}
                    style={{ color: index < rating ? "#ffc107" : "#e4e5e9" }}
                    className="inline-flex"
                >
                    {index < rating ? <FaStar /> : <FaRegStar />}
                </span>
            ))}
        </div>
    );
};

export default StarRating;