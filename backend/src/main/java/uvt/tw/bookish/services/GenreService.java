package uvt.tw.bookish.services;

import uvt.tw.bookish.entities.Genre;

import java.util.List;

public interface GenreService {

    public Genre addGenre(Genre genre);

    List<Genre> getAll();
}
