#!/bin/bash
git pull
./app/run.py --csv >> ./_data/blood_stats.csv
git add -u
git push origin gh-pages

