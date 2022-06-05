import json
from bs4 import BeautifulSoup
from urllib.request import urlopen

url = "https://www.rookieroad.com/sports/alphabetical-sports-list-a-z/"
page = urlopen(url)
html = page.read().decode("utf-8")
soup = BeautifulSoup(html, "html.parser")

content = soup.find_all("div", class_="k c")[1]
sports_list = content.find("ul")
sports_elems = sports_list.find_all("li")
sports = []

for sports_elem in sports_elems:
    sports.append(sports_elem.text)

with open("../src/assets/data/sports.json", "w") as f:
    json.dump(sports, f)
