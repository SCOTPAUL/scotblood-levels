#!/bin/bash
git pull
./app/run.py --csv >> ./_data/blood_stats.csv
