class Api::PagesController < ApplicationController
  def index
    # @pages = Page.all 
    # render json: @pages 
    render json: Page.all
  end 

  def show
    @page = Page.find(params[:id])
    render json: @page
  end

  def create
    @page = Page.new(page_params)
    if @page.save
      render json: @page
    else
      render json: { errors: @page.errors }, status: :unprocessable_entity
    end
  end

  def update
    @page = Page.find(params[:id])
    if @page.update(page_params)
      render json: @page
    else
      render json: { errors: @page.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @page = Page.find(params[:id])
    @page.destroy
    render json: { message: 'Page deleted'}
  end

  private 
    def page_params
      params.require(:page).permit(:title, :author, :body)
    end
end
