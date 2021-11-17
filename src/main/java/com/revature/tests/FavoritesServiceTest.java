package com.revature.tests;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.nio.file.attribute.FileAttributeView;
import java.util.ArrayList;
import java.util.List;

import com.revature.models.Favorites;
import com.revature.repos.FavoritesDao;
import com.revature.services.FavoritesService;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;



@RunWith(MockitoJUnitRunner.class)
class FavoritesServiceTest {

    @InjectMocks
    FavoritesService favoritesService;

    @Mock
    private FavoritesDao favoritesDao;

    @Before
    public void beforeAll() {
        MockitoAnnotations.openMocks(this);
    }

    @BeforeEach
    void setUp() {

    }

    @AfterEach
    void tearDown() {
    }

    @Test
    void findAll() {
        List<Favorites> list = new ArrayList<Favorites>();
        Favorites fav1 = new Favorites("", "");
        assertEquals(1, 1);
    }

    @Test
    void findByEmail() {
    }

    @Test
    void addOrUpdateFavorites() {
    }

    @Test
    void deleteFavorites() {
    }
}