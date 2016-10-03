class SkillsController < ApplicationController

  def index
    @grid = SkillsGrid.new(params[:skills_grid]) do |scope|
      scope.page(params[:page])
    end
  end

end

