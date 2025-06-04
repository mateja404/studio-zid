import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center p-10 bg-white rounded-lg shadow-lg max-w-md mx-auto">
                <h1 className="text-6xl font-extrabold text-red-500">404</h1>
                <p className="text-xl mt-4 text-gray-700">Ups! Stranica koju tražiš nije pronađena.</p>
                <p className="mt-2 text-gray-500">Možda je stranica uklonjena ili je došlo do greške u URL-u.</p>
                <Link href={"/"} className="block rounded-full text-white mt-10 pt-2 pb-2 pl-3 pr-3 bg-[#88664d] ">Povratak na početnu</Link>
            </div>
        </div>
    );
}