class GameController < ApplicationController
  def index
  end

  def show
    render :json => Scene.find_by(blurb: params[:blurb])
  end  
end
