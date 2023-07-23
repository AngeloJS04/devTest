"use client";
import Layout from "@/components/layout/main";
import Script from "next/script";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {



    return (
        <html>
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
