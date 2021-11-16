package com.revature.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Favorites {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int favID;
	private String email;
	private String favoriteEmail;
	
	
	public Favorites() {
		super();
	}


	public Favorites(String email, String favoriteEmail) {
		super();
		this.email = email;
		this.favoriteEmail = favoriteEmail;
	}


	public Favorites(int favID, String email, String favoriteEmail) {
		super();
		this.favID = favID;
		this.email = email;
		this.favoriteEmail = favoriteEmail;
	}


	public int getFavID() {
		return favID;
	}


	public void setFavID(int favID) {
		this.favID = favID;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getFavoriteEmail() {
		return favoriteEmail;
	}


	public void setFavoriteEmail(String favoriteEmail) {
		this.favoriteEmail = favoriteEmail;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + favID;
		result = prime * result + ((favoriteEmail == null) ? 0 : favoriteEmail.hashCode());
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Favorites other = (Favorites) obj;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (favID != other.favID)
			return false;
		if (favoriteEmail == null) {
			if (other.favoriteEmail != null)
				return false;
		} else if (!favoriteEmail.equals(other.favoriteEmail))
			return false;
		return true;
	}


	@Override
	public String toString() {
		return "Favorites [favID=" + favID + ", email=" + email + ", favoriteEmail=" + favoriteEmail + "]";
	}
	
	
	
	
	
		
}
