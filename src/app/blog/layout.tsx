import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Blogs",
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="mx-auto max-w-2xl px-6">
            {children}
        </div>
    );
}
