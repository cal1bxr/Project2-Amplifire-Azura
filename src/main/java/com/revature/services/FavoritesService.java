package com.revature.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.models.Favorites;
import com.revature.models.Favorites;
import com.revature.repos.FavoritesDao;

@Service
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

    public Favorites findByEmail(String email) {
        return favoritesDao.findByEmail(email).get();
    }

    public void addOrUpdateFavorites(Favorites favorites){
        favoritesDao.save(favorites);
    }

    public void deleteFavorites(int id){
    	
        List<Favorites> allFavorites = favoritesDao.findAll();
        
        for(Favorites i : allFavorites) {
        	if(i.getFavID() == id) {
        		
        		favoritesDao.delete(i);
        	}
        	
        }
        
    }
}
