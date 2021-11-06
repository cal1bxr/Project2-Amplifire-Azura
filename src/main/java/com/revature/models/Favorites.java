package com.revature.models;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Favorites {

	@Id
	private int userid;
	private String favoritesName;
	private String celebrities;
	
	@OneToMany
	private Set<Users> users;

}
