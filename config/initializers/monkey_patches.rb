#source for this monkey patch: https://stackoverflow.com/questions/12065198/adding-a-label-to-rails-date-select-helper
module ActionView
  module Helpers
    class DateTimeSelector

      # Given an ordering of datetime components, create the selection HTML
      # and join them with their appropriate separators.
      def build_selects_from_types(order)
        select = ""
        order.reverse_each do |type|
          separator = separator(type)
          select.insert(0, separator.to_s + send("select_#{type}").to_s)
        end
        select.html_safe
      end

      # Returns the separator for a given datetime component.
      def separator(type)
        return "" if @options[:use_hidden]
        field_name = "#{@options[:prefix]}_#{@options[:field_name]}"
        case type
          when :year
            "<div class='flex-break'></div><legend for='#{field_name}_1i'>Year</legend>"
          when :month
            "<legend for='#{field_name}_2i'>Month</legend>"
          when :day
            "<div class='flex-break'></div><legend for='#{field_name}_3i'>Day</legend>"
          when :hour
            (@options[:discard_year] && @options[:discard_day]) ? "" : @options[:datetime_separator]
          when :minute, :second
            @options[:"discard_#{type}"] ? "" : @options[:time_separator]
        end
      end
    end
  end
end
