# Scotblood Levels

This is a command line application for fetching the latest blood stock levels from [The Scottish National Blood Transfusion Service](https://www.scotblood.co.uk/), and present it in a human or machine readable way. This project is completely unaffiliated with The Scottish National Blood Transfusion Service.

# Usage

```
usage: run.py [-h] [--csv]

Produce a command line view of the current Scotblood blood levels

optional arguments:
  -h, --help  show this help message and exit
  --csv       display results in csv format rather than a bar chart
```

# Output

```bash
./run.py

O- [##########]  | 5.8 days left
A- [##########]+ | 8.7 days left
B- [######### ]  | 4.8 days left
AB-[########  ]  | 4 days left
O+ [##########]+ | 7.4 days left
A+ [##########]+ | 7.3 days left
B+ [##########]+ | 10.1 days left
AB+[##########]+ | 17.4 days left
```

Note that in terminals that do not support ANSI escape codes, this may appear different since ANSI colour codes are used for the bars.

```bash

./run.py --csv

2016-04-27,O-,6.8
2016-04-27,A-,8.7
2016-04-27,B-,5.8
2016-04-27,AB-,6
2016-04-27,O+,7.4
2016-04-27,A+,7.3
2016-04-27,B+,10.1
2016-04-27,AB+,17.4
```

# Example Usage

[This website](http://scotpaul.github.io/scotblood-levels/) is a graph of blood stock over time, which is updated daily by a script in the Github Pages branch of this repository. See `update_levels.sh` in [this branch](https://github.com/SCOTPAUL/scotblood-levels/tree/gh-pages) for this code.

