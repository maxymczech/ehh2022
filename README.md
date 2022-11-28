# ehh2022-diabro
A prototype application submission for European Healthcare Hackathon 2022. The app communicates with InterSystems cloud server using FHIR format, reads patient data and logs observations.

## TODO (for InterSystems challenge)
- Add linter
- Use `axios` for requests
- Unify styles for cards, icons, grid
- Use external dictionaries for disease codes, medical devices
- Move enumerable data to JSON files and/or external database, i.e. food items
- Better use of config options
- Fix homepage graph, use actual glucometer readings
- Add pagination, filtering, search to diabro page and homepage
- Create proper parser for Observation. Add detailed view for diabro cards
- Add ability to load info abot relations (i.e. doctors, practitioners). Maybe it will suffice to use `$everything` query on `Observation` in detailed view
- Add proper documentation in `README.txt`
- Finish calculator, info pages
