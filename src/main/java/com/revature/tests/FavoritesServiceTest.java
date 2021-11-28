package com.revature.tests;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.nio.file.attribute.FileAttributeView;
import java.util.ArrayList;
import java.util.List;

import com.revature.models.Favorites;
import com.revature.models.Users;
import com.revature.repos.FavoritesDao;
import com.revature.services.FavoritesService;
import org.junit.Before;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;


@ExtendWith({MockitoExtension.class})
class FavoritesServiceTest {

    @InjectMocks
    FavoritesService favoritesService;

    @Mock
    private FavoritesDao favoritesDao;

    @Before
    public void beforeAll() {
        MockitoAnnotations.openMocks(this);
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void findAll() {
        List<Favorites> list = new ArrayList<Favorites>();
        Favorites user1 = new Favorites("asd@gmail.com", "asd@gmail.com");
        list.add(user1);
        assertEquals(1, 1);
        when(favoritesDao.findAll()).thenReturn(list);

        //test
        List<Favorites> favList = favoritesService.findAll();
        Assertions.assertEquals(1, favList.size());

        verify(favoritesDao, times(1)).findAll();
    }

    @Test
    void findByEmail() {
        Favorites user1 = new Favorites("asd@gmail.com","asd@gmail.com");
        when(favoritesDao.findByEmail("asd@gmail.com")).thenReturn(java.util.Optional.of(user1));

        Favorites returnedUser = favoritesService.findByEmail("asd@gmail.com");
        Assertions.assertEquals("asd@gmail.com", returnedUser.getFavoriteEmail());

    }

    @Test
    void addOrUpdateFavorites() {
        Favorites user1 = new Favorites("asd@gmail.com","asd@gmail.com");

        favoritesService.addOrUpdateFavorites(user1);

        verify(favoritesDao, times(1)).save(user1);

    }

    @Test
    void deleteFavorites() {
        Favorites user1 = new Favorites(888, "asd@gmail.com","asd@gmail.com");
        List<Favorites> list = new ArrayList<Favorites>();
        list.add(user1);
        when(favoritesDao.findAll()).thenReturn(list);

        favoritesService.addOrUpdateFavorites(user1);
        favoritesService.deleteFavorites(888);

        verify(favoritesDao, times(1)).delete(user1);

    }
}