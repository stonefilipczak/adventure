class ScenesController < ApplicationController
    def index
        @scenes = Scene.all
    end

    def show
        @scene = Scene.find(params[:id])
    end 

    def new
    end

    def edit 
        @scene = Scene.find(params[:id])
    end    
    
    def create
        @scene = Scene.new(scene_params)

        @scene.save
        redirect_to @scene
    end

    def update
        @scene = Scene.find(params[:id])

        if @scene.update(scene_params)
            redirect_to @scene
        else 
            render 'edit'
        end 
    end          

    def destroy 
        @scene = Scene.find(params[:id])
        @scene.destroy 

        redirect_to scenes_path
    end    
    
    private 
        def scene_params
            params.require(:scene).permit(:blurb, :prompt, :choiceA, :choiceB, :pathA, :pathB)
        end    
end
