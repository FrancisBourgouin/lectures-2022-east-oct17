# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

fake_urls = Url.create([
  {
    shorturl:"efwffwwfq",
    longurl:"http://google.com",
    description:"A version of google"
  },
  {
    shorturl:"wqfwqfqwfqwf",
    longurl:"http://google.ca",
    description:"A canadian version of google"
  },
  {
    shorturl:"fsafsafasf",
    longurl:"http://google.fr",
    description:"A french version of google"
  },
  {
    shorturl:"66u6ujj",
    longurl:"http://google.it",
    description:"A italian version of google"
  },
])