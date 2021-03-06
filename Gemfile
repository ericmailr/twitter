source 'https://rubygems.org'
ruby "2.7.3"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.3.4'
# Use sqlite3 as the database for Active Record
#gem 'sqlite3'
#User postgresql instead of sqlite3 to allow Heroku deployment
gem 'pg', '~> 1.2.3'
# Use Puma as the app server
gem 'puma', '~> 3.7'
# Use SCSS for stylesheets
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby
gem 'mimemagic', github: 'mimemagicrb/mimemagic', ref: '01f92d86d15d85cfd0f20dabd025dcbd36a8a60f'

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
#gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

#ancestry gem for tree structure model (used for comments)
gem 'ancestry'

gem 'webpacker', '~> 5.x'
gem 'react-rails', '~> 2.6.1'
# stores rails route helpers; i only use in some spots, don't think i should keep
gem 'js-routes', '~> 1.4.9'
gem 'active_model_serializers'
gem 'htmlbeautifier'
gem 'bootstrap', '~> 5.0.0.alpha3'
gem 'jquery-rails'
gem 'devise', '~> 4.7.1'
gem "figaro"
# image management
gem 'carrierwave', '~> 2.2.1'
gem 'cloudinary', '~> 1.20.0'


group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'rspec-rails', '~> 5.0.0'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
