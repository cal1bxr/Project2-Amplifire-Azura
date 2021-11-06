package com.revature.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.revature.models.Favorites;
import com.revature.models.Favorites;
import com.revature.repos.FavoritesDao;

public class FavoritesService {

    private FavoritesDao favoritesDao;

  
    @Autowired
    public FavoritesService(FavoritesDao favoritesDao) {
		super();
		this.favoritesDao = favoritesDao;
	}

	public List<Favorites> findAll(){
        return favoritesDao.findAll();
    }

    public Favorites findById(int id) {
        return favoritesDao.findById(id).get();
    }

    public List<Favorites> findByFavorites(String favoritesname){
        Optional<List<Favorites>> oList = favoritesDao.findByFavoritesName(favoritesname);
        return oList.orElseGet(ArrayList::new);
    }

    public void addOrUpdateFavorites(Favorites favorites){
        favoritesDao.save(favorites);
    }

    public void deleteFavorites(String favoritesname){
        Favorites favorites = (Favorites) findByFavorites(favoritesname);
        favoritesDao.delete(favorites);
    }
}
