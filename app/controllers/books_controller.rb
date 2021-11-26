class BooksController < ApplicationController

    before_action :set_book, only: [:show, :update, :destroy]

    def app
        render component: "App"
    end

    def index
        render json: Book.all
    end

    def show
        render json: @book
    end

    def create
    end

    def update
    end

    def destroy
    end

    private

    def set_book
        @book = Book.find(params[:id])
    end

    def set_params
        params.require(:book).permit(:title, :author)
    end

end
