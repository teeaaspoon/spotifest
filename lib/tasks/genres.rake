desc "Grabbing genres for all artsits"
task genre_grab: :environment do
  @artists = Artist.all
  @genres = []
  @artists.each do |artist|
     @genres << artist.spotify_artist_info['genres']
  end
  @genres.flatten!
  @genres.uniq!
  @genres.each do |genre|
    Genre.create!(name: genre)
  end
  @artists.each do |artist|
    artist.spotify_artist_info['genres'].each do |genre|
      @genre = Genre.find_by(name: genre)
      artist.genres << @genre
      artist.save
    end
  end
end