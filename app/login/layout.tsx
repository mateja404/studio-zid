import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Studio Zid | Login",
    description: "Studio Zid - Login stranica za davanje recenzija",
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