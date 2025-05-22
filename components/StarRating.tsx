import { useState } from "react";

const StarRating = () => {
    const [rating, setRating] = useState(0);

    const handleStarClick = (index: any) => {
        if (rating === index + 1) {
            setRating(rating - 1);
        } else {
            setRating(index + 1);
        }
    };

    return (
        <div style={{ fontSize: "2rem", cursor: "pointer" }}>
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    onClick={() => handleStarClick(index)}
                    style={{ color: index < rating ? "#ffc107" : "#e4e5e9" }}
                >
          {index < rating ? "★" : "☆"}
        </span>
            ))}
            <p>Trenutna ocena: {rating}</p>
        </div>
    );
};

export default StarRating;