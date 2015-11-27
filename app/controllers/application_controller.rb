class ApplicationController < ActionController::Base
  before_filter :set_title

  def splash
    gon.images = get_images
    @total = gon.images.size
  end

  protected

  def get_images
    images = []
    animal_directory = Rails.application.assets.paths.select do |path|
      path.include? 'images'
    end.map do |path|
      dir = File.join path, ANIMAL_DIR
      next if !Dir.exists?(dir)
      Dir.entries(dir).each do |image|
        images << File.join('assets', ANIMAL_DIR, image) if image =~ /.*\.[png\|jpg\|jpeg]/
      end
    end
    images
  end

  def set_title
    @title = 'Small Animals in Costumes'
  end

  private

  ANIMAL_DIR = 'animals'
  RANDOM = Random.new
end

