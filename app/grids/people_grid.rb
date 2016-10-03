class PeopleGrid
  include Datagrid

  scope do
    Person
  end

  filter(:first_name, :string)

  column(:first_name)
  column(:created_at) do |model|
    model.created_at.to_date
  end
end
