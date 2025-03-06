"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Restaurant } from "@/utils/restaurant";
import { useFavorites } from "@/context/FavoritesContext";
import { getRestaurantById } from "@/utils/api";
import styles from "./RestaurantDetails.module.css";

export default function RestaurantDetails() {
  const params = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    const fetchRestaurant = async () => {
      if (!params?.id) return;
      const restaurant = await getRestaurantById(params.id as string);
      setRestaurant(restaurant);
    };
    fetchRestaurant();
  }, [params?.id]);

  if (!restaurant) {
    return <div className={styles.container}>Restaurant not found</div>;
  }

  return (
    <main className={styles.container}>
      <Link href="/" className={styles.backLink}>
        ← Back to restaurants
      </Link>

      <div className={styles.card}>
        <div className={styles.cardImageWrapper}>
          <Image
            src={restaurant.image?.url || "https://dummyimage.com/600x400/000/00ffd5.png"}
            alt={restaurant.name || "Restaurant Image"}
            fill
            className={styles.cardImage}
          />
          <button
            onClick={() => toggleFavorite(restaurant._id)}
            className={styles.favoriteButton}
          >
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

        <div className={styles.detailsSection}>
          <h1>{restaurant.name}</h1>

          <div>
            <h2>Address</h2>
            <p>{restaurant.addressInfo?.address}</p>
            <p>{restaurant.addressInfo?.city} | {restaurant.addressInfo?.country}</p>
          </div>

          <div>
            <h2>Contact</h2>
            <ul className={styles.contactList}>
              <li>{restaurant.contacts?.cellphoneNumber}</li>
              <li>{restaurant.contacts?.email}</li>
              <li>{restaurant.contacts?.phoneNumber}</li>
            </ul>
          </div>

          <div>
            {restaurant?.cuisines?.length > 0 && ( 
              <>
                <h2>Cuisines</h2>
                <div className={styles.cuisineTagsContainer}>
                  {restaurant?.cuisines?.map((cuisine, index) => (
                    <span key={index} className={styles.cuisineTag}>
                      {cuisine.name?.en ||
                        cuisine.name["pt-PT"] ||
                        cuisine.name["pt-BR"]}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
          <div>
            {restaurant?.additionalInfo?.length > 0 && ( 
              <>
                <h2>Additional Info</h2>
                <div className={styles.cuisineTagsContainer}>
                  {restaurant?.additionalInfo?.map((info, index) => (
                    <span key={index} className={styles.cuisineTag}>
                      {info.name?.en ||
                        info.name["pt-PT"] ||
                        info.name["pt-BR"]}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
