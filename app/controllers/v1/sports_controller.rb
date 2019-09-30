class V1::SportsController < ApplicationController
	def index
		require 'json'
		file = File.read('app/controllers/v1/overview.json')
		data_hash = JSON.parse(file)
		render json: { :sports => [
		 {
			:name => data_hash['slider_elements'][0],
			:guid => '000-123-123'
		 }	
		] }.to_json
	end
end
