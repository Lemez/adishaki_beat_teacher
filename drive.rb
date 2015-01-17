# Usage - cd to project folder
# irb
# load 'drive.rb'

require 'rubygems'
require 'csv'
require "json"

@data = {}
@leveldata = {}

@beats = []
@l = ''
@b = ''


file = File.open("csv/Mizhavu_beats_for_import.txt", "w")

CSV.foreach("csv/Mizhavu_beats_for_import.csv", "r") do |row|

	if row[0] == "end"
		@leveldata[@l.to_sym] = @beats
		@beats = []

	elsif row[0] == "endbeat"
		@data[@b.to_sym] = @leveldata
		@leveldata = {}
	
	else
		@b = row[0]
		@l = row[1]
		@beats <<  [row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9]]

	end
end

file.puts(@data.to_json)
file.close
	


  # use row here...













