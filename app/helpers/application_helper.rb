module ApplicationHelper
    def date_formatted(date)
       date.strftime("%B %Y") 
    end

    def tweet_updated_at_formatted_brief(date)
        if date.today?
            time_diff = Time.current - date
            if time_diff < 60
                time_diff.round.to_s + "s"
            elsif time_diff < 3600
                (time_diff / 60).round.to_s + "m"
            else
                (time_diff / 3600).round.to_s + "h"
            end
        else
            date.strftime("%b %e")
        end
    end

    def tweet_updated_at_formatted_full(date)
       date.strftime("%l:%M %p · %b %e, %Y") 
    end
    
    def get_followable_users()
        User.followable_users(current_user).order('RANDOM()').limit(3).map {|user| UserSerializer.new(user)}
    end

    module_function(:tweet_updated_at_formatted_brief, :tweet_updated_at_formatted_full)
end
