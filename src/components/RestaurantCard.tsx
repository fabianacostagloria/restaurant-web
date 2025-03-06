import Image from 'next/image';
import Link from 'next/link';
import { Restaurant } from '@/utils/restaurant';
import { useFavorites } from '@/context/FavoritesContext';
import styles from './RestaurantCard.module.css'; 

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(restaurant._id);
  };

  return (
    <Link href={`/restaurant/${restaurant._id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={restaurant.image?.url || "https://dummyimage.com/600x400/000/00ffd5.png"}
          alt={restaurant.name || 'Restaurant Image'}
          fill
          className={styles.image}
        />
        <button onClick={handleFavoriteClick} className={styles.favoriteButton}>
          <svg
            className={`${styles.favoriteIcon} ${isFavorite(restaurant._id) ? styles.filled : styles.unfilled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8.25c0-2.9 2.35-5.25 5.25-5.25a5.25 5.25 0 0 1 4.5 2.39 5.25 5.25 0 0 1 4.5-2.39c2.9 0 5.25 2.35 5.25 5.25 0 6.75-9.75 11.5-9.75 11.5S3 15 3 8.25z"
            />
          </svg>
        </button>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{restaurant.name}</h3>
        <p className={styles.description}>{restaurant.addressInfo?.city || 'City not available'} | {restaurant.addressInfo?.country || 'Country not available'}</p>
      </div>
    </Link>
  );
}

export default RestaurantCard;
