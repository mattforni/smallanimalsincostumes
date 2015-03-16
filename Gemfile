source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 4.1'

# Server
gem 'unicorn', '~> 4.8'

# Templating
gem 'haml-rails', '~> 0.5'

group :assets do
  gem 'sass-rails', '~> 4.0'
  gem 'uglifier', '~> 2.5'
end

group :development, :test do
  gem 'sqlite3', '~> 1.3'
end

group :doc do
  gem 'sdoc', require: false
end

group :production do
  gem 'pg'
  gem 'rails_12factor'
end

group :test do
  gem 'factory_girl_rails', '~> 4.4'
  gem 'rspec-rails', '~> 2.14'
  gem 'minitest', '~> 5.3'
  gem 'mocha', '~> 1.0'
  gem 'validity', '~> 1'
end

