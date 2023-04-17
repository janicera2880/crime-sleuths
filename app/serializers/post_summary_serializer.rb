class PostSummarySerializer < ActiveModel::Serializer
  attributes :summary

  def summary
    "#{self.object.title} - #{self.object.content[0..49]}..."
  end

end
