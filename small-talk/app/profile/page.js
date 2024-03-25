"use client"
import Link from 'next/link'
import React from 'react';
import ThemeLayout from '../components/ThemeLayout';

export default function profile() {
    // will be navigated to this page after click profile button on homepage
    return (
        <ThemeLayout>
            <div className="flex flex-row">
                <ul className="m-8 w-full">
                    <li className="border-b border-gray-200 pb-2 mb-10">Profile Page</li>
                    <li className="border-b border-gray-200 pb-2 mb-10">Avatar</li>
                    <li className="border-b border-gray-200 pb-2 mb-10">Personalized Board</li>
                </ul>
            </div>
        </ThemeLayout>
    );
}