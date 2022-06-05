import json
from bs4 import BeautifulSoup
from urllib.request import urlopen

urls = ["https://www.listchallenges.com/top-100-food-items-of-all-time",
        "https://www.listchallenges.com/top-100-food-items-of-all-time/list/2",
        "https://www.listchallenges.com/top-100-food-items-of-all-time/list/3"]
foods = []


for url in urls:
    page = urlopen(url)
    html = page.read().decode("utf-8")
    soup = BeautifulSoup(html, "html.parser")
    content = soup.find("div", id="repeaterListItems")
    food_elems = content.find_all("div", class_="item-name")
    for food_elem in food_elems:
        foods.append(food_elem.text.strip())

with open("../src/assets/data/foods.json", "w") as f:
    json.dump(foods, f)
