package com.revature.repos;

import com.revature.models.Favorites;
import com.revature.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserDao extends JpaRepository<Users, String> {

	public Optional<Users> findByEmail(String email);
	 

}
