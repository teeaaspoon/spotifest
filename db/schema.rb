# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180801155708) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artists", force: :cascade do |t|
    t.string "artist_name"
    t.jsonb "spotify_artist_info"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "spotify_artist_id"
    t.index ["spotify_artist_id"], name: "index_artists_on_spotify_artist_id"
  end

  create_table "artists_festivals", id: false, force: :cascade do |t|
    t.bigint "festival_id", null: false
    t.bigint "artist_id", null: false
  end

  create_table "artists_genres", id: false, force: :cascade do |t|
    t.bigint "genre_id", null: false
    t.bigint "artist_id", null: false
  end

  create_table "festivals", force: :cascade do |t|
    t.string "title"
    t.string "start_date"
    t.string "end_date"
    t.string "city"
    t.string "country"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "longitude"
    t.float "latitude"
    t.string "continent"
  end

  create_table "genres", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "playlists", force: :cascade do |t|
    t.jsonb "spotify_playlist_info"
    t.bigint "spotify_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.index ["spotify_id"], name: "index_playlists_on_spotify_id"
  end

  create_table "playlists_songs", id: false, force: :cascade do |t|
    t.bigint "song_id", null: false
    t.bigint "playlist_id", null: false
  end

  create_table "songs", force: :cascade do |t|
    t.string "song_name"
    t.jsonb "spotify_song_info"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "spotify_uri"
    t.bigint "artist_id"
    t.index ["artist_id"], name: "index_songs_on_artist_id"
    t.index ["spotify_uri"], name: "index_songs_on_spotify_uri"
  end

  create_table "spotifies", force: :cascade do |t|
    t.jsonb "user_info"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.string "email"
    t.string "spotify_id"
    t.index ["spotify_id"], name: "index_spotifies_on_spotify_id"
    t.index ["user_id"], name: "index_spotifies_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.jsonb "spotify_user_info"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "playlists", "spotifies"
  add_foreign_key "songs", "artists"
end
