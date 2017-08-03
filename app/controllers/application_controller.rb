class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  #flash message type
  add_flash_types :error, :notice, :alert, :success, :warning
end
