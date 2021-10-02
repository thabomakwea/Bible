import requests
import json
import re
from bs4 import BeautifulSoup


bible = "21st Century King James version";
bibleCode = "KJ21";
testament= "old";
book = "Ecclesiastes"
chapters = 19;
verses = []

r = '{'
r += '"__collections__": {'
r += '"' + bible + '": {'
r += '"' + book + '": {'
r += '"bible": ' + '"' + bible + '",'
r += '"bible-code": ' + '"' + bibleCode + '",'
r += '"testament": ' + '"' + testament + '",'
r += '"book": ' + '"' + book + '",'
r += '"__collections__" : {'

for a in range(1, chapters):
    response = requests.get(
        'https://www.biblegateway.com/passage/?search=' + str(book) + '+' + str(a) + '&version=' + str(bibleCode))
    html = response.text
    soup = BeautifulSoup(html, "html.parser")

    r += '"Chapter ' + str(a) + '": {'
    for b, tag in enumerate(soup.find_all("p")):
        if(str(tag.find_next("span").get("id")) != "None"):
            r += '"verse ' + str(b + 1) + '": {'
            r += '"verse_id": "' + str(tag.find_next("span").get("id")) + '",'
            r += '"verse_number": "' + str(b + 1) + '",'
            r += '"chapter": "' + str(tag.find_next("span").get("class")) + '",'
            r += '"verse": "' + re.sub('<[^<]+?>', '', str(tag)) + '",'
            r += '"raw": ' + json.dumps(str(tag)) 
            if b <= (len(soup.find_all("p")) - 3):
                r += '},'
            else:
                r += '}'
        
    if a <= (chapters-2):
        r += '},'
    else:
        r+= '}'
r += '}'
r += '}'
r += '}'
r += '}'
r += '}'

f = open("dataBackup.txt", "w+")
f.write(r)
f.close()
