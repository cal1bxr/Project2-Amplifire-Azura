package com.revature.repos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.models.Favorites;
import com.revature.models.Users;

public interface FavoritesDao extends JpaRepository<Favorites, Integer>{
	
	 public Optional<Favorites> findByEmail(String email);
	 public Optional<Favorites> findByFavoriteEmail(String favoriteEmail);

}
