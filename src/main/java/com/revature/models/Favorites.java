package com.revature.models;

import java.util.Objects;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Favorites {

	@Id
	private int userFavId;
	private String favoritesName;
	private String celebrities;
	
	@ManyToOne
	private Users user;

	public Favorites(int userFavId, String favoritesName, String celebrities, Users user) {
		this.userFavId = userFavId;
		this.favoritesName = favoritesName;
		this.celebrities = celebrities;
		this.user = user;
	}

	public Favorites(String favoritesName, String celebrities, Users user) {
		this.favoritesName = favoritesName;
		this.celebrities = celebrities;
		this.user = user;
	}

	public Favorites() {
	}

	public int getUserFavId() {
		return userFavId;
	}

	public void setUserFavId(int userFavId) {
		this.userFavId = userFavId;
	}

	public String getFavoritesName() {
		return favoritesName;
	}

	public void setFavoritesName(String favoritesName) {
		this.favoritesName = favoritesName;
	}

	public String getCelebrities() {
		return celebrities;
	}

	public void setCelebrities(String celebrities) {
		this.celebrities = celebrities;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Favorites favorites = (Favorites) o;
		return userFavId == favorites.userFavId && favoritesName.equals(favorites.favoritesName) && celebrities.equals(favorites.celebrities) && user.equals(favorites.user);
	}

	@Override
	public int hashCode() {
		return Objects.hash(userFavId, favoritesName, celebrities, user);
	}

	@Override
	public String toString() {
		return "Favorites{" +
				"userFavId=" + userFavId +
				", favoritesName='" + favoritesName + '\'' +
				", celebrities='" + celebrities + '\'' +
				", user=" + user +
				'}';
	}
}
