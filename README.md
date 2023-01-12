
# Hexlet: "Difference Generator"

[![hexlet-check](https://github.com/deus-ex-m/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg?branch=main)](https://github.com/deus-ex-m/frontend-project-46/actions/workflows/hexlet-check.yml)
[![Node CI](https://github.com/deus-ex-m/frontend-project-46/actions/workflows/nodejs.yml/badge.svg?branch=main)](https://github.com/deus-ex-m/frontend-project-46/actions/workflows/nodejs.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/74cd35462a7c58d57ee6/maintainability)](https://codeclimate.com/github/deus-ex-m/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/74cd35462a7c58d57ee6/test_coverage)](https://codeclimate.com/github/deus-ex-m/frontend-project-46/test_coverage)


CLI applications to compare two files. The result of the work is a report of differences in files. Work with JSON, YML, YAML files, result formats 'stylish', 'plain', 'json'.

## Requirements

* Node.js
* Make

## Installation and launch

* `make install` install
* `make help` information about application
* `gendiff [file1] [file2]` default launch
* `gendiff -f <format> [file1] [file2]` launch with user format

## Work examples

* Flat files, result formatted as 'stylish': https://asciinema.org/a/549699
* Nest files, result formatted as 'stylish': https://asciinema.org/a/550274
* Nest files, result formatted as 'plain': https://asciinema.org/a/550511
* Nest files, result formatted as 'json': https://asciinema.org/a/550831