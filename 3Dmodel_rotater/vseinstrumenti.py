from bs4 import BeautifulSoup
import urllib.request
import urllib.parse
from socket import timeout
import re
import sys
import os
from os.path import basename, splitext
from urllib.parse import urlparse
import json, csv, sys
import unicodedata
import codecs
from unicodedata import normalize
import xlsxwriter
import random
import os.path
import sys
import threading

class Mythread(threading.Thread):
    '''Download pictures.'''
    def __init__(self, id_product, path):
        threading.Thread.__init__(self)
        self.id_product = id_product
        self.path = path
        print ('init thread.')

    def run(self):
        print ('thread running')
        print ('begin downloading %s' % self.id_product)
        pattern_main = "http://vseinstrumenti.ru"
        fl_not_found = 0
        try:
            #current_proxy = '122.155.195.26:8080'
            #request = urllib.request.Request(pattern_main+'/img_3d/goods/'+self.id_product+'/1.jpg')
            #img_source = urllib.request.FancyURLopener({"http":current_proxy}).open(request).read()
            #img_source = urllib.request.urlopen(request, timeout=10).read()
            img_source = urllib.request.urlopen(pattern_main+'/img_3d/goods/'+self.id_product+'/1.jpg').read()
        except timeout:
            print('socket timed out - URL %s', self.id_product)
        except urllib.error.HTTPError as e:   
            fl_not_found = 1
        except urllib.error.URLError as e:
            if hasattr(e, 'reason'):
                print('Failed to connect to server.')
                print('Reason: ', e.reason)
            elif hasattr(e, 'code'):
                print('Error code: ', e.code)
            #sys.exit(1)

        if(fl_not_found != 1):
            imgpath = os.path.join(self.path+'/img_3d/goods/'+self.id_product+'/1.jpg')
            dirnames = os.path.dirname(imgpath)
            if not os.path.exists(dirnames):
                os.makedirs(dirnames)
                
            for i in range(1,25):
                #name = str(i)+'.jpg'
                #current_proxy = '122.155.195.26:8080'
                #request = urllib.request.Request(pattern_main+'/img_3d/goods/'+self.id_product+'/'+str(i)+'.jpg')
                #page = urllib.request.FancyURLopener({"http":current_proxy}).open(request).read()
                #img_source = urllib.request.urlopen(request, timeout=10).read()
                img_source = urllib.request.urlopen(pattern_main+'/img_3d/goods/'+self.id_product+'/'+str(i)+'.jpg').read()
                imgpath = os.path.join(self.path+'/img_3d/goods/'+self.id_product+'/', str(i)+'.jpg')
                s = open(imgpath, "wb")
                s.write(img_source)
                s.close()

def main():
    #for id_product in range(1,727194):
    path = os.path.dirname(os.path.abspath(__file__))
    #for i in range(0,72719):
    for i in range(68371,72719):
        for id_product in range(i*10,(i+1)*10):
            mythread = Mythread(str(id_product),path)
            mythread.start()
        print ('main thread continues.')
        # wait for mythread
        mythread.join()

if __name__ == '__main__':
    main()
