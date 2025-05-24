import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Studio Zid | Admin Login",
    description: "Studio Zid - Admin panel login",
};

export default function AdminLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {children}
        </div>
    );
}