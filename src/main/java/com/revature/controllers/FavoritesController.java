package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.revature.models.Favorites;
import com.revature.services.FavoritesService;



public class FavoritesController {

    private FavoritesService favoriteService;

    @Autowired
    public FavoritesController(FavoritesService favoriteService) {
		super();
		this.favoriteService = favoriteService;
	}

	@GetMapping("/{id}")
    public Favorites oneFavorite(@PathVariable("id") int id){
        return favoriteService.findById(id);
    }

    @GetMapping
    public List<Favorites> allFavorites() {
        return favoriteService.findAll();
    }

    @GetMapping("/{name}")
    public List<Favorites> oneFavorite(@PathVariable("name") String favoritename){
        return favoriteService.findByFavorites(favoritename);
    }

    @PostMapping
    public ResponseEntity<Favorites> addFavorite(@RequestBody Favorites favorite){
        favoriteService.addOrUpdateFavorites(favorite);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping
    public ResponseEntity<Favorites> updateFavorite(@RequestBody Favorites favorite){
        favoriteService.addOrUpdateFavorites(favorite);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/name")
    public  ResponseEntity<Favorites> deleteFavorite(@PathVariable("name") String favoritename){
        favoriteService.deleteFavorites(favoritename);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
