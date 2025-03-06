'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { RestaurantCard } from '@/components/RestaurantCard';
import styles from './page.module.css'; 
import { getRestaurants } from '@/utils/api';
import { Restaurant } from '@/utils/restaurant';
import Link from 'next/link';

const LIMIT = 9;

export default function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, inView } = useInView();

  const fetchRestaurants = async () => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    try {
      const newRestaurants = await getRestaurants(offset, LIMIT);
      if (newRestaurants.length < LIMIT) {
        setHasMore(false);
      }
      setRestaurants(prev => [...prev, ...newRestaurants]);
      setOffset(prev => prev + LIMIT);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (inView) {
      fetchRestaurants();
    }
  }, [inView]);

  return (
    <main className={styles.container}>
<div className={styles.header}>
        <h1 className={styles.title}>Restaurants</h1>
        <Link href="/favorites" className={styles.backLink}>
          <svg
            className={styles.heartIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8.25c0-2.9 2.35-5.25 5.25-5.25a5.25 5.25 0 0 1 4.5 2.39 5.25 5.25 0 0 1 4.5-2.39c2.9 0 5.25 2.35 5.25 5.25 0 6.75-9.75 11.5-9.75 11.5S3 15 3 8.25z"
            />
          </svg> Your Favorites 
        </Link>
      </div>      <div className={styles.restaurantList}>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </div>
      {hasMore && (
        <div ref={ref} className={styles.loadingContainer}>
          {isLoading && <div className={styles.loading}>Loading more restaurants...</div>}
        </div>
      )}
    </main>
  );
}
