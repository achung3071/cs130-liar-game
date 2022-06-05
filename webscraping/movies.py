import json
from bs4 import BeautifulSoup
from urllib.request import urlopen

url = "https://www.imdb.com/search/title/?groups=top_100&sort=user_rating,desc"
page = urlopen(url)
html = page.read().decode("utf-8")
soup = BeautifulSoup(html, "html.parser")

movie_elems = soup.find_all("div", class_="lister-item")
movies = []

for movie_elem in movie_elems:
    header = movie_elem.find("h3", class_="lister-item-header")
    title = header.find("a")
    movies.append(title.text)

with open("../src/assets/data/movies.json", "w") as f:
    json.dump(movies, f)
