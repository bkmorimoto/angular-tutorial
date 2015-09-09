class Post < ActiveRecord::Base
  has_many :comments

  def as_json(options = {})
    super(option.merge(include: :comments))
  end
end
