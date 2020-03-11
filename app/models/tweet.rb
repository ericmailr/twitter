class Tweet < ApplicationRecord
    validates :content, :tweeter_id, presence: true

    belongs_to :tweeter, class_name: "User"
    has_many :comments, as: :post, dependent: :destroy
    has_many :likes, as: :post, dependent: :destroy
    has_many :retweets, as: :post, dependent: :destroy

    def formatted_updated_at
        updated_time = self.updated_at
        if updated_time.today?
            #difference gives seconds
            time_diff = Time.current - updated_time
            if time_diff < 60
                time_diff.round.to_s + "s"
            elsif time_diff < 3600
                (time_diff / 60).round.to_s + "m"
            else
                (time_diff / 3600).round.to_s + "h"
            end
        else
            updated_time.strftime("%b %e")
        end
    end

    def Tweet.search(query)
        query = query.downcase
        Tweet.where("content like ?", "%#{query}%")
    end
end