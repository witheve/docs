# Math

## Arithemtic

- plus (+)
- minus (-)
- times (*)
- divide (/)

## Trig

- sin = {rename("sin", schemas.trig)},
- cos = {rename("cos", schemas.trig)},
- tan = {rename("tan", schemas.trig)},

- abs = {rename("abs", schemas.unaryValue)},
- ceil = {rename("ceil", schemas.unaryValue)},
- floor = {rename("floor", schemas.unaryValue)},
- round = {rename("round", schemas.unaryValue)},
- mod = {schema({"return", IN, "value", "by"}, "mod")},