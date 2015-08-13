from bs4 import BeautifulSoup

p = '4'
s = '3'

with open (s+".xml", "r") as ofile:
    content=ofile.read()
    
myfile = open('xyz_'+p+'_'+s+'.txt', 'w')
soup = BeautifulSoup(content, "lxml")
all_img = soup.findAll('image')
for img in all_img:
    num = img.attrs['num']
    url = 'http://shtorki-online.ru/templates/homecolor_v2/images/dd/imgs/'+p+'/'+s+'/'+num+'.png'
    myfile.write("%s\n" % url)
    
myfile.close()
print(len(all_img))