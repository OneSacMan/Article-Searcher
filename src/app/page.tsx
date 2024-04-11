"use client"
// pages/index.tsx
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.core.ac.uk/v3/search/works/?q=${search}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ZRx4NKmhEzXuYGQ0ya9O3LV8CSjgTJD1`,
            "Accept": "application/json"
          }
        }
      );
      const res = await response.json();
      setData(res);
      setSearched(true); // Set searched to true when a search has been performed
      console.log(res);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <main className={`flex min-h-screen flex-col items-center ${inter.className}`}>
    <div style={{ background: 'gray', padding: '26px', border: '2px solid white', width: '90%',marginLeft: '10%'}}className="mb-6">
    </div>

      <h1 className="text-white text-4xl align-top mb-6">Article Finder!</h1>
      <div className='flex'>
        <input
          className='bg-zinc-800 border border-zinc-700 p-4 text-white'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className='bg-indigo-400 p-2' onClick={handleSearch}>
          Search
        </button>
      </div>
      {searched && data.results && data.results.length === 0 && (
        <h1 className="text-white text-4xl mb-8">No results found.</h1>
      )}
      <div className='flex flex-col space-y-2 mt-4'>
        {data.results && data.results.length > 0 ? (
          data.results.map((work, key) => (
            <div style={{width: '90%',marginLeft: '10%'}} key={key} className='p-4 border border-zinc-700 rounded-md'>
              <p className='text-white text-sm'>
                {work.abstract}
              </p>
              <Link href={`/articles/${work.id}`}>
                Click Here
              </Link>
            </div>
          ))
        ) : null}
      </div>
    </main>
  );
}
