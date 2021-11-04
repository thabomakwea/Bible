import requests
import json
import re
from bs4 import BeautifulSoup


bible = "21st Century King James version";
bibleCode = "KJV21";
testament= "old";
book = "Ruth";
chapters = 5;
verses = []

r = '{'
r += '"__collections__": {'
r += '"' + book + '": {'

for a in range(1, chapters):
    response = requests.get(
        'https://www.biblegateway.com/passage/?search=Ruth+' + str(a) + '&version=KJ21')
    html = response.text
    soup = BeautifulSoup(html, "html.parser")

    for vnum in soup.find_all("sup", {'class':'versenum'}): 
        vnum.decompose()

    for cnum in soup.find_all("span", {'class':'chapternum'}): 
        cnum.decompose()

    for b, tag in enumerate(soup.find_all("p")):

        if(str(tag.find_next("span").get("id")) != "None"):
            r += '"Ruth2coOAF2dByWwsL1S' + str(a) + str(b) + '": {'
            r += '"chapter": ' + '"' + str(a) + '",'
            r += '"book": ' + '"' + book + '",'
            r += '"text": ' + '"' + re.sub('<[^<]+?>', '', str(tag)) + '",'
            r += '"bible": ' + '"' + bibleCode + '",'
            r += '"verse": ' + '"' + str(b + 1) + '"'
            # r += '"__collections__:" {}'
            r += '},'
            # if b <= (len(soup.find_all("p")) - 3):
            #     r += '},'
            # else:
            #     r += '}'
            
r += '}'
r += '}'
r += '}'               


# r = '{'
# r += '"__collections__": {'
# r += '"' + bible + '": {'
# r += '"' + book + '": {'
# r += '"bible": ' + '"' + bible + '",'
# r += '"bible-code": ' + '"' + bibleCode + '",'
# r += '"testament": ' + '"' + testament + '",'
# r += '"book": ' + '"' + book + '",'
# r += '"__collections__" : {'

# for a in range(1, chapters):
#     response = requests.get(
#         'https://www.biblegateway.com/passage/?search=Ruth+' + str(a) + '&version=KJ21')
#     html = response.text
#     soup = BeautifulSoup(html, "html.parser")

#     r += '"Chapter ' + str(a) + '": {'
#     for b, tag in enumerate(soup.find_all("p")):
#         if(str(tag.find_next("span").get("id")) != "None"):
#             r += '"verse ' + str(b + 1) + '": {'
#             r += '"verse_id": "' + str(tag.find_next("span").get("id")) + '",'
#             r += '"verse_number": "' + str(b + 1) + '",'
#             r += '"chapter": "' + str(tag.find_next("span").get("class")) + '",'
#             r += '"verse": "' + re.sub('<[^<]+?>', '', str(tag)) + '",'
#             r += '"raw": ' + json.dumps(str(tag)) 
#             if b <= (len(soup.find_all("p")) - 3):
#                 r += '},'
#             else:
#                 r += '}'
        
#     if a <= (chapters-2):
#         r += '},'
#     else:
#         r+= '}'
# r += '}'
# r += '}'
# r += '}'
# r += '}'
# r += '}'

f = open("dataBackup.txt", "w+")
f.write(r)
f.close()
