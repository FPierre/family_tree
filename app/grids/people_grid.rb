class PeopleGrid
  include Datagrid

  scope do
    Person
  end

  filter(:first_name, :string)
  filter(:created_at, :date, range: true)

  column(:first_name)
  column(:created_at) do |model|
    model.created_at.to_date
  end
end
