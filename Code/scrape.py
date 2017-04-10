import requests
from bs4 import BeautifulSoup
import sys
import subprocess
import flask
from flask import Flask
app = Flask(__name__)

def devices_scrape():
    base_url = 'https://www.ifixit.com/Teardown'
    html = requests.get(base_url)
    soup = BeautifulSoup([html],"html.parser")
    bodys = soup.select('selected-blurb-text')
    text = [a.attrs.get('h3') for a in soup.select('selected-blurb-text')]
    images = [a.attrs.get('img') for a in soup.select('selectedBlurb blurbHidden')]
    print(bodys)
    print(text)
    print(images)
    #Post to site



devices_scrape()
