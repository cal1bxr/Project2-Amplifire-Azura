package com.revature.models;

import java.util.Objects;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Favorites {

	
	private String email;
	private String favoriteEmail;
	
	
	
	public Favorites() {
		super();
	}



	public Favorites(String favoriteEmail) {
		super();
		this.favoriteEmail = favoriteEmail;
	}



	public Favorites(String email, String favoriteEmail) {
		super();
		this.email = email;
		this.favoriteEmail = favoriteEmail;
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
		if (favoriteEmail == null) {
			if (other.favoriteEmail != null)
				return false;
		} else if (!favoriteEmail.equals(other.favoriteEmail))
			return false;
		return true;
	}



	@Override
	public String toString() {
		return "Favorites [email=" + email + ", favoriteEmail=" + favoriteEmail + "]";
	}
	
	
		
}
