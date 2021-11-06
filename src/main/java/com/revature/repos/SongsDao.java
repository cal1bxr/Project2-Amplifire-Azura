package com.revature.repos;

import com.revature.models.Songs;
import com.revature.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SongsDao extends JpaRepository<Songs, Integer> {
    public Optional<List<Songs>> findBySongName(String name);
}
