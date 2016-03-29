#!/bin/bash
git pull
./app/run.py --csv >> ./_data/blood_stats.csv
git add -u
git commit -m "AUTOMATIC UPDATE"
git push origin gh-pages

