class PeopleController < ApplicationController
  before_action :set_family, only: [       :new, :edit, :create, :update, :destroy]
  before_action :set_person, only: [:show,       :edit,          :update, :destroy]

  def index
    @people = Person.all
  end

  def show
  end

  def new
    @person = @family.people.new

    # @person.build_place
  end

  def edit
  end

  def create
    @person = @family.people.new(person_params)

    if @person.save
      redirect_to family_people_path(@family, @person), notice: 'Person was successfully created.'
    else
      render :new
    end
  end

  def update
    if @person.update(person_params)
      redirect_to @person, notice: 'Person was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @person.destroy
    redirect_to people_url, notice: 'Person was successfully destroyed.'
  end

  private

  def set_family
    @family = Family.find params[:family_id]
  end

  def set_person
    @person = Person.find params[:id]
  end

  def person_params
    params.require(:person).permit(
      :birth_date,
      :death_date,
      :first_name,
      :gender,
      place_attributes: [:id, :city, :country, :postal_code, :thoroughfare]
    )
  end
end
