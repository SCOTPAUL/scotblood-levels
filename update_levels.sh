#!/bin/bash
git pull
./app/run.py --csv >> ./_data/blood_stats.csv
git add -u
git commit -m "AUTOMATED -- Update stats"
git push origin gh-pages

