module ApplicationHelper
	# for set flash key
	def set_flash_key(key)
		case key
		when 'notice'
			f_key = 'info'
		when 'warning'
			f_key = 'warning'
		when 'success'
			f_key = 'success'
		when 'error'
			f_key = 'danger'
		when 'alert'
			f_key = 'warning'
		else
			f_key = 'success'
		end
	end
end
