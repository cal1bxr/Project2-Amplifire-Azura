package com.revature.repos;

import com.revature.models.Artists;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ArtistDao extends JpaRepository<Artists, String> {
   
}
