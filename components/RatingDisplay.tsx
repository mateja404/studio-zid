import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function RatingDisplay({ rating }: any) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} color="gold" />
            ))}
            {hasHalfStar && <FaStarHalfAlt color="gold" />}
            {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={`empty-${i}`} color="gray" />
            ))}
        </div>
    );
}