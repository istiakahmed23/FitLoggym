'use client'
import { ProductProvider } from '@/context/ProductContext';
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

const ClientLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <ProductProvider>
                <nav>
                    <Navbar />
                </nav>
                <main className="min-h-[60vh]">
                    {children}
                </main>
                <Footer />

                <Toaster />
            </ProductProvider>
        </>
    );
};



export default ClientLayout;