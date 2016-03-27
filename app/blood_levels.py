from BeautifulSoup import BeautifulSoup
import argparse
from datetime import date
import requests

def main():
    parser = argparse.ArgumentParser(description='Produce a command line view of the current Scotblood blood levels')
    parser.add_argument('--csv', dest='is_csv', action='store_const',
                        const=True, default=False, help='display results in csv format rather than a bar chart')

    args = parser.parse_args()

    url = 'https://www.scotblood.co.uk/learn-about-blood/current-blood-stock-levels.aspx'
    request = requests.get(url, headers={
        'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:43.0) Gecko/20100101 Firefox/43.0'})
    data = request.text
    parsed_data = BeautifulSoup(data)
    stock = parsed_data.body.find('ul', attrs={'class': 'stock-levels fc'}).findAll('li')

    len_longest_blood_type = 3

    if args.is_csv:
        date_str = str(date.today())

    for stock_level in stock:
        stock_data = stock_level['title'].split()
        blood_type = stock_data[0]
        blood_stock_level = stock_data[5]

        if args.is_csv:
            print date_str + ',' + blood_type + ',' + blood_stock_level

        else:
            print blood_type + ' ' * (len_longest_blood_type - len(blood_type)) + \
                get_bar(float(blood_stock_level)) + ' | ' + blood_stock_level + ' days left'


def get_bar(blood_stock_level):
    """
    :param blood_stock_level: float representing number of days of blood available
    :return: bar chart style string, e.g. [###########        ]
    """
    ansi_red = '\033[31m'
    ansi_clear = '\033[0m'

    frac = blood_stock_level / 6.0
    overflow = False

    if frac > 1.0:
        frac = 1.0
        overflow = True

    num_hashes = int(round(10 * frac, -1))

    assert (num_hashes <= 10)

    bar = '[' + ansi_red + '#' * num_hashes + ansi_clear + ' ' * (10 - num_hashes) + ']'

    if overflow:
        return bar + '+'
    else:
        return bar + ' '
