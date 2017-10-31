class Api::ArtistsController < ApplicationController
    def index
      @artists = Artist.all
      render json: @artists
    end
  
    def create
      @artist = Artist.create!(artist_params)
      redirect_to api_artist_path(@artist)
    end
  
    def show
      @artist = Artist.joins(:songs).includes(:songs).find(params[:id])
      @songs = @artist.songs

      render json: {
        artist: @artist,
        songs: @artist.songs
      }
    end
  
    def update
      @artist = Artist.find(params[:id])
      @artist.update!(artist_params)
      redirect_to api_artist_path(@artist)
    end
  
    def destroy
      @artist = Artist.find(params[:id])
      @artist.destroy
      redirect_to api_artists_path
    end
  
    private
  
    def artist_params
      params.require(:artist).permit(:name, :photo_url, :nationality)
    end
  end