'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { RestaurantCard } from '@/components/RestaurantCard';
import { useFavorites } from '@/context/FavoritesContext';
import { getRestaurantById } from '@/utils/api';
import { Restaurant } from '@/utils/restaurant';
import styles from './favorites.module.css';

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const [favoriteRestaurants, setFavoriteRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavoriteRestaurants = async () => {
      setLoading(true);
      try {
        const restaurants = await Promise.all(
          favorites.map(id => getRestaurantById(id))
        );
        setFavoriteRestaurants(restaurants.filter(Boolean));
      } catch (error) {
        console.error('Error fetching favorite restaurants:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteRestaurants();
  }, [favorites]);

  if (loading) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Your Favorites</h1>
        <div className={styles.loading}>Loading your favorite restaurants...</div>
      </div>
    );
  }

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Your Favorites</h1>
        <Link href="/" className={styles.backLink}>
          ← Back to all restaurants
        </Link>
      </div>

      {favoriteRestaurants.length === 0 ? (
        <div className={styles.emptyState}>
          <svg
            className={styles.emptyIcon}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <h2 className={styles.emptyTitle}>No favorites yet</h2>
          <p className={styles.emptyText}>
            Start adding restaurants to your favorites by clicking the heart icon on any restaurant.
          </p>
          <Link href="/" className={styles.browseLink}>
            Browse Restaurants
          </Link>
        </div>
      ) : (
        <div className={styles.restaurantList}>
          {favoriteRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant._id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </main>
  );
} 