#!/bin/bash
git pull

new_csv="$(./app/run.py --csv)"
new_date="$(echo "$new_csv" | tail -1 - | cut -d ',' -f 1 -)"
last_date="$(tail -1 ./_data/blood_stats.csv | cut -d ',' -f 1 -)"

if [[ "$new_date" == "$last_date" ]]; then
    echo "Error: Already updated today"
    exit 1
fi

echo "$new_csv" >> ./_data/blood_stats.csv
git add -u
git commit -m "AUTOMATIC UPDATE"
git push origin gh-pages

