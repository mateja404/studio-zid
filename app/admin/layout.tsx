import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Studio Zid | Admin",
    description: "Studio Zid - Molerski radovi bez stresa | Jasni dogovori, precizni rokovi, kulturna komunikacija i urednost",
};

export default function AdminLayout({ children, }: { children: React.ReactNode;
}) {
    return (
        <div>
            {children}
        </div>
    );
}